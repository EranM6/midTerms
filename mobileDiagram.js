const mobileDiagram = (canvas, candidates, states) => {
	const custom = d3.select('body').append('custom');
	const context = canvas.node().getContext("2d");
	const width = canvas.node().width;
	const height = canvas.node().height;

	const {
		radius,
		candidateRadius,
		stateRadius,
		dimensions,
	} = getInitParams(states.length, candidates.length);

	const t = d3.transition().duration(1000);

	const statesNodes = getStatesNodes({ states, radius, dimensions, });
	const candidatesNodes = getCandidatesNodes({ candidates, radius, candidateRadius, stateRadius, dimensions, });

	custom.append('g').classed('links', true);
	custom.append('g').classed('states', true);
	custom.append('g').classed('statesNames', true);
	custom.append('g').classed('candidates', true);
	custom.append('g').classed('tooltip', true);

	const draw = () => {
		context.save();
		context.clearRect(0, 0, width, height);

		candidatesNodes.forEach(candidate => {
			context.beginPath();
			context.arc(candidate.x, candidate.y, candidateRadius, 0, 2 * Math.PI, false);
			context.fillStyle = getColor(candidate.position);
			context.fill();
			context.globalCompositeOperation='destination-over';
			const state = statesNodes.find(state => state.symbol === candidate.state);
			context.beginPath();
			context.moveTo(candidate.x, candidate.y);
			context.lineTo(state.x, state.y);
			context.strokeStyle = getColor(candidate.position, 0.15);
			context.stroke();
			context.globalCompositeOperation='source-over';
		});

		statesNodes.forEach(state => {
			context.beginPath();
			context.arc(state.x, state.y, stateRadius, 0, 2 * Math.PI, false);
			context.fillStyle = '#000';
			context.fill();
			context.font = '16pt Calibri';
			context.textAlign = 'center';
			context.fillStyle = '#FFF';
			context.fillText(state.symbol, state.x, state.y + 5);
		});

		context.restore();
	};

	const simulation = d3.forceSimulation(candidatesNodes)
		.force('x', d3.forceX().strength(candidateRadius / 2500))
		.force('y', d3.forceY().strength(candidateRadius / 2500))
		.force('center', d3.forceCenter(radius + stateRadius, radius + stateRadius))
		.force('collide', d3
			.forceCollide(candidateRadius * 1.5)
			.strength(Math.sqrt(candidates.length) / (candidateRadius * 2))
		)
		.on('tick', () => {
			draw()
		});

	simulation.nodes(candidatesNodes)
		.alpha(1)
		.restart();

	draw()
};
