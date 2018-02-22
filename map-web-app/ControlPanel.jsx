import React from 'react';

// ControlPanel style
const controlStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	padding: '10px'
};

class ControlPanel extends React.PureComponent {
  render() {
    const {settings} = this.props;
	const Container  = ({children}) => <div className="controlPanel" style={controlStyle}>{children}</div>
    
	return (
      <Container>
        <h3>Interactive GeoJSON</h3>
        <p>Map showing median household income by state in year <b>{settings.year}</b>.
        Hover over a state to see details.</p>
        <p>Data source: <a href="www.census.gov">US Census Bureau</a></p>
        <div className="source-link">
          <a href="https://github.com/uber/react-map-gl/tree/master/examples/geojson" target="_new">View Code ↗</a>
        </div>
		
        <hr/>

        <div key={name} className="input">
          <label>Year</label>
          <input type="range" value={settings.year}
            min={1995} max={2015} step={1}
            onChange={evt => this.props.onChange('year', evt.target.value)} />
        </div>
      </Container>
    );
  }
}

export default ControlPanel;