// import React, { useEffect } from 'react'
// import './BarChart.scss'
// import * as d3 from 'd3'
// import { Types } from './types'

// interface IBasicBarChartProps {
//     width: number
//     height: number
//     top: number
//     right: number
//     bottom: number
//     left: number
//     fill: string
//   }
// const BarChart = (props: IBasicBarChartProps) => {
//   useEffect(() => {
//     draw()
//   })

//   const draw = () => {
//     const width = props.width - props.left - props.right
//     const height = props.height - props.top - props.bottom

//     const x = d3.scaleBand().range([0, width]).padding(0.1)
//     const y = d3.scaleLinear().range([height, 0])

//     const svg = d3
//       .select('.BarChart')
//       .append('svg')
//       .attr('width', width + props.left + props.right)
//       .attr('height', height + props.top + props.bottom)
//       .append('g')
//       .attr('transform', `translate(${props.left},${props.top})`)

//     d3.dsv(',', '../../../../number-of-air-transport-passengers-carried.csv', (d) => {
//       return (d as unknown) as Types.Data
//     }).then((data) => {
//       // Scale the range of the Data in the domains
//       x.domain(
//         data.map((d) => {
//           return d.framework
//         })
//       )
//       y.domain([
//         0,
//         d3.max(data, (d) => {
//           return Math.max(...data.map((dt) => (dt as Types.Data).Passengers), 0)
//         }),
//       ] as number[])

//       svg
//         .selectAll('.bar')
//         .data(data)
//         .enter()
//         .append('rect')
//         .attr('fill', props.fill)
//         .attr('class', 'bar')
//         .attr('x', (d) => {
//           return x(d.framework) || 0
//         })
//         .attr('width', x.bandwidth())
//         .attr('y', (d) => {
//           return y(d.Passengers)
//         })
//         .attr('height', (d) => {
//           return height - y(d.Passengers)
//         })

//       // add the x Axis
//       svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x))

//       // add the y Axis
//       svg.append('g').call(d3.axisLeft(y))
//     })
//   }

//   return <div className="BarChart" />
// }

import React from 'react';
import Plot from 'react-plotly.js';

type Props = {
    tabName: string;
    destinationName: string;
};

const barChart: React.FC<Props>= (destinationName) =>{
    

    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 800, height: 500, title: 'Number of Passengers'} }
      />
    );
  
}
export default barChart