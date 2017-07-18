import React from "react";
import ReactDOM from "react-dom";
import BB from "./js/BB";

const chartNode = document.getElementById("react-bb");
const buttons = document.querySelector(".buttons");

const renderChart = (config) => {
	const rd = ReactDOM.render(
		<BB
	id='reactChart'
			{...config} />,
		chartNode
	);
	return rd;
};

const configs = [{
	axis : {
		x : {
			type : 'category'
		}
	},
	data: {
		columns: [
			['data1', 30, 200, 100, 400, 150, 250],
			['data2', 50, 20, 10, 40, 15, 25],
			['data3', 50, 20, 10, 40, 15, 25]
		]
	}
}, {
	data: {
		x: 'x',
		columns: [
			['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
			['data1', 30, 200, 100, 400, 150, 250],
			['data2', 130, 340, 200, 500, 250, 350]
		]
	},
	axis: {
		x: {
			label : "X AXIS",
			type: 'timeseries',
			tick: {
				format: '%Y-%m-%d'
			}
		}
	}
}, {
	data: {
		columns: [
			['data1', 30, 200, 100, 400, 150, 250],
			['data2', 130, 100, 140, 200, 150, 50]
		],
		type: 'bar'
	},
	bar: {
		width: {
			ratio: 0.5 // this makes bar width 50% of length between ticks
		}
		// or
		//width: 100 // this makes bar width 100px
	}
}, null];


let instance;

const Buttons = React.createClass({
	displayName: 'Buttons',
	render : function(){
		const lists = this.props.dataObj.map((data, idx) => {
			if(data == null){
				idx = 'destroy';
			}

			return (<li key={idx}>
				<button data-id={idx} onClick={this.clickBtn}>TEST DEMO : {idx}</button>
			</li>);
		});
		return (<ul>{lists}</ul>);
	},

	clickBtn : function(evt){
		const id = evt.currentTarget.dataset.id;
		const config = configs[id];
		const chartId = `reactChart${id}`;

		if(id !== "destroy"){
			ReactDOM.render(
			<BB
				id={chartId}
				{...config} />,
				chartNode
			);
		} else {
			ReactDOM.unmountComponentAtNode(chartNode);
		}
	}
});

ReactDOM.render(
<Buttons dataObj={configs}/>,
	buttons
);

window.cinstance = renderChart(configs[0]);