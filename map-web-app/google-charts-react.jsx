constructor(props) {
	super(props);
	this.state = {
		// Chart configurations
		options: {
			title: 'Chart Title',
			hAxis: { title: 'XAxis', minValue: 0, maxValue: 15 },
			vAxis: { title: 'YAxis', minValue: 0, maxValue: 15 },
			legend: 'Legend',
			pieHole: 0.4,
		},
		// Data for scatter chart
		scatterData: [
			['XAxis', 'YAxis'],
			[8, 12],
			[4, 5.5],
			[11, 14],
			[4, 5],
			[3, 3.5],
			[6.5, 7],
		],
		// Data for pie chart
		pieData: [
			["Task","Hours per Day"],
			["Work",11],
			["Eat",2],
			["Commute",2],
			["Watch TV",2],
			["Sleep",7]
		],
		// Data for line chart
		lineColumns: [
			{"label":"time","type":"number","p":{}},
			{"label":"Air Passengers","type":"number"}
		],
		lineRows: [
			[1949,11],[1949.08333333333,11],[1949.16666666667,13],[1949.25,12],
			[1949.33333333333,12],[1949.41666666667,13],[1949.5,14],[1949.58333333333,14],
			[1949.66666666667,136],[1949.75,119],[1949.83333333333,104],[1949.91666666667,118],
			[1950,115],[1950.08333333333,126],[1950.16666666667,141],[1950.25,135],
			[1950.33333333333,125],[1950.41666666667,149],[1950.5,170],[1950.58333333333,170],
			[1950.66666666667,158],[1950.75,133],[1950.83333333333,114],[1950.91666666667,140],
			[1951,145],[1951.08333333333,150],[1951.16666666667,178],[1951.25,163],
			[1951.33333333333,172],[1951.41666666667,178],[1951.5,199],[1951.58333333333,199],
			[1951.66666666667,184],[1951.75,162],[1951.83333333333,146],[1951.91666666667,166],
			[1952,171],[1952.08333333333,180],[1952.16666666667,193],[1952.25,181],
			[1952.33333333333,183],[1952.41666666667,218],[1952.5,230],[1952.58333333333,242],
			[1952.66666666667,209],[1952.75,191],[1952.83333333333,172],[1952.91666666667,194],
			[1953,196],[1953.08333333333,196],[1953.16666666667,236],[1953.25,235],
			[1953.33333333333,229],[1953.41666666667,243],[1953.5,264],[1953.58333333333,272],
			[1953.66666666667,237],[1953.75,211],[1953.83333333333,180],[1953.91666666667,201],
			[1954,204],[1954.08333333333,188],[1954.16666666667,235],[1954.25,227]
		],
		// Data for area chart
		areaData: [
			["Year","Sales","Expenses"],
			["2013",1000,400],
			["2014",1170,460],
			["2015",660,1120],
			["2016",1030,540]
		],
		// Data for bar chart
		barData: [
			["Element","Density",{"role":"style"}],
			["Copper",8.94,"#b87333"],
			["Silver",10.49,"silver"],
			["Gold",19.3,"gold"],
			["Platinum",21.45,"color: #e5e4e2"]
		],
		// Data for Bubble chart
		bubbleData: [
			["ID","Life Expectancy","Fertility Rate","Region","Population"],
			["CAN",80.66,1.67,"North America",33739900],
			["DEU",79.84,1.36,"Europe",81902307],
			["DNK",78.6,1.84,"Europe",5523095],
			["EGY",72.73,2.78,"Middle East",79716203],
			["GBR",80.05,2,"Europe",61801570],
			["IRN",72.49,1.7,"Middle East",73137148],
			["IRQ",68.09,4.77,"Middle East",31090763],
			["ISR",81.55,2.96,"Middle East",7485600],
			["RUS",68.6,1.54,"Europe",141850000],
			["USA",78.09,2.05,"North America",307007000]
		],
		// Data for Candlestick chart
		candlestickData: [
			["DAY","val1","val2","val3","val4"],
			["Mon",20,28,38,45],
			["Tue",31,38,55,66],
			["Wed",50,55,77,80],
			["Thu",77,77,66,50],
			["Fri",68,66,22,15]
		],
		// Data for Timeline chart
		timelineColumns: [
			{"id":"President","type":"string"},
			{"id":"Start","type":"date"},
			{"id":"End","type":"date"}
		],
		timelineRows: [
          [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
          [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
          [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
		],
		// Data for Donut chart
		donutData: [
			["Task", "Hours"],
			["Work", 11],
			["Eat", 2],
			["Commute", 2],
			["Watch TV", 2],
			["Sleep", 7]
        ]
		
	};
}

// Scatter Chart
<Chart
	chartType="ScatterChart"
	data={this.state.scatterData}
	options={this.state.options}
	graph_id="ScatterChart"
	width="100%"
	height="250px"
	legend_toggle
/>

// Pie Chart
<Chart
	chartType="PieChart"
	data={this.state.pieData}
	options={this.state.options}
	graph_id="PieChart"
	width="100%"
	height="250px"
	legend_toggle
/>

// Line Chart
<Chart
	chartType="LineChart"
    rows={this.state.lineRows}
    columns={this.state.lineColumns}
	options={this.state.options}
	graph_id="LineChart"
	width="100%"
	height="250px"
	legend_toggle
/>

// Area Chart
<Chart
	chartType="AreaChart"
    data={this.state.areaData}
	options={this.state.options}
	graph_id="AreaChart"
	width="100%"
	height="250px"
	legend_toggle
/>

// Bar Chart
<Chart
	chartType="BarChart"
    data={this.state.barData}
	options={this.state.options}
	graph_id="BarChart"
	width="100%"
	height="250px"
	legend_toggle
/>

// Bubble Chart
<Chart
	chartType="BubbleChart"
    data={this.state.bubbleData}
	options={this.state.options}
	graph_id="BubbleChart"
	width="100%"
	height="250px"
	legend_toggle
/>

// Candlestick Chart
<Chart
	chartType="CandlestickChart"
    data={this.state.candlestickData}
	options={this.state.options}
	graph_id="CandlestickChart"
	width="100%"
	height="250px"
	legend_toggle
/>

// Timeline Chart
<Chart
	chartType="Timeline"
	chartPackage="timeline"
    rows={this.state.timelineRows}
    columns={this.state.timelineColumns}
	options={this.state.timelineOptions}
	graph_id="Timeline"
	width="100%"
	height="250px"
	legend_toggle
/>

// Donnut Chart
// Add 'pieHole' in the options
<Chart
	chartType="PieChart"
	data={this.state.donutData}
	options={this.state.donutOptions}
	graph_id="DonutChart"
	width="100%"
	height="150px"
	legend_toggle
/>