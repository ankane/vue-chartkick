# Vue Chartkick

Create beautiful JavaScript charts with one line of Vue

[See it in action](https://www.chartkick.com/vue)

Supports [Chart.js](http://www.chartjs.org/), [Google Charts](https://developers.google.com/chart/), and [Highcharts](http://www.highcharts.com/)

## Charts

Line chart

```vue
<line-chart :data="{'2017-01-01': 11, '2017-01-02': 6}"></line-chart>
```

Pie chart

```vue
<pie-chart :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>
```

Column chart

```vue
<column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
```

Bar chart

```vue
<bar-chart :data="[['Work', 32], ['Play', 1492]]"></bar-chart>
```

Area chart

```vue
<area-chart :data="{'2017-01-01': 11, '2017-01-02': 6}"></area-chart>
```

Scatter chart

```vue
<scatter-chart :data="[[174.0, 80.0], [176.5, 82.3]]" xtitle="Size" ytitle="Population"></scatter-chart>
```

Geo chart - *Google Charts*

```vue
<geo-chart :data="[['United States', 44], ['Germany', 23], ['Brazil', 22]]"></geo-chart>
```

Timeline - *Google Charts*

```vue
<timeline :data="[['Washington', '1789-04-29', '1797-03-03'], ['Adams', '1797-03-03', '1801-03-03']]"></timeline>
```

Multiple series

```vue
data = [
  {name: 'Workout', data: {'2017-01-01': 3, '2017-01-02': 4}},
  {name: 'Call parents', data: {'2017-01-01': 5, '2017-01-02': 3}}
];

// and
<line-chart :data="data" />
```

### Say Goodbye To Timeouts

Make your pages load super fast and stop worrying about timeouts. Give each chart its own endpoint.

```vue
<line-chart data="/stocks"></line-chart>
```

### Options

Id, width, and height

```vue
<line-chart id="users-chart" width="800px" height="500px"></line-chart>
```

Min and max values

```vue
<line-chart :min="1000" :max="5000"></line-chart>
```

`min` defaults to 0 for charts with non-negative values. Use `null` to let the charting library decide.

Colors

```vue
<line-chart :colors="['#b00', '#666']"></line-chart>
```

Stacked columns or bars

```vue
<column-chart :stacked="true"></column-chart>
```

Discrete axis

```vue
<line-chart :discrete="true"></line-chart>
```

Label (for single series)

```vue
<line-chart label="Value"></line-chart>
```

Axis titles

```vue
<line-chart xtitle="Time" ytitle="Population"></line-chart>
```

Straight lines between points instead of a curve

```vue
<line-chart :curve="false"></line-chart>
```

Show or hide legend

```vue
<line-chart :legend="true"></line-chart>
```

Specify legend position

```vue
<line-chart legend="bottom"></line-chart>
```

Donut chart

```vue
<pie-chart :donut="true"></pie-chart>
```

Prefix, useful for currency - *Chart.js, Highcharts*

```vue
<line-chart prefix="$"></line-chart>
```

Suffix, useful for percentages - *Chart.js, Highcharts*

```vue
<line-chart suffix="%"></line-chart>
```

Set a thousands separator - *Chart.js, Highcharts*

```vue
<line-chart thousands=","></line-chart>
```

Set a decimal separator - *Chart.js, Highcharts*

```vue
<line-chart decimal=","></line-chart>
```

Show a message when data is empty

```vue
<line-chart :messages="{empty: "No data"}"></line-chart>
```

Refresh data from a remote source every `n` seconds

```vue
<line-chart :refresh="60"></line-chart>
```

You can pass options directly to the charting library with:

```vue
<line-chart :library="{backgroundColor: '#eee'}"></line-chart>
```

See the documentation for [Google Charts](https://developers.google.com/chart/interactive/docs/gallery), [Highcharts](http://api.highcharts.com/highcharts), and [Chart.js](http://www.chartjs.org/docs/) for more info.

### Data

Pass data as an array or object

```vue
<pie-chart :data="{'Blueberry': 44, 'Strawberry': 23}"></pie-chart>
<pie-chart :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>
```

Times can be a `Date`, a timestamp, or a string (strings are parsed)

```vue
<line-chart :data="[[new Date(), 5], [1368174456, 4], ['2017-01-01 00:00:00 UTC', 7]]"></line-chart>
```

### Download Charts

*Chart.js only*

Give users the ability to download charts. It all happens in the browser - no server-side code needed.

```vue
<line-chart :download="true"></line-chart>
```

Set the filename

```vue
<line-chart download="boom"></line-chart>
```

**Note:** Safari will open the image in a new window instead of downloading.

## Installation

Run

```sh
npm install chartkick vue-chartkick --save
```

### Chart.js

Run

```sh
npm install chart.js --save
```

And add

```es6
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueChartkick, { Chartkick })
```

### Google Charts

Add

```es6
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'

Vue.use(VueChartkick, { Chartkick })
```

And include on the page

```html
<script src="https://www.gstatic.com/charts/loader.js"></script>
```

### Highcharts

Run

```sh
npm install highcharts --save
```

And add

```es6
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Highcharts from 'highcharts'

window.Highcharts = Highcharts
Vue.use(VueChartkick, { Chartkick })
```

### Without NPM

Include the charting library

```html
<script src="https://unpkg.com/chart.js@2.7.1/dist/Chart.bundle.js"></script>
```

And then the Chartkick libraries

```html
<script src="https://unpkg.com/chartkick@2.3.0"></script>
<script src="https://unpkg.com/vue-chartkick@0.2.1/dist/vue-chartkick.js"></script>
```

## Example

```vue
<div id="app">
  <line-chart :data="chartData"></line-chart>
</div>

<script>
  var app = new Vue({
    el: "#app",
    data: {
      chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
    }
  })
</script>
```

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/ankane/vue-chartkick/issues)
- Fix bugs and [submit pull requests](https://github.com/ankane/vue-chartkick/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features

To get started with development, run:

```sh
git clone https://github.com/ankane/vue-chartkick.git
cd vue-chartkick
yarn
npm run build
```
