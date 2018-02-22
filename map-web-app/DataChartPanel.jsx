import React from 'react';
import {render} from 'react-dom';
import {Chart} from 'react-google-charts';

/** The data panel component containing the data charts.
 This component was built using the Google Charts API */
class DataChartPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// Chart configurations
			options: {
				chartArea: {left: 10, top: 0, width: 250, height: 250},
				pieHole: 0.4
			},
			timelineOptions: {
				chartArea: {width: 250, height: 250},
			},
			timelineColumns: [
				{"id":"President","type":"string"},
				{"id":"Start","type":"date"},
				{"id":"End","type":"date"}
			],
			timelineRows: [
				[ 'W', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
				[ 'A', new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
				[ 'J', new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
			]
		};
	}
	
	/** Render the data chart */
	render() { 
		// Component properties
		const {featureName, featureData, featureImg} = this.props;
		
		// Component style
		const dataPanelStyle = {
			position: 'absolute',
			top: 10, right: 10,
			padding: '10px',
			width: 250, height: 500,
			opacity: 0.8,
			background: '#fff'
		}
		
		// Build the component HTML
		return (
			<div id="DataChartPanel" style={dataPanelStyle}>
				<h4>{featureName}</h4>

				<hr/>
				
				<Chart
					chartType="PieChart"
					data={featureData}
					options={this.state.options}
					graph_id="DonutChart"
					width="100%"
					height="150px"
					legend_toggle
				/>
				
				<hr/>
				
				<div class="Home-profile">
					<img src={"images/"+featureImg} height="250" width="250"class="Profile-image" alt="Profile image"/>
				</div>
				
			</div>
		);
	}
}

/*
<Chart
	chartType="Timeline"
	columns={this.state.timelineColumns}
	rows={this.state.timelineRows}
	options={this.state.timelineOptions}
	graph_id="Timeline"
	width="100%"
	height="100px"
	legend_toggle
/>
*/

export default DataChartPanel;