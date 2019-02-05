//var moment = require('moment');
//var d3 = require('d3');
var c3 = require('c3');
var d3 = require('d3');
var noty = require('./notyController.js');
var ajaxrequest = require('./ajaxrequest.js');
var c3configs = require('./c3configs.js');

var c3Controller = {

chart: null,
chartData: null,
relativeYAxis: true,
cumulativity: true,
summary: false,
laskuri: 0,
init: function() {
	me = this;
	var config = me.summary ? c3configs.config2() : c3configs.config1();
	config.axis.y.tick.format = function (d) { return c3Controller.relativeYAxis ? Math.round(10000*d) / 100 + " %" : d; };
	me.chart = c3.generate(config);
	me.registerClick();
	me.registerCsvClick();
	$("#haeCSVBtn").hide();
	me.registerSwitch();
},
nid: null,
updateChart: function() {
	var me = this;
	var columns;
	var categories = [];
	if(me.relativeYAxis && !me.summary) {
		columns = me.cumulativity ? me.chartData.columnsCumulRel : me.chartData.columnsRel;
	} else if(me.summary) {
		columns = me.relativeYAxis ? me.chartData.columnsSumRel : me.chartData.columnsSum;
		categories = me.chartData.categories;
	} else {
		columns = me.cumulativity ? me.chartData.columnsCumul : me.chartData.columns;
	}
	c3Controller.chart.load({
	unload: true,
    columns: columns,
    names: me.chartData.names,
    categories: categories
    });
	me.summary ? c3Controller.chart.groups([]) : c3Controller.chart.groups(me.chartData.groups);
    if (me.chartData.columnsCumulRel[0].length < 2) {
    	if(me.nid!=null) c3Controller.nid.close();
    	me.nid = noty.createNoty("Haku ei löytänyt tuloksia hakuparametreilla", "alert");
    	}
    else {
    	if(me.nid!=null) c3Controller.nid.close();
    	}
},
updateChartData: function(response) {
	var me = this;
	if(response != "Moro"){
	c3Controller.myStopFunction();
	c3Controller.chartData = response;
	c3Controller.updateChart();
	$("#haeCSVBtn").show();
	console.log("make CSV button visible");
	}
	else {
		c3Controller.myStopFunction();
		c3Controller.nid.close();
		me.nid = noty.createNoty("Tapahtui virhe!", "error");
	}
},
registerClick: function() {
	var me = this;
	$("#haeGraafiBtn").click(function(e){
		e.preventDefault();
		$("#haeCSVBtn").hide();
		var startdate = $("#startdate").val() != "" ? $("#startdate").val().replace(/\./g, "-") : "01-01-2015";
		var stopdate = $("#stopdate").val() != "" ? $("#stopdate").val().replace(/\./g, "-") : "01-01-2015";
		var kunnat = $(".js-data-kunta-ajax").val() != null ? $(".js-data-kunta-ajax").val() : "0";
		var start = startdate.split("-");
		var stop = stopdate.split("-");
		var startjoin = start[2]+start[1]+start[0]
		var stopjoin = stop[2]+stop[1]+stop[0];
		if(startjoin > stopjoin){
			 var temp = startdate;
			 startdate=stopdate.replace(/-/g, ".");
			 stopdate=temp.replace(/-/g, ".");
			 $("#startdate").val(startdate);
			 $("#stopdate").val(stopdate); 
		}
		startdate = $("#startdate").val().replace(/\./g, "-");
		stopdate = $("#stopdate").val().replace(/\./g, "-");
		var tietolajit = $(".js-data-tietolaji-ajax").val() != null ? $(".js-data-tietolaji-ajax").val() : "0";
		var hallinnollinenluokka = $(".js-data-hallinnollinenluokka-ajax").val() != null ? $(".js-data-hallinnollinenluokka-ajax").val() : "1,2,3,99";
		var urli = "raportit/graafi1/" + startdate + "/" + stopdate + "/" + kunnat + "/" + tietolajit + "/" + hallinnollinenluokka;
		console.log("REST:" + urli);
		//if(me.nid!=null) c3Controller.nid.close();
		c3Controller.myStopFunction();
		if(tietolajit == 0 || kunnat == 0){
			me.nid = noty.createNoty("Anna tietolaji ja kunta!", "error");
		} 
		else {
			me.nid = noty.createNoty("Haetaan data...<span id=\"laskuri\"></span>", "alert");
			me.munLaskuri = setInterval(function(){ c3Controller.myTimer() }, 1000);
			ajaxrequest.get(urli, "", c3Controller.updateChartData);
		}
	});
},
registerCsvClick: function() {
	var me = this;
	$("#haeCSVBtn").click(function(e){
		e.preventDefault();
		var columns;
		var fileName;
	    if(me.relativeYAxis && !me.summary) {
		    columns = me.cumulativity ? me.chartData.columnsCumulRel : me.chartData.columnsRel;
			fileName = me.cumulativity ? "data_columnsCumulRel_" : "data_columnsRel_";
	    } else if(me.summary) {
		    columns = me.relativeYAxis ? me.chartData.columnsSumRel : me.chartData.columnsSum;
			fileName = me.relativeYAxis ? "data_columnsSumRel_" : "data_columnsSum_";
	    } else {
		    columns = me.cumulativity ? me.chartData.columnsCumul : me.chartData.columns;
			fileName = me.cumulativity ? "data_columnsCumul_" : "data_columns_";
	    }
        //DR-753 selkokieliset nimet. me.chartData.names löytyy koodi:nimi parit
        //käydään ne läpi ja korvataan koodit nimillä
	    for(var i = 0; i < columns.length; i++) {
	        var cube = columns[i];
	        for (var key in me.chartData.names) {
	            if (me.chartData.names.hasOwnProperty(key)) {
	                if(key==cube[0]){cube[0]=me.chartData.names[key];}
	            }
	        }
	    }
        var csvContent = "data:text/csv;charset=utf-8,";
        columns.forEach(function(infoArray, index){
            dataString = infoArray.join(";");
            csvContent += index < columns.length ? dataString+ "\n" : dataString;
        });
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", fileName + (new Date()).getTime() + ".csv");
        document.body.appendChild(link); // Required for FF
        link.click();
		console.log("csvContent: " + csvContent);
		console.log("encodeUri: " + encodedUri);
	});
},
registerSwitch: function() {
	var me = this;
	$('input[name="sw-abs-rel"]').on('switchChange.bootstrapSwitch', function(event, state) {
		me.relativeYAxis = state;
		me.updateChart();
	})
	$('input[name="sw-cumul"]').on('switchChange.bootstrapSwitch', function(event, state) {
		me.cumulativity = state;
		me.updateChart();
	})
	$('input[name="sw-summary"]').on('switchChange.bootstrapSwitch', function(event, state) {
		me.summary = state;
		if (me.summary) {
			config = c3configs.config2();
			config.axis.y.tick.format = function (d) { return c3Controller.relativeYAxis ? Math.round(10000*d) / 100 + " %" : d; };
			me.chart = c3.generate(config);
		} else {
			config = c3configs.config1();
			me.chart = c3.generate(config);
		}
		me.updateChart();
	})
},
myTimer: function() {
		var me = this;
	    me.laskuri=me.laskuri+1;
	    document.getElementById("laskuri").innerHTML = me.laskuri;
},
myStopFunction: function() {
		var me = this;
		me.laskuri=0;
		clearInterval(me.munLaskuri);
},
trash: function() {
//	function toggle(id) {
//    chart.toggle(id);
//}

//d3.select('.chartcontainer').insert('div', '.chart').attr('class', 'legend').selectAll('span')
//    .data(['data1', 'data2','data3', 'data4', 'data5', 'data6','data7', 'data8'])
//  .enter().append('span')
//    .attr('data-id', function (id) { return id; })
//    .html(function (id) { return chart.data.names()[id]; })
//    .each(function (id) {
//        d3.select(this).style('background-color', chart.color(id));
//    })
//    .on('mouseover', function (id) {
//        chart.focus(id);
//    })
//    .on('mouseout', function (id) {
//        chart.revert();
//    })
//    .on('click', function (id) {
//        chart.toggle(id);
//    });

//chart.data.colors({data3: chart.data.colors().data1, data4: chart.data.colors().data2});
}
};

module.exports = c3Controller;