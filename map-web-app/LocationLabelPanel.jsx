import React from 'react';

/** Locations Label Panel, shows the description/label
of each location by their colors */
class LocationLabelPanel extends React.Component {
	render() {
		// Component styles
		var locationLabelStyle = {
			position: 'absolute',
			fontSize: 12,
			fontFamily: 'monospace',
			left: '35%',
			bottom: 30,
			width: 380, height: 15,
			opacity: 0.8,
			padding: 10,
			background: '#fff'
		}
		// Build component
		return (
			<div id="LocationLabelPanel" style={locationLabelStyle}>
				HISTORIC - TOURISM - LEISURE - SHOPPING - SPORTS - GAMES
			</div>
		);
  }
}

export default LocationLabelPanel;