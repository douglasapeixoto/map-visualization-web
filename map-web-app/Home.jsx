import React from 'react';
import ReactMapGL from 'react-map-gl';
import Map from './Map.jsx';
import NavigationPanel from './NavigationPanel.jsx';
import POIPopup from './POIPopup.jsx';

//import {fromJS} from 'immutable';
import {json as requestJson} from 'd3-request';

// My Mapbox access token 
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZG91Z2xhc2FwZWl4b3RvIiwiYSI6ImNqYjFvcDZqeDIzczAzMnFrNjd2aGNiYmcifQ.-z6-TPYtm-WQ8sTKGPualg'
// My Mapbox style 
const MAPBOX_STYLE = 'mapbox://styles/douglasapeixoto/cjb1oexe26yps2spi9ql2i8rf'

/** Parent-Root component */
class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<Map/>
			</div>
		);
	}
}

/** Properties of the Home component */
Home.defaultProps = {
   appName: "Griffith MapViz"
}

export default Home;