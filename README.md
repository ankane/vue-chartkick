# Vue Chartkick

Create beautiful JavaScript charts with one line of Vue

[See it in action](https://www.chartkick.com/vue)

Supports [Chart.js](https://www.chartjs.org/), [Google Charts](https://developers.google.com/chart/), and [Highcharts](https://www.highcharts.com/)

## Quick Start

Run

```sh
npm install vue-chartkick chart.js
```

The latest version works with Vue 3. For Vue 2, use version 0.6.1 and [this readme](https://github.com/ankane/vue-chartkick/blob/v0.6.1/README.md).

And add it to your app

```javascript
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

app.use(VueChartkick)
```

This sets up Chartkick with Chart.js. For other charting libraries, see [detailed instructions](#installation).

## Charts

Line chart

```vue
<line-chart :data="{'2021-01-01': 11, '2021-01-02': 6}"></line-chart>
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
<area-chart :data="{'2021-01-01': 11, '2021-01-02': 6}"></area-chart>
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
  {name: 'Workout', data: {'2021-01-01': 3, '2021-01-02': 4}},
  {name: 'Call parents', data: {'2021-01-01': 5, '2021-01-02': 3}}
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

Min and max for x-axis - *Chart.js*

```vue
<line-chart xmin="2021-01-01" xmax="2022-01-01"></line-chart>
```

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

Set significant digits - *Chart.js, Highcharts*

```vue
<line-chart :precision="3"></line-chart>
```

Set rounding - *Chart.js, Highcharts*

```vue
<line-chart :round="2"></line-chart>
```

Show insignificant zeros, useful for currency - *Chart.js, Highcharts*

```vue
<line-chart :round="2" :zeros="true"></line-chart>
```

Friendly byte sizes - *Chart.js 2.8+*

```vue
<line-chart :bytes="true"></line-chart>
```

Specify the message when the chart is loading

```vue
<line-chart loading="Loading..."></line-chart>
```

Specify the message when data is empty

```vue
<line-chart empty="No data"></line-chart>
```

Refresh data from a remote source every `n` seconds

```vue
<line-chart :refresh="60"></line-chart>
```

You can pass options directly to the charting library with:

```vue
<line-chart :library="{backgroundColor: '#eee'}"></line-chart>
```

See the documentation for [Google Charts](https://developers.google.com/chart/interactive/docs/gallery), [Highcharts](https://api.highcharts.com/highcharts), and [Chart.js](https://www.chartjs.org/docs/) for more info.

To customize datasets in Chart.js, use:

```vue
<line-chart :dataset="{borderWidth: 10}"></line-chart>
```

You can pass this option to individual series as well.

Use [dynamic components](https://vuejs.org/v2/guide/components.html#Dynamic-Components) to make the chart type dynamic:

```vue
<component is="column-chart"></component>
```

### Reactivity

While some of the examples use object or array literals in props for demonstration, this can lead to unnecessary re-renders.

```vue
<line-chart :library="{backgroundColor: '#eee'}"></line-chart>
```

Instead, use a data property:

```vue
<line-chart :library="library"></line-chart>
```

See [this discussion](https://github.com/vuejs/vue/issues/4060) for more details.

### Global Options

To set options for all of your charts, use:

```javascript
Chartkick.options = {
  colors: ["#b00", "#666"]
}
```

### Data

Pass data as an array or object

```vue
<pie-chart :data="{'Blueberry': 44, 'Strawberry': 23}"></pie-chart>
<pie-chart :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>
```

Times can be a `Date` or a string (strings are parsed)

```vue
<line-chart :data="[[new Date(), 5], ['2021-01-01 00:00:00 UTC', 7]]"></line-chart>
```

Data can also be a callback

```vue
function fetchData(success, fail) {
  success({"Blueberry": 44, "Strawberry": 23})
  // or fail("Data not available")
}

<pie-chart :data="fetchData" />
```

### Multiple Series

You can pass a few options with a series:

- `name`
- `data`
- `color`
- `dataset` - *Chart.js only*
- `points` - *Chart.js only*
- `curve` - *Chart.js only*

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

Set the background color

```vue
<line-chart :download="{background: '#fff'}"></line-chart>
```

## Installation

### Chart.js

Run

```sh
npm install vue-chartkick chart.js
```

And add

```javascript
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

app.use(VueChartkick)
```

### Google Charts

Run

```sh
npm install vue-chartkick
```

And add

```javascript
import VueChartkick from 'vue-chartkick'

app.use(VueChartkick)
```

And include on the page

```html
<script src="https://www.gstatic.com/charts/loader.js"></script>
```

To specify a language or Google Maps API key, use:

```javascript
Chartkick.configure({language: "de", mapsApiKey: "..."})
```

### Highcharts

Run

```sh
npm install vue-chartkick highcharts
```

And add

```javascript
import VueChartkick from 'vue-chartkick'
import 'chartkick/highcharts'

app.use(VueChartkick)
```

### No Package Manager

Include the charting library and the Chartkick library

```html
<script src="https://unpkg.com/chart.js@3.0.2/dist/chart.js"></script>
<script src="https://unpkg.com/chartjs-adapter-date-fns@2.0.0/dist/chartjs-adapter-date-fns.bundle.js"></script>
<script src="https://unpkg.com/chartkick@4.0.0/dist/chartkick.js"></script>
<script src="https://unpkg.com/vue-chartkick@1.1.0"></script>
```

And add

```javascript
app.use(VueChartkick)
```

### Multiple Libraries

If more than one charting library is loaded, choose between them with:

```vue
<line-chart adapter="google"></line-chart>
```

Options are `google`, `highcharts`, and `chartjs`

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

## Upgrading

### 1.0

Vue Chartkick 1.0 adds support for Vue 3. Vue 3 requires you to specify plugins for each app.

```javascript
Vue.use(Chartkick.use(Chart))
```

to

```javascript
app.use(Chartkick.use(Chart))
```

For the no package manager install, Chartkick.js is no longer bundled, allowing you to update them independently. Include it manually before Vue Chartkick.

```html
<script src="https://unpkg.com/chartkick@3.2.1/dist/chartkick.js"></script>
````

Finally, Vue Chartkick no longer uses custom logic to see if a re-render is necessary. See the [reactivity docs](#reactivity) for more details.

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
npm install
npm run build
```
