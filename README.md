# react-billboardjs
- react component for billboard.js
- what is **billboard.js**
	- billboard.js is a re-usable easy interface JavaScript chart library, based on D3 v4+.
	- https://naver.github.io/billboard.js/


## how to use

1. install using npm
```
npm install git://github.com/kjhwee91/react-billboardjs.git
```

2. html
```
<!-- import billboard.js css -->
<link rel="stylesheet" type="text/css" href="https://naver.github.io/billboard.js/release/latest/dist/billboard.css">

<!-- add root element -->
<div id="react-bb"></div>
```

3. script
```
// import library
import ReactDOM from "react-dom";
import BB from "./js/BB";

const chartNode = document.getElementById("react-bb");
const config = {
	data: {
			columns: [
				['data1', 30, 200, 100, 400, 150, 250],
				['data2', 50, 20, 10, 40, 15, 25],
				['data3', 50, 20, 10, 40, 15, 25]
			]
	}
};

ReactDOM.render(
	<BB
		id='reactChart'
		{...config} />,
		chartNode
	);
```
