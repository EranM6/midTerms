const buildLegend = (svg, candidates) => {
  const width = parseInt(svg.style('width'));
  const fontFamily = getComputedStyle(document.body).fontFamily.split(',')[0].slice(1,-1);
	const direction = svg.style('direction');
	const isEng = direction === 'ltr';
	const text = isEng ? eng : heb;

	const color = [
    '#0049B6',
    '#7FA3DB',
    '#B2B2B2',
    '#F08C91',
    '#E11923',
  ];

  const data = candidates
    .reduce((candidates, candidate) => {
      const positionMap = { 'dem': 0, 'dem-leaning': 1, 'tossup': 2, 'gop-leaning': 3, 'gop': 4 };
      const arrayPosition = positionMap[ candidate.position ];
      candidates[ arrayPosition ].push(candidate);
      return candidates
    }, [ [], [], [], [], [] ])
    .map(candidatesOfType => candidatesOfType.length);

  const scale = d3.scaleLinear().range([ 0, 840, ]).domain([ 0, width, ]);
  const lineHeight = 40;

  const title = svg.append('g');

  title.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('height', 4)
    .attr('width', scale(width))
    .attr('fill', '#222');

	title.append('text')
		.attr('x', 0)
		.attr('y', 0)
		.attr('dx', scale(width) / 2)
		.attr('dy', lineHeight)
		.attr('style', 'font-size: 40px;')
		.attr('text-anchor', 'middle')
		.attr('fill', '#222')
		.text(candidates.length > 100 ? text.house : text.senate);

  const dems = svg.append('g');

  dems.append('text')
    .attr('x', 0)
    .attr('y', 0)
    .attr('dx', '0')
    .attr('dy', lineHeight * 1.25)
    .attr('style', 'font-size: 40px;')
    .attr('text-anchor', isEng ? 'start' : 'end')
    .attr('fill', color[0])
    .text(data[0] + data[1]);

  dems.append('text')
    .attr('x', 0)
    .attr('y', 0)
    .attr('dx', '0')
    .attr('dy', lineHeight * 2.15)
    .attr('style', 'font-size: 35px;')
    .attr('text-anchor', isEng ? 'start' : 'end')
    .attr('fill', '#222')
    .text(text.dems);

  const gop = svg.append('g');

  gop.append('text')
    .attr('x', scale(width))
    .attr('y', 0)
    .attr('dx', '0')
    .attr('dy', lineHeight * 1.25)
    .attr('style', 'font-size: 40px;')
    .attr('text-anchor', isEng ? 'end' : 'start')
    .attr('fill', color[4])
    .text(data[3] + data[4]);

  gop.append('text')
    .attr('x', scale(width))
    .attr('y', 0)
    .attr('dx', '0')
    .attr('dy', lineHeight * 2.15)
    .attr('style', 'font-size: 35px;')
    .attr('text-anchor', isEng ? 'end' : 'start')
    .attr('fill', '#222')
    .text(text.gop);

  const totalCandidates = d3.sum(data);
  let spaceTaken = 0;

	svg.append('text')
		.attr('x', 0)
		.attr('y', 0)
		.attr('dx', scale(width) / 2)
		.attr('dy', lineHeight * 2.15)
		.text(`${text.majority}: ${(totalCandidates / 2) + 1}`)
		.style('text-anchor', 'middle')
		.style('font-size', 18)
		.style('font-weight', 300)

	const bar = svg.append('g').selectAll('rect')
    .data(data)
    .enter();

  bar.append('rect')
    .attr('width', d => `${(d * 100) / totalCandidates}%`)
    .attr('y', lineHeight * 2.5)
    .attr('x', d => {
      const x = spaceTaken;
      spaceTaken += 100 * (d / totalCandidates);
      return `${x}%`;
    })
    .attr('height', 50)
    .attr('fill', (d, i) => color[i]);

  svg.append('line')
    .attr('x1', '50%')
    .attr('x2', '50%')
    .attr('y1', lineHeight * 2.5 - 10)
    .attr('y2', lineHeight * 2.5 + 50)
    .attr('stroke', '#222')
    .attr('stroke-width', 1);

  const demLegend = svg.append('g')
    .selectAll('rect')
    .data([ data[0], data[1], ])
    .enter().append('g')
    .attr('transform', (d, i) => `translate(0, ${i * 30})`);

  demLegend.append('rect')
    .attr('x', 0)
    .attr('y', lineHeight * 4)
    .attr('width', 20)
    .attr('height', 20)
    .style('fill', (d, i) => color[i]);

  demLegend.append('text')
    .attr('x', 30)
    .attr('y', 15)
    .attr('dy', lineHeight * 4)
    .text((d, i) => i === 0 ? `${d} ${text.dems}` : `${d} ${text.likeDems}`)
    .style('text-anchor', isEng ? 'start' : 'end')
    .style('font-size', 18);

  const gopLegend = svg.append('g')
    .selectAll('rect')
    .data([ data[4], data[3], ])
    .enter().append('g')
    .attr('transform', (d, i) => `translate(0, ${i * 30})`);

  gopLegend.append('rect')
    .attr('x', scale(width) - 20)
    .attr('y', lineHeight * 4)
    .attr('width', 20)
    .attr('height', 20)
    .style('fill', (d, i) => color[4 - i]);

  gopLegend.append('text')
    .attr('x', scale(width) - 30)
    .attr('y', 15)
    .attr('dy', lineHeight * 4)
    .text((d, i) => i === 0 ? `${d} ${text.gop}` : `${d} ${text.likeGop}`)
    .style('text-anchor', isEng ? 'end' : 'start')
    .style('font-size', 18);

  const tossupLegend = svg.append('svg')
	  .attr("x", "50%")
	  .attr("style", "overflow: visible;")
	  .append("g")
	  .attr("style", "transform: translateX(-10%)")
	  .selectAll("rect")
	  .data([data[2]])
	  .enter();

  tossupLegend.append('rect')
	  .attr("x", 0)
	  .attr("y", lineHeight * 4)
	  .attr("width", 20)
	  .attr("height", 20)
	  .style("fill", color[2]);

  tossupLegend.append('text')
	  .attr("x", 25)
	  .attr("y", 15)
	  .attr("dy", lineHeight * 4)
    .text(d => `${d} ${text.toss}`)
    .style('text-anchor', isEng ? "start" : "end")
    .style('font-size', 18)

};
