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

### notice

- When mounting for the first time, component uses bb.generate api.
- after first init, component props updated no more using bb.generate api, instead that uses [billboard.js api](https://naver.github.io/billboard.js/release/latest/doc/Chart.html#axis:labels).
	- not support all api. please read 'Support billboard.js api' list.


## Support billboard.js api
- only using getter method not support
- you can find billboard.js api from [document](https://naver.github.io/billboard.js/release/latest/doc/Chart.html) 
	- Chart > axis:labels ~ zoom:enable

### form & example
- [offer from billboard.js]
	- [target options1 to passing props when render BB component]
	- ...

```
// controller.jsx
// update axis.x.labels
const axis = {
	x : {
		label: "New label"
	}
}

ReactDOM.render(
	<BB
		id='reactChart'
		axis={axis} />,
		chartNode
	);


// BB.jsx
// after prorps update
this.chartInstance.axis.labels({x : this.props.axis.x.label});
```

### support api list
- axis:labels
    - axis.x.labels
    - axis.y.labels
- categories
    - axis.x.categories
- category
    - not support
    - axis.x.categories
    - instead using categories API
- color
    - not support
    - only getter api
- data
    - not support
    - only getter api
- data:shown
    - not support
    - only getter api
- defocus
    - need custom option support
- destroy
    - not support
    - only using unmount react component
- flow
    - need custom option support
- flush
    - need custom option support
- focus
    - need custom option support
- groups
    - data.groups
* hide
    - data.hide
- legend:show
    - legend.show
- legend:hide
    - legend.hide
- load
    - data
- regions
    - regions
- regions:add
    - not support
    - instead using regions
- resize
    - size.width,
    - size.height
- revert
    - api 동작 확인
- select
    - api 동작 확인 
- selected
    - not support
    - only getter api
- show
    - data.hide
- toggle
    - api 동작 확인
- tooltip:show
    - tooltip.show
    - api 동작 확인
- transform
    - data.type
- unload
    - data
* unselect
    - api 동작 확인
* unzoom
    - need custom option support
    - ex) zoom.domain = null;
- x
    - api 동작 확인
- xgrids
    - grid.x.lines
- xgrids:add
    - not support
    - instead using xgrids
- xs
    - api 동작 확인
- ygrids
    - grid.y.lines
* ygrids:add
    - not support
    - instead using xgrids
- zoom
    - need custom option support
    - ex) zoom.domain = [domainStart, domainEnd]
- zoom:enable
    - zoom.enable


