import React, { useState } from 'react';
import ReactEcharts from 'echarts-for-react';
// import EChartsReact from 'echarts-for-react';

export default function Charts() {
	const [xaxis] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);

	const [seriesData] = useState([120, 200, 150, 80, 70, 110, 130]);
	const option = {
		color: ['#1A1515'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
			},
			//controls the color of the image you see when you point of an x-axis bar//
			backgroundColor: 'orange',
			textStyle: {
				color: '#fff',
			},
		},
		grid: {},
		xAxis: {
			type: 'category',
			data: xaxis,
			position: 'bottom',
			name: 'Days',
			nameTextStyle: {
				color: 'red',
				fontStyle: 'italic',
				fontWeight: 'lighter',
				fontFamily: 'Marcellus',
				fontSize: 18,
			},
			axisLine: {
				show: true,
			},
			// Axis label means : "mon", "tues" etc//
			axisLabel: {
				show: true,
				inside: false,
			},
			//Gives details of the x-axis//
			axisPointer: {
				type: 'shadow',
			},
		},
		yAxis: {
			type: 'value',
			axisLine: {
				show: true,
			},
			name: 'Trucks per Day',
			nameTextStyle: {
				color: 'red',
				fontStyle: 'italic',
				fontWeight: 'lighter',
				fontFamily: 'Marcellus',
				fontSize: 18,
			},
		},
		series: [
			{
				name: 'Trucks',
				data: seriesData,
				type: 'bar',
				barWidth: '40%',
			},
		],
	};
	return (
		<div>
			<ReactEcharts option={option} />
		</div>
	);
}
