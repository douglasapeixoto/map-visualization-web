import React from 'react';

/** A popup component to show POI info when the feature is selected */
class POIPopup extends React.Component {
	render() {
		// Component properties
		const {hoveredFeature, mouseX, mouseY} = this.props;
		// Component style
		var infoPopupStyle = {
			position: 'absolute',
			left: mouseX, top: mouseY,
			width: 300, height: 50,
			fontSize: 12,
			fontFamily: 'monospace',
			opacity: 0.6,
			padding: 10,
			background: '#fff'
		}
		// Build the component
		return (
			<div id="POIPopup" style={infoPopupStyle}>
				<div><b>Venue:  </b>{hoveredFeature.properties.name}</div>
				<div><b>Sports: </b>{hoveredFeature.properties.sport}</div>
				<div><b>Rate:   </b>{hoveredFeature.properties.rate}</div>
			</div>
		);
	}
}

export default POIPopup;