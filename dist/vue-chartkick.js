(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"), require("Chartkick"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue", "Chartkick"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("Vue"), require("Chartkick")) : factory(root["Vue"], root["Chartkick"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Vue Chartkick
	 * Create beautiful charts with one line in Vue.js
	 * https://github.com/ankane/vue-chartkick
	 * v0.1.3
	 * @license MIT
	 */

	var Vue = __webpack_require__(1)
	var Chartkick = __webpack_require__(2)
	var chartId = 1

	var createComponent = function(tagName, chartType) {
	  var chartProps = ["min", "max", "colors", "stacked", "discrete", "label", "xtitle", "ytitle", "library", "download", "refresh", "donut", "legend", "curve", "title"]
	  Vue.component(tagName, {
	    props: ["data", "id", "width", "height"].concat(chartProps),
	    template: '<div v-bind:id="chartId" v-bind:style="chartStyle">Loading...</div>',
	    data: function() {
	      return {
	        chartId: null
	      }
	    },
	    computed: {
	      chartStyle: function() {
	        // hack to watch data and options
	        this.data
	        this.chartOptions

	        return {
	          height: this.height || "300px",
	          lineHeight: this.height || "300px",
	          width: this.width || "100%",
	          textAlign: "center",
	          color: "#999",
	          fontSize: "14px",
	          fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif"
	        }
	      },
	      chartOptions: function() {
	        var options = {}
	        var props = chartProps
	        for (var i = 0; i < props.length; i++) {
	          var prop = props[i]
	          if (this[prop] !== undefined) {
	            options[prop] = this[prop]
	          }
	        }
	        return options
	      }
	    },
	    created: function() {
	      this.chartId = this.chartId || this.id || ("chart-" + chartId++)
	    },
	    mounted: function() {
	      this.renderChart()
	    },
	    updated: function() {
	      this.renderChart()
	    },
	    methods: {
	      renderChart: function() {
	        new chartType(this.chartId, this.data, this.chartOptions)
	      }
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;