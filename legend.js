const buildLegend = (svg, candidates) => {
  const width = parseInt(svg.style('width'));
  const fontFamily = getComputedStyle(document.body).fontFamily.split(',')[0].slice(1,-1);

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

  const dems = svg.append('g');

  dems.append('text')
    .attr('x', 0)
    .attr('y', 0)
    .attr('dx', '0')
    .attr('dy', lineHeight)
    .attr('style', 'font-size: 40px;')
    .attr('text-anchor', 'start')
    .attr('fill', color[0])
    .text(data[0] + data[1])

  dems.append('text')
    .attr('x', 0)
    .attr('y', 0)
    .attr('dx', '0')
    .attr('dy', lineHeight * 1.75)
    .attr('style', 'font-size: 35px;')
    .attr('text-anchor', 'start')
    .attr('fill', '#000')
    .text('דמוקראטים')

  const gop = svg.append('g');

  gop.append('text')
    .attr('x', scale(width))
    .attr('y', 0)
    .attr('dx', '0')
    .attr('dy', lineHeight)
    .attr('style', 'font-size: 40px;')
    .attr('text-anchor', 'end')
    .attr('fill', color[4])
    .text(data[0] + data[1])

  gop.append('text')
    .attr('x', scale(width))
    .attr('y', 0)
    .attr('dx', '0')
    .attr('dy', lineHeight * 1.75)
    .attr('style', 'font-size: 35px;')
    .attr('text-anchor', 'end')
    .attr('fill', '#000')
    .text('רפובליקאים')

  const totalCandidates = d3.sum(data)
  let spaceTaken = 0;

  const bar = svg.append('g').selectAll('rect')
    .data(data)
    .enter();

  bar.append('rect')
    .attr('width', d => `${(d * 100) / totalCandidates}%`)
    .attr('y', lineHeight * 2.25)
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
    .attr('y1', lineHeight * 2.25 - 10)
    .attr('y2', lineHeight * 2.25 + 50)
    .attr('stroke', '#000')
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
    .text((d, i) => `${d} טקסט טקסט`)
    .style('text-anchor', 'start')
    .style('font-size', 18)

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
    .text((d, i) => `${d} טקסט טקסט`)
    .style('text-anchor', 'end')
    .style('font-size', 18)

  const tossupLegend = svg.append('g')
    .selectAll('rect')
    .data([ data[2], ])
    .enter().append('g')
    .attr('transform', (d, i) => `translate(-75, ${i * 30})`);

  tossupLegend.append('rect')
    .attr('x', scale(width) / 2)
    .attr('y', lineHeight * 4)
    .attr('width', 20)
    .attr('height', 20)
    .style('fill', color[2]);

  tossupLegend.append('text')
    .attr('x', (scale(width) / 2) + 30)
    .attr('y', 15)
    .attr('dy', lineHeight * 4)
    .text((d, i) => ` ${d} טקסט טקסט`)
    .style('text-anchor', 'start')
    .style('font-size', 18)

}
