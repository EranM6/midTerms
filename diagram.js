const diagram = (svg, candidates, states) => {
	const radius = states.length * 8;
	const candidateRadius = (((Math.PI * Math.pow(radius, 2)) / candidates.length) / radius) + 8;
	const stateRadius = 20;
	const dimensions = (radius * 2) + (stateRadius * 2);
	let activeState = null;
	let activeCandidate = null;

	const t = d3.transition().duration(1000);

	const statesNodes = states.map((state, index) => {
		const angle = (index / (states.length / 2)) * Math.PI; // Calculate the angle at which the element will be placed.
		state.x = (radius * Math.sin(angle)) + (dimensions / 2); // Calculate the x position of the element.
		state.y = (radius * Math.cos(angle)) + (dimensions / 2); // Calculate the y position of the element.
		return state
	});

	const candidatesNodes = candidates
		.reduce((candidates, candidate) => {
			const positionMap = { '-2': 0, '-1': 1, 0: 2, 1: 3, 2: 4 };
			const arrayPosition = positionMap[ candidate.position ];
			candidates[ arrayPosition ].push(candidate);
			return candidates
		}, [ [], [], [], [], [] ])
		.reduce((result, candidatesOfType) => {
			const getPosition = distanceFromEdge => {
				const arc = Math.floor((radius / distanceFromEdge) * Math.PI);
				const itemsPerArc = Math.floor(arc  / (candidateRadius * 2));
				return { itemsPerArc, arc, };
			};
			let level = 1;

			const getDistanceFromEdge = function(radius){
        console.log(radius)
				switch (Math.abs(candidatesOfType[0].position)) {
					case 2:
						// return 1.25;
						return (Math.sqrt(radius) / stateRadius) + ((1 / stateRadius) * Math.pow(candidateRadius / 3, 1));
					case 1:
						// return 2;
						return (Math.sqrt(radius) / stateRadius) + ((1 / stateRadius) * Math.pow(candidateRadius / 3, 2));
					default:
						// return 5;
						return (Math.sqrt(radius) / stateRadius) + ((1 / stateRadius) * Math.pow(candidateRadius / 3, 3));
				}
			};
			let lastIndex = 0;
      let distanceFromEdge = getDistanceFromEdge(radius);
      candidatesOfType
				.forEach((candidate, index) => {
					const { itemsPerArc, arc, } = getPosition(distanceFromEdge);
					const scale = d3.scaleLinear()
						.range([0, candidatesOfType.length])
						.domain([lastIndex, candidatesOfType.length]);

					if (candidate.position < 0) {
						const angle = (candidatesOfType.length - lastIndex) < itemsPerArc
							? ((scale(index) + 0.5) / candidatesOfType.length) * Math.PI * -1
							: (((index - lastIndex) + 0.5) / itemsPerArc) * Math.PI * -1;
						candidate.x = (radius / distanceFromEdge * Math.sin(angle)) + (dimensions / 2);
						candidate.y = (radius / distanceFromEdge * Math.cos(angle)) + (dimensions / 2);
					}
					else if (candidate.position > 0) {
						const angle = (candidatesOfType.length - lastIndex) < itemsPerArc
							? ((scale(index) + 0.5) / candidatesOfType.length) * Math.PI
							: (((index - lastIndex) + 0.5) / itemsPerArc) * Math.PI;
						candidate.x = (radius / distanceFromEdge * Math.sin(angle)) + (dimensions / 2);
						candidate.y = (radius / distanceFromEdge * Math.cos(angle)) + (dimensions / 2);
					}
					else {
						// const angle = (index / (candidatesOfType.length / 2)) * Math.PI;
						const angle = (index / (candidatesOfType.length / 2)) * Math.PI;
						candidate.x = (radius / distanceFromEdge * Math.cos(angle)) + (dimensions / 2);
						candidate.y = (radius / distanceFromEdge * Math.sin(angle)) + (dimensions / 2);
					}

					if (lastIndex + itemsPerArc <= index + 1) {
						lastIndex = index + 1;
            // distanceFromEdge +=  distanceFromEdge * (level / candidateRadius);
            distanceFromEdge =  getDistanceFromEdge(arc / Math.PI);
						level++;
					}
					result.push(candidate)
				});
      console.log('----------------')
			return result
		}, []);

	const toggleTooltip = d => {
		if (!activeCandidate) {
			const info = svg.selectAll('.info').filter(`.${d.name.split(' ')[ 0 ]}-${d.state}`);
			const name = svg.selectAll('.name').filter(`.${d.name.split(' ')[ 0 ]}-${d.state}`);

			name
				.transition(t)
				.attr('opacity', 0);

			info
				.transition(t)
				.attr('opacity', 1);
			activeCandidate = d
		}
		else {
			if (!d || activeCandidate.name === d.name) {
				const info = svg.selectAll('.info')
					.filter(`.${activeCandidate.name.split(' ')[ 0 ]}-${activeCandidate.state}`);
				const name = svg.selectAll('.name')
					.filter(`.${activeCandidate.name.split(' ')[ 0 ]}-${activeCandidate.state}`);

				name
					.transition(t)
					.attr('opacity', 1);

				info
					.transition(t)
					.attr('opacity', 0);
				activeCandidate = null
			}
			else {
				const prevInfo = svg.selectAll('.info')
					.filter(`.${activeCandidate.name.split(' ')[ 0 ]}-${activeCandidate.state}`);
				const info = svg.selectAll('.info').filter(`.${d.name.split(' ')[ 0 ]}-${d.state}`);
				const prevName = svg.selectAll('.name')
					.filter(`.${activeCandidate.name.split(' ')[ 0 ]}-${activeCandidate.state}`);
				const name = svg.selectAll('.name').filter(`.${d.name.split(' ')[ 0 ]}-${d.state}`);

				prevName
					.transition(t)
					.attr('opacity', 1);

				name
					.transition(t)
					.attr('opacity', 0);

				prevInfo
					.transition(t)
					.attr('opacity', 0);

				info
					.transition(t)
					.attr('opacity', 1);
				activeCandidate = d
			}
		}
	};

	const changeState = state => {
		if (activeCandidate) {
			toggleTooltip(null)
		}
		if (!activeState || activeState.symbol !== state.symbol) {
			update(state)
		}
		else {
			update(null)
		}
	};

	const getColor = position => {
		switch (position) {
			case -2:
				return '#0049B6';
			case -1:
				return '#7FA3DB';
			case 1:
				return '#F08C91';
			case 2:
				return '#E11923';
			default:
				return '#B2B2B2'
		}
	};

	const buildParagraph = text => (
		text.each(function () {
			const text = d3.select(this);
			if (text.text()) {
				const words = text.text().split(/\s+/).reverse();
				const data = text.data();
				const width = 120;
				let line = [];
				let lineNumber = 0;
				const padding = 20;
				const lineHeight = 24;
				const className = text.attr('class');
				const tooltip = svg.select('.tooltip').append('g')
					.attr('class', className)
					.attr('opacity', 0)
					.attr('style', 'pointer-events: none; direction: rtl; font-size: 18px;')
					.data(data);
				const bg = tooltip.append('rect');
				tooltip.append('text')
					.attr('x', width + padding)
					.attr('y', 0)
					.attr('dy', `${(++lineNumber * lineHeight) + (padding / 2)}px`)
					.attr('style', 'font-weight: 700; Line-height:30px;')
					.text(data[ 0 ].name);
				let newText = tooltip.append('text').attr('x', width + padding).attr('y', 0).attr('dy', `${(++lineNumber * lineHeight) + padding}px`);
				while (word = words.pop()) {
					line.push(word);
					newText.text(line.join(' '));
					if (newText.node().getComputedTextLength() > width) {
						line.pop();
						newText.text(line.join(' '));
						line = [ word ];
						newText = tooltip.append('text').attr('x', width + padding).attr('y', 0).attr('dy', `${(++lineNumber * lineHeight) + padding}px`)
							.text(word)
					}
				}
				bg
					.attr('width', `${width + (padding * 2)}px`)
					.attr('height', `${(lineNumber * lineHeight) + (padding * 2)}px`)
					.attr('fill', '#fff')
					.attr('stroke', getColor(data[ 0 ].position))

			}
			text.remove()
		})
	);

	svg.append('g').classed('links', true);
	svg.append('g').classed('states', true);
	svg.append('g').classed('statesNames', true);
	svg.append('g').classed('candidates', true);
	svg.append('g').classed('tooltip', true);

	const update = (selectedState) => {
		activeState = selectedState;

		const link = svg.select('.links')
			.selectAll('line')
			.data(candidatesNodes, d => d.name);

		link.exit()
			.transition(t)
			.attr('opacity', 0)
			.remove();

		const linkEnter = link.enter()
			.append('line')
			.attr('opacity', 0);

		linkEnter.merge(link)
			.classed('link', true)
			.attr('stroke', d => getColor(d.position))
			.attr('x1', d => statesNodes.find(state => state.symbol === d.state).x)
			.attr('y1', d => statesNodes.find(state => state.symbol === d.state).y)
			.transition(t)
			.attr('opacity', d => (selectedState
				? selectedState.symbol === d.state
					? 0.4
					: 0
				: 0.15),
			);

		const candidate = svg.select('.candidates')
			.selectAll('circle')
			.data(candidatesNodes, d => d.name);

		candidate.exit()
			.transition(t)
			.attr('opacity', 0)
			.attr('r', 0)
			.remove();

		const candidateEnter = candidate.enter()
			.append('circle')
			.attr('opacity', 0)
			.attr('r', 0);

		candidateEnter.merge(candidate)
			.classed('candidate', true)
			.attr('cx', d => d.x)
			.attr('cy', d => d.y)
			.attr('fill', d => getColor(d.position))
			.on('click', d => selectedState && toggleTooltip(d))
			.transition(t)
			.attr('opacity', 1)
			.attr('r', d => {
				if (selectedState) {
					if (selectedState.symbol === d.state) {
						if (d.info) return candidateRadius;
						return candidateRadius / 2
					}
					return 0
				}
				return candidateRadius
			});

		candidate.enter()
			.append('text')
			.attr('class', d => `${d.name.split(' ')[ 0 ]}-${d.state} name`)
			.attr('opacity', 0)
			.attr('style', 'font-weight: 700; Line-height:30px; pointer-events: none;')
			.text(d => d.name);

		candidate.enter()
			.append('text')
			.attr('class', d => `${d.name.split(' ')[ 0 ]}-${d.state} info`)
			.text(d => d.info)
			.call(buildParagraph);

		svg.selectAll('.candidates > text')
			.transition(t)
			.attr('opacity', d => {
				if (activeState) {
					if (activeState.symbol === d.state) {
						return 1
					}
					return 0
				}
				return 0
			});

		const state = svg.select('.states')
			.selectAll('circle')
			.data(statesNodes, d => d.symbol);

		state.enter()
			.append('circle')
			.attr('fill', '#000')
			.merge(state)
			.classed('state', true)
			.attr('cx', d => d.x)
			.attr('cy', d => d.y)
			.attr('r', stateRadius)
			.transition(t)
			.attr('fill', d => (selectedState
				? selectedState.symbol === d.symbol
					? '#000'
					: '#CCC'
				: '#000'),
			);

		state.enter().append('text')
			.classed('symbol', true)
			.attr('text-anchor', 'middle ')
			.attr('style', 'pointer-events: none;')
			.attr('fill', '#fff')
			.attr('x', d => d.x)
			.attr('y', d => d.y)
			.attr('dx', '0')
			.attr('dy', '5')
			.text(d => d.symbol);

		const stateNameBG = svg.select('.statesNames')
			.selectAll('rect')
			.data(statesNodes, d => d.symbol);

		stateNameBG.exit()
			.transition(t)
			.attr('width', 0)
			.remove();

		const stateNameBGEnter = stateNameBG.enter()
			.append('rect')
			.attr('width', 0)
			.attr('transform', `translate(0 -${(stateRadius * 1.25) / 2})`);

		stateNameBGEnter.merge(stateNameBG)
			.attr('fill', '#000')
			.attr('height', stateRadius * 1.25)
			.attr('x', d => d.x)
			.attr('y', d => d.y)
			.attr('rx', 5)
			.attr('ry', 5)
			.transition(t)
			.attr('transform', d =>
				`translate(-${
					selectedState && selectedState.symbol === d.symbol
						? (d.name.length * 10) / 2
						: 0
					} -${(stateRadius * 1.25) / 2})`,
			)
			.attr('width', d =>
				(selectedState && selectedState.symbol === d.symbol
					? d.name.length * 10
					: 0),
			);

		const stateName = svg.select('.statesNames')
			.selectAll('text')
			.data(statesNodes, d => d.symbol);

		stateName.exit()
			.transition(t)
			.attr('opacity', 0)
			.remove();

		const stateNameEnter = stateName.enter()
			.append('text')
			.attr('width', 0);

		stateNameEnter.merge(stateName)
			.classed('name', true)
			.attr('text-anchor', 'middle ')
			.attr('style', 'pointer-events: none;')
			.attr('fill', '#fff')
			.attr('x', d => d.x)
			.attr('y', d => d.y)
			.attr('dx', '0')
			.attr('dy', '5')
			.text(d => d.name)
			.transition(t)
			.attr('opacity', d =>
				(selectedState && selectedState.symbol === d.symbol
					? 1
					: 0),
			);

		svg.append('line')
			.attr('x1', radius + stateRadius)
			.attr('x2', radius + stateRadius)
			.attr('y1', (stateRadius * 2) + 5)
			.attr('y2', (radius * 2))
			.attr('stroke', '#000')
			.attr('stroke-width', 1)
			.attr('stroke-dasharray', '10 10');

		svg.append('line')
			.attr('x1', (stateRadius * 2) - (stateRadius * 2) + 5)
			.attr('x2', (radius * 2) + (stateRadius * 2))
			.attr('y1', radius + stateRadius)
			.attr('y2', radius + stateRadius)
			.attr('stroke', '#000')
			.attr('stroke-width', 1)
			.attr('stroke-dasharray', '10 10');

		svg.selectAll('.state').on('click', state => changeState(state));
		stateNameBG.on('click', state => changeState(state));

		const simulation = d3.forceSimulation(candidatesNodes)
		  .force('x', d3.forceX().strength(candidateRadius / 2500))
		  .force('y', d3.forceY().strength(candidateRadius / 2500))
		  .force('center', d3.forceCenter(radius + stateRadius, radius + stateRadius))
		  .force('collide', d3
			  .forceCollide(candidateRadius * 1.5)
			  .strength(Math.sqrt(candidates.length) / (candidateRadius * 2))
		  )
		  .on('tick', () => {
		    svg.selectAll('.candidate')
		      .attr('cx', d => d.x)
		      .attr('cy', d => d.y);
		    svg.selectAll('.link')
		      .attr('x2', d => d.x)
		      .attr('y2', d => d.y);
		    svg.selectAll('.info')
		      .attr('transform', d => `translate(${d.x} ${d.y})`);
		    svg.selectAll('.candidates > text')
		      .attr('x', d => d.x + candidateRadius + 2)
		      .attr('y', d => d.y + candidateRadius * 0.5)
		  });

		simulation.nodes(candidatesNodes)
		  .alpha(1)
		  .restart()
	};
	update(null, null)
};
