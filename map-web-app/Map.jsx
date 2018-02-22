import React from 'react';
import ReactMapGL from 'react-map-gl';
import NavigationPanel from './NavigationPanel.jsx';
import POIPopup from './POIPopup.jsx';
import DataChartPanel from './DataChartPanel.jsx';
import LocationLabelPanel from './LocationLabelPanel.jsx';

// My Mapbox access token 
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZG91Z2xhc2FwZWl4b3RvIiwiYSI6ImNqYjFvcDZqeDIzczAzMnFrNjd2aGNiYmcifQ.-z6-TPYtm-WQ8sTKGPualg'
// My Mapbox style 
const MAPBOX_STYLE = 'mapbox://styles/douglasapeixoto/cjb1oexe26yps2spi9ql2i8rf'

/** Map component, using MapBox js Library */
class Map extends React.Component {
	constructor() {
		super();
		// Map configurations
		this.state = {
			// viewport (Gold Coast)
			viewport: {
				width:  window.innerWidth,
				height: window.innerHeight,
				latitude: -28.0,
				longitude: 153.45,
				zoom: 10
			},
			// current x and y positions of the mouse on the map
			mouseX: null, mouseY: null,
			// the current hovered feature
			hoveredFeature: null,
			// the current selected/clicked feature
			selectedFeature: null,
			featureName: null,
			featureData: null,
			featureImg : null,
			isFeatureSelected: false,
			// the map object
			map: null
		};
		this.updateViewport = this.updateViewport.bind(this);
		this.resize = this.resize.bind(this);
		this.onHover = this.onHover.bind(this);
		this.onClick = this.onClick.bind(this);
		this.renderInfoPopup = this.renderInfoPopup.bind(this);
	};
	
	componentDidMount() {
		window.addEventListener('resize', this.resize);
		this.resize();
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	}
	
	/** Resize the map viewport with the browser's window */
	resize() {
		this.setState({
			viewport: {
				width:  window.innerWidth,
				height: window.innerHeight,
				latitude:  this.state.viewport.latitude,
				longitude: this.state.viewport.longitude,
				zoom: this.state.viewport.zoom
			}
		});
	};
	
	/** Called when viewport is updated */
	updateViewport(viewport) {
		this.setState({viewport});
	};
	
	/** Called when a feature is hovered */
	onHover(event) {
		const {features, srcEvent: {pageX, pageY}} = event;
		const hoveredFeature = features && features
				.find(f => f.layer.id === 'commonwealth-games-venues');
		this.setState({hoveredFeature, mouseX: pageX, mouseY: pageY});
	}
	
	/** Called when a feature is selected/clicked */
	onClick(event) {
		// target is the clicked HTML element
		// features are the MapBox fetures/data clicked
		const {features, target} = event;
		const selectedFeature = features && features
				.find(f => f.layer.id === 'commonwealth-games-venues');
		// Get the properties from the selected feature
		this.setState({selectedFeature});
		this.setState({featureName: selectedFeature.properties.name});
		this.setState({featureImg : selectedFeature.properties.img});
		this.setState({featureData: [
			["Sentiment", "Value"],
			["Fun", Number(selectedFeature.properties.fun)],
			["Boring", Number(selectedFeature.properties.boring)],
			["Relaxing", Number(selectedFeature.properties.relaxing)],
			["Stressful", Number(selectedFeature.properties.stressfull)],
			["Inspiring", Number(selectedFeature.properties.inspiring)],
			["Disappointing", Number(selectedFeature.properties.disappointing)]
		]});
		if (selectedFeature != null){
			this.setState({isFeatureSelected: true});
		}
	}
	
	/** Show info popup when a feature is selected */
	renderInfoPopup() {
		return this.state.hoveredFeature && (
			<POIPopup
				hoveredFeature={this.state.hoveredFeature} 
				mouseX={this.state.mouseX} mouseY={this.state.mouseY} />
			);
	}
	
	/** Show data chart when a feature is selected/clicked */
	renderDataChart() {
		return this.state.isFeatureSelected/*selectedFeature*/ && (
			<DataChartPanel
				featureName={this.state.featureName}
				featureData={this.state.featureData}
				featureImg ={this.state.featureImg} />
			);
	}
	
	/** Render the map */
	render() {
		const mapContainerStyle = {
			position: 'absolute',
			top: 0,	 bottom: 0,
			left: 0, rigth: 0
		}
		// Build the Map component
		return (
			<div id="map" style={mapContainerStyle}>
				<ReactMapGL 
					mapboxApiAccessToken={MAPBOX_TOKEN}
					mapStyle={MAPBOX_STYLE}
					width={this.state.viewport.width}
					height={this.state.viewport.height}
					latitude={this.state.viewport.latitude}
					longitude={this.state.viewport.longitude}
					zoom={this.state.viewport.zoom}

					onViewportChange={this.updateViewport}
					onHover={this.onHover}
					onClick={this.onClick}
					onStyleLoad={(map) => {
						// load the map object when available
						this.setState({map});
					}}>
					
					{this.renderInfoPopup()} 
					{this.renderDataChart()} 

					<NavigationPanel onViewportChange={this.updateViewport}/>
					<LocationLabelPanel />
				</ReactMapGL>
			</div>
		);
	}
}
/*
<p id="sysout"> sysout </p>

document.getElementById("sysout").innerHTML += "TARGET: [" + target.id + "] "	

features.forEach(f =>				
	document.getElementById("sysout").innerHTML += "[" + f.properties.id + "] "
);*/

export default Map;