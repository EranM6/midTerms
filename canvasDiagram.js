const canvasDiagram = (canvas, candidates, states) => {
	const context = canvas.node().getContext('2d');
	const width = canvas.node().width;
	const height = canvas.node().height;
	const fontFamily = getComputedStyle(document.body).fontFamily.split(',')[0].slice(1,-1);

	const {
		radius,
		candidateRadius,
		stateRadius,
		dimensions,
	} = getInitParams(states.length, candidates.length);

	let activeState = null;
	let activeCandidate = null;

	const t = d3.transition().duration(1000);

	const statesNodes = getStatesNodes({ states, radius, dimensions });
	const candidatesNodes = getCandidatesNodes({ candidates, radius, candidateRadius, stateRadius, dimensions });

	const draw = (selectedState, selectedCandidate) => {
		activeState = selectedState;
		activeCandidate = selectedCandidate;
		context.save();
		context.clearRect(0, 0, width, height);

		// Draw the candidates text.
		candidatesNodes.forEach(candidate => {
			if (
				selectedState &&
				selectedCandidate &&
				candidate.info &&
				selectedState.symbol === candidate.state &&
				selectedCandidate.name === candidate.name
			) {
				context.globalCompositeOperation = 'destination-over';
				context.textAlign = 'start';
				context.fillStyle = '#000';

				const words = candidate.info.split(/\s+/);
				const lineWidth = 120;
				const padding = 20;
				const lines = wrapText(context, candidate.name, words, lineWidth - (padding * 2));
				let lineNumber = lines.length;
				const lineHeight = 24;
				const tooltipWidth = lineWidth + (padding * 2);
				const tooltipHeight = (lineNumber * lineHeight) + (padding * 2);
				lines.forEach((line, i) => {
					const lineX = candidate.x + tooltipWidth > width
						? (candidate.x + (padding / 2)) - (candidate.x + tooltipWidth - width)
						: candidate.x + (padding / 2);
					const lineY = candidate.y + tooltipHeight > height
						? (candidate.y + (lineHeight * (i +1)) + (padding / 2)) - (candidate.y + tooltipHeight - height) - 5
						: candidate.y + (lineHeight * (i + 1)) + (padding / 2);
					context.font = `${i === 0 ? 'bold ' : ''}18px ${fontFamily}`;
					context.fillText(line, lineX, lineY);
				});

				const tooltipX = candidate.x + tooltipWidth > width
					? candidate.x - (candidate.x + tooltipWidth - width)
					: candidate.x;
				const tooltipY = candidate.y + tooltipHeight > height
					? (candidate.y - (candidate.y + tooltipHeight - height)) - 5
					: candidate.y;

				context.beginPath();
				context.rect(
					tooltipX,
					tooltipY,
					tooltipWidth,
					tooltipHeight,
				);
				context.fillStyle = '#FFF';
				context.fill();
				context.strokeStyle = getColor(candidate.position);
				context.stroke();
				context.globalCompositeOperation = 'source-over';
			}
		});

		context.globalCompositeOperation = 'destination-over';

		// Draw divider (dashed line).
		context.setLineDash([10, 10]);
		context.beginPath();
		context.moveTo(radius + stateRadius, (stateRadius * 2) + 5);
		context.lineTo(radius + stateRadius, (radius * 2));
		context.strokeStyle = '#000';
		context.stroke();
		context.setLineDash([]);

		if (selectedState) {
			// Draw the candidates names.
			candidatesNodes.forEach(candidate => {
				if (
					candidate.info &&
					selectedState.symbol === candidate.state &&
					(!selectedCandidate || selectedCandidate.name !== candidate.name)
				) {
					context.font = `bold 18px ${fontFamily}`;
					context.textAlign = 'start';
					context.fillStyle = '#000';
					context.fillText(
						candidate.name,
						candidate.x + candidateRadius + 2,
						candidate.y + candidateRadius * 0.5,
					);
				}
			});
		};

		if (selectedState) {
			// Draw the states full names.
			statesNodes.forEach(state => {
				if (selectedState.name === state.name) {
					const xPosition = state.x * 100 / width < 25
						? state.x
						: state.x * 100 / width < 75
							? state.x - (((state.name.length * 9) + 10) / 2)
							: state.x - ((state.name.length * 9) + 10);
					context.font = `16px ${fontFamily}`;
					context.textAlign = 'center';
					context.fillStyle = '#FFF';
					context.fillText(state.name, xPosition + (((state.name.length * 9) + 10) / 2), state.y + 6);

					const rectX = xPosition;
					const rectY = state.y - ((stateRadius * 1.5) / 2);
					const rectWidth = (state.name.length * 9) + 10;
					const rectHeight = stateRadius * 1.5;
					const rectRadius = 10;

					context.beginPath();
					context.moveTo(rectX + rectRadius, rectY);
					context.lineTo(rectX + rectWidth - rectRadius, rectY);
					context.quadraticCurveTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + rectRadius);
					context.lineTo(rectX + rectWidth, rectY + rectHeight - rectRadius);
					context.quadraticCurveTo(rectX + rectWidth, rectY + rectHeight, rectX + rectWidth - rectRadius, rectY + rectHeight);
					context.lineTo(rectX + rectRadius, rectY + rectHeight);
					context.quadraticCurveTo(rectX, rectY + rectHeight, rectX, rectY + rectHeight - rectRadius);
					context.lineTo(rectX, rectY + rectRadius);
					context.quadraticCurveTo(rectX, rectY, rectX + rectRadius, rectY);
					context.closePath();
					context.fillStyle = '#000';
					context.fill();
				}
			});
		}

		// Draw the states.
		statesNodes.forEach(state => {
			if(!selectedState || selectedState.name !== state.name) {
				context.font = `16px ${fontFamily}`;
				context.textAlign = 'center';
				context.fillStyle = '#FFF';
				context.fillText(state.symbol, state.x, state.y + 6);
			}
			context.beginPath();
			context.arc(state.x, state.y, stateRadius, 0, 2 * Math.PI, false);
			context.fillStyle = selectedState
				? selectedState.symbol === state.symbol
					? '#000'
					: '#CCC'
				: '#000';
			context.fill();
		});

		// Draw the circles.
		candidatesNodes.forEach(candidate => {
			if (!selectedState || selectedState.symbol === candidate.state) {
				context.beginPath();
				context.arc(
					candidate.x,
					candidate.y,
					selectedState && !candidate.info
						? candidateRadius / 2
						: candidateRadius
					,
					0,
					2 * Math.PI,
					false
				);
				context.fillStyle = getColor(candidate.position);
				context.fill();
			}
		});

		// Draw the lines.
		candidatesNodes.forEach(candidate => {
			if (!selectedState || selectedState.symbol === candidate.state) {
				const state = statesNodes.find(state => state.symbol === candidate.state);
				context.beginPath();
				context.moveTo(candidate.x, candidate.y);
				context.lineTo(state.x, state.y);
				context.strokeStyle = getColor(candidate.position, selectedState ? 0.4 : 0.15);
				context.stroke();
			}
		});
		context.globalCompositeOperation = 'source-over';


		context.restore();
	};

	const getMouesPosition = ([ x, y ]) => ({
		x: x * width / canvas.node().clientWidth | 0,
		y: y * height / canvas.node().clientHeight | 0,
	});

	const searchState = point => {
		let isState = null;
		const { x, y } = getMouesPosition(point);
		statesNodes.forEach(state => {
			const dx = state.x - x;
			const dy = state.y - y;
			const distance = Math.sqrt((dx * dx) + (dy * dy));
			if (distance < stateRadius) {
				isState = state;
			}
		});
		return isState;
	};

	const searchCandidate = point => {
		let isCandidate = null;
		const { x, y } = getMouesPosition(point);
		candidatesNodes.forEach(candidate => {
			const dx = candidate.x - x;
			const dy = candidate.y - y;
			const distance = Math.sqrt((dx * dx) + (dy * dy));
			if (candidate.info && distance < stateRadius && candidate.state === activeState.symbol) {
				isCandidate = candidate;
			}
		});
		return isCandidate;
	};

	canvas.on('click', function () {
		const point = d3.mouse(this);
		const state = searchState(point);
		if (state) {
			draw(activeState && state.symbol === activeState.symbol ? null : state, null);
			simulation.nodes(candidatesNodes)
				.alpha(1)
				.restart();
		}
		else if (activeState) {
			const candidate = searchCandidate(point);
			if (candidate) {
				draw(activeState, activeCandidate && candidate.name === activeCandidate.name ? null : candidate)
			}
		}
	});

	const simulation = d3.forceSimulation(candidatesNodes)
		.force('x', d3.forceX().strength(candidateRadius / 2500))
		.force('y', d3.forceY().strength(candidateRadius / 2500))
		.force('center', d3.forceCenter(radius + stateRadius, radius + stateRadius))
		.force('collide', d3
			.forceCollide(candidateRadius * 1.5)
			.strength(Math.sqrt(candidates.length) / (candidateRadius * 2)),
		)
		.on('tick', () => {
			draw(activeState, activeCandidate)
		});

	simulation.nodes(candidatesNodes)
		.alpha(1)
		.restart();

	draw(null, null)
};
