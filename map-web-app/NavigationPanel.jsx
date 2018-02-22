import React from 'react';
import {NavigationControl} from 'react-map-gl';

/** Navigation control component, zoom control */
class NavigationPanel extends React.Component {
	render() {
		// Component style
		var navigationStyle = {
			position: 'absolute',
			top: 0, left: 0,
			padding: '10px'
		}
		// Build component
		return (
			<div id="NavigationPanel" style={navigationStyle}>
				<NavigationControl onViewportChange={this.props.onViewportChange} />
			</div>
		);
  }
}

export default NavigationPanel;