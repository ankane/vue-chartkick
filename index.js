/*
 * Vue Chartkick
 * Create beautiful charts with one line in Vue.js
 * https://github.com/ankane/vue-chartkick
 * v0.1.0
 * @license MIT
 */

var Vue = require("vue")
var Chartkick = require("chartkick")
var chartId = 1

var createComponent = function(tagName, chartType) {
  Vue.component(tagName, {
    props: ["data", "id", "width", "height", "min", "max", "style"],
    template: '<div v-bind:id="chartId" v-bind:style="chartStyle">Loading...</div>',
    data: function() {
      return {
        chartId: null
      }
    },
    computed: {
      chartStyle: function() {
        return {
          height: this.height || "300px",
          lineHeight: this.height || "300px",
          width: this.width || "100%",
          textAlign: "center",
          color: "#999",
          fontSize: "14px",
          fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif"
        }
      }
    },
    created: function() {
      this.chartId = this.chartId || this.id || ("chart-" + chartId++)
    },
    mounted: function() {
      var data = this.data
      var options = {}
      var props = ["min", "max"]
      for (var i = 0; i < props.length; i++) {
        var prop = props[i]
        if (this[prop]) {
          options[prop] = this[prop]
        }
      }
      new chartType(this.chartId, data, options)
    }
  })
}

createComponent("line-chart", Chartkick.LineChart)
createComponent("pie-chart", Chartkick.PieChart)
createComponent("column-chart", Chartkick.ColumnChart)
createComponent("bar-chart", Chartkick.BarChart)
createComponent("area-chart", Chartkick.AreaChart)
createComponent("scatter-chart", Chartkick.ScatterChart)
createComponent("geo-chart", Chartkick.GeoChart)
createComponent("timeline", Chartkick.Timeline)
