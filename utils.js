const getInitParams = (statesLength, candidatesLength) => {
	const radius = statesLength * (statesLength * 0.16);
	const candidateRadius = (((Math.PI * Math.pow(radius, 2)) / candidatesLength) / radius) + 8;
	const stateRadius = statesLength / 2.5;
	const dimensions = (radius * 2) + (stateRadius * 2);

	return ({ radius, candidateRadius, stateRadius, dimensions, })
};
const getStatesNodes = ({ states, radius, dimensions, }) => (
	states.map((state, index) => {
		const angle = (index / (states.length / 2)) * Math.PI;
		state.x = (radius * Math.sin(angle)) + (dimensions / 2);
		state.y = (radius * Math.cos(angle)) + (dimensions / 2);
		return state
	})
);

const getCandidatesNodes = ({
	candidates,
  radius,
  candidateRadius,
  stateRadius,
  dimensions,
}) => (
	candidates
		.reduce((candidates, candidate) => {
			const positionMap = { 'dem': 0, 'dem-leaning': 1, 'tossup': 2, 'gop-leaning': 3, 'gop': 4 };
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

			const getDistanceFromEdge = function(radius){
				switch (candidatesOfType[0].position) {
					case 'dem':
					case 'gop':
						return (Math.sqrt(radius) / stateRadius) + ((1 / stateRadius) * Math.pow(candidateRadius / 3, 1));
          case 'dem-leaning':
          case 'gop-leaning':
						return (Math.sqrt(radius) / stateRadius) + ((1 / stateRadius) * Math.pow(candidateRadius / 3, 2));
					default:
						return (Math.sqrt(radius) / stateRadius) + ((1 / stateRadius) * Math.pow(candidateRadius / 3, 3));
				}
			};

			let level = 1;
			let lastIndex = 0;
			let distanceFromEdge = getDistanceFromEdge(radius);

			candidatesOfType
				.forEach((candidate, index) => {
					const { itemsPerArc, arc, } = getPosition(distanceFromEdge);
					const scale = d3.scaleLinear()
						.range([0, candidatesOfType.length])
						.domain([lastIndex, candidatesOfType.length]);

					if (candidate.position.includes('dem')) {
						const angle = (candidatesOfType.length - lastIndex) < itemsPerArc
							? ((scale(index) + 0.5) / candidatesOfType.length) * Math.PI * -1
							: (((index - lastIndex) + 0.5) / itemsPerArc) * Math.PI * -1;
						candidate.x = (radius / distanceFromEdge * Math.sin(angle)) + (dimensions / 2);
						candidate.y = (radius / distanceFromEdge * Math.cos(angle)) + (dimensions / 2);
					}
					else if (candidate.position.includes('gop')) {
						const angle = (candidatesOfType.length - lastIndex) < itemsPerArc
							? ((scale(index) + 0.5) / candidatesOfType.length) * Math.PI
							: (((index - lastIndex) + 0.5) / itemsPerArc) * Math.PI;
						candidate.x = (radius / distanceFromEdge * Math.sin(angle)) + (dimensions / 2);
						candidate.y = (radius / distanceFromEdge * Math.cos(angle)) + (dimensions / 2);
					}
					else {
						const angle = (index / (candidatesOfType.length / 2)) * Math.PI;
						candidate.x = (radius / distanceFromEdge * Math.cos(angle)) + (dimensions / 2);
						candidate.y = (radius / distanceFromEdge * Math.sin(angle)) + (dimensions / 2);
					}

					if (lastIndex + itemsPerArc <= index + 1) {
						lastIndex = index + 1;
						distanceFromEdge =  getDistanceFromEdge(arc / Math.PI);
						level++;
					}
					result.push(candidate)
				});
			return result
		}, [])
);

const wrapText = (context, name, words, lineWidth) => {
	const lines = [ name, ];
	let line = '';
	words.forEach((word, i) => {
		const testLine = line + word + ' ';
		const metrics = context.measureText(testLine);
		const testWidth = metrics.width;
		if (testWidth > lineWidth && i > 0) {
			lines.push(line);
			line = word + ' '
		}
		else {
			line = testLine;
		}
	});
	lines.push(line);
	return lines;
};

const getColor = (position, opacity) => {
	switch (position) {
		case 'dem':
			return opacity ? `rgba(0, 73, 182, ${opacity})` : '#0049B6';
		case 'dem-leaning':
			return opacity ? `rgba(127, 163, 219, ${opacity})` : '#7FA3DB';
		case 'gop-leaning':
			return opacity ? `rgba(240, 140, 145, ${opacity})` : '#F08C91';
		case 'gop':
			return opacity ? `rgba(225, 25, 35, ${opacity})` : '#E11923';
		default:
			return opacity ? `rgba(178, 178, 178, ${opacity})` : '#B2B2B2'
	}
};
