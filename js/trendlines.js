// am4core.ready(function() {

// // Themes begin
// am4core.useTheme(am4themes_animated);
// // Themes end

// // Create chart instance
// let chart = am4core.create("trendlines-display-div", am4charts.XYChart);

// // Add data
// chart.data = [
//   {date:new Date(2019,5,12), value1:50, value2:48, previousDate:new Date(2019, 5, 5)},
//   {date:new Date(2019,5,13), value1:53, value2:51, previousDate:new Date(2019, 5, 6)},
//   {date:new Date(2019,5,14), value1:56, value2:58, previousDate:new Date(2019, 5, 7)},
//   {date:new Date(2019,5,15), value1:52, value2:53, previousDate:new Date(2019, 5, 8)},
//   {date:new Date(2019,5,16), value1:48, value2:44, previousDate:new Date(2019, 5, 9)},
//   {date:new Date(2019,5,17), value1:47, value2:42, previousDate:new Date(2019, 5, 10)},
//   {date:new Date(2019,5,18), value1:59, value2:55, previousDate:new Date(2019, 5, 11)}
// ]

// // Create axes
// let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
// dateAxis.renderer.minGridDistance = 50;

// let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// // Create series
// let series = chart.series.push(new am4charts.LineSeries());
// series.dataFields.valueY = "value1";
// series.dataFields.dateX = "date";
// series.strokeWidth = 2;
// series.minBulletDistance = 10;
// series.tooltipText = "[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
// series.tooltip.pointerOrientation = "vertical";

// // Create series
// let series2 = chart.series.push(new am4charts.LineSeries());
// series2.dataFields.valueY = "value2";
// series2.dataFields.dateX = "date";
// series2.strokeWidth = 2;
// series2.strokeDasharray = "3,4";
// series2.stroke = series.stroke;

// // Add cursor
// chart.cursor = new am4charts.XYCursor();
// chart.cursor.xAxis = dateAxis;

// }); // end am4core.ready()



// window.onload = function () {

// let chart = new CanvasJS.Chart("trendlines-display-div", {
// 	title: {
// 		text: "House Median Price"
// 	},
// 	axisX: {
// 		valueFormatString: "MMM YYYY"
// 	},
// 	axisY2: {
// 		title: "Median List Price",
// 		prefix: "$",
// 		suffix: "K"
// 	},
// 	toolTip: {
// 		shared: true
// 	},
// 	legend: {
// 		cursor: "pointer",
// 		verticalAlign: "top",
// 		horizontalAlign: "center",
// 		dockInsidePlotArea: true,
// 		itemclick: toogleDataSeries
// 	},
// 	data: [{
// 		type:"line",
// 		axisYType: "secondary",
// 		name: "San Fransisco",
// 		showInLegend: true,
// 		markerSize: 0,
// 		yValueFormatString: "$#,###k",
// 		dataPoints: [		
// 			{ x: new Date(2014, 00, 01), y: 850 },
// 			{ x: new Date(2014, 01, 01), y: 889 },
// 			{ x: new Date(2014, 02, 01), y: 890 },
// 			{ x: new Date(2014, 03, 01), y: 899 },
// 			{ x: new Date(2014, 04, 01), y: 903 },
// 			{ x: new Date(2014, 05, 01), y: 925 },
// 			{ x: new Date(2014, 06, 01), y: 899 },
// 			{ x: new Date(2014, 07, 01), y: 875 },
// 			{ x: new Date(2014, 08, 01), y: 927 },
// 			{ x: new Date(2014, 09, 01), y: 949 },
// 			{ x: new Date(2014, 10, 01), y: 946 },
// 			{ x: new Date(2014, 11, 01), y: 927 },
// 			{ x: new Date(2015, 00, 01), y: 950 },
// 			{ x: new Date(2015, 01, 01), y: 998 },
// 			{ x: new Date(2015, 02, 01), y: 998 },
// 			{ x: new Date(2015, 03, 01), y: 1050 },
// 			{ x: new Date(2015, 04, 01), y: 1050 },
// 			{ x: new Date(2015, 05, 01), y: 999 },
// 			{ x: new Date(2015, 06, 01), y: 998 },
// 			{ x: new Date(2015, 07, 01), y: 998 },
// 			{ x: new Date(2015, 08, 01), y: 1050 },
// 			{ x: new Date(2015, 09, 01), y: 1070 },
// 			{ x: new Date(2015, 10, 01), y: 1050 },
// 			{ x: new Date(2015, 11, 01), y: 1050 },
// 			{ x: new Date(2016, 00, 01), y: 995 },
// 			{ x: new Date(2016, 01, 01), y: 1090 },
// 			{ x: new Date(2016, 02, 01), y: 1100 },
// 			{ x: new Date(2016, 03, 01), y: 1150 },
// 			{ x: new Date(2016, 04, 01), y: 1150 },
// 			{ x: new Date(2016, 05, 01), y: 1150 },
// 			{ x: new Date(2016, 06, 01), y: 1100 },
// 			{ x: new Date(2016, 07, 01), y: 1100 },
// 			{ x: new Date(2016, 08, 01), y: 1150 },
// 			{ x: new Date(2016, 09, 01), y: 1170 },
// 			{ x: new Date(2016, 10, 01), y: 1150 },
// 			{ x: new Date(2016, 11, 01), y: 1150 },
// 			{ x: new Date(2017, 00, 01), y: 1150 },
// 			{ x: new Date(2017, 01, 01), y: 1200 },
// 			{ x: new Date(2017, 02, 01), y: 1200 },
// 			{ x: new Date(2017, 03, 01), y: 1200 },
// 			{ x: new Date(2017, 04, 01), y: 1190 },
// 			{ x: new Date(2017, 05, 01), y: 1170 }
// 		]
// 	},
// 	{
// 		type: "line",
// 		axisYType: "secondary",
// 		name: "Manhattan",
// 		showInLegend: true,
// 		markerSize: 0,
// 		yValueFormatString: "$#,###k",
// 		dataPoints: [
// 			{ x: new Date(2014, 00, 01), y: 1200 },
// 			{ x: new Date(2014, 01, 01), y: 1200 },
// 			{ x: new Date(2014, 02, 01), y: 1190 },
// 			{ x: new Date(2014, 03, 01), y: 1180 },
// 			{ x: new Date(2014, 04, 01), y: 1250 },
// 			{ x: new Date(2014, 05, 01), y: 1270 },
// 			{ x: new Date(2014, 06, 01), y: 1300 },
// 			{ x: new Date(2014, 07, 01), y: 1300 },
// 			{ x: new Date(2014, 08, 01), y: 1358 },
// 			{ x: new Date(2014, 09, 01), y: 1410 },
// 			{ x: new Date(2014, 10, 01), y: 1480 },
// 			{ x: new Date(2014, 11, 01), y: 1500 },
// 			{ x: new Date(2015, 00, 01), y: 1500 },
// 			{ x: new Date(2015, 01, 01), y: 1550 },
// 			{ x: new Date(2015, 02, 01), y: 1550 },
// 			{ x: new Date(2015, 03, 01), y: 1590 },
// 			{ x: new Date(2015, 04, 01), y: 1600 },
// 			{ x: new Date(2015, 05, 01), y: 1590 },
// 			{ x: new Date(2015, 06, 01), y: 1590 },
// 			{ x: new Date(2015, 07, 01), y: 1620 },
// 			{ x: new Date(2015, 08, 01), y: 1670 },
// 			{ x: new Date(2015, 09, 01), y: 1720 },
// 			{ x: new Date(2015, 10, 01), y: 1750 },
// 			{ x: new Date(2015, 11, 01), y: 1820 },
// 			{ x: new Date(2016, 00, 01), y: 2000 },
// 			{ x: new Date(2016, 01, 01), y: 1920 },
// 			{ x: new Date(2016, 02, 01), y: 1750 },
// 			{ x: new Date(2016, 03, 01), y: 1850 },
// 			{ x: new Date(2016, 04, 01), y: 1750 },
// 			{ x: new Date(2016, 05, 01), y: 1730 },
// 			{ x: new Date(2016, 06, 01), y: 1700 },
// 			{ x: new Date(2016, 07, 01), y: 1730 },
// 			{ x: new Date(2016, 08, 01), y: 1720 },
// 			{ x: new Date(2016, 09, 01), y: 1740 },
// 			{ x: new Date(2016, 10, 01), y: 1750 },
// 			{ x: new Date(2016, 11, 01), y: 1750 },
// 			{ x: new Date(2017, 00, 01), y: 1750 },
// 			{ x: new Date(2017, 01, 01), y: 1770 },
// 			{ x: new Date(2017, 02, 01), y: 1750 },
// 			{ x: new Date(2017, 03, 01), y: 1750 },
// 			{ x: new Date(2017, 04, 01), y: 1730 },
// 			{ x: new Date(2017, 05, 01), y: 1730 }
// 		]
// 	},
// 	{
// 		type: "line",
// 		axisYType: "secondary",
// 		name: "Seatle",
// 		showInLegend: true,
// 		markerSize: 0,
// 		yValueFormatString: "$#,###k",
// 		dataPoints: [
// 			{ x: new Date(2014, 00, 01), y: 409 },
// 			{ x: new Date(2014, 01, 01), y: 415 },
// 			{ x: new Date(2014, 02, 01), y: 419 },
// 			{ x: new Date(2014, 03, 01), y: 429 },
// 			{ x: new Date(2014, 04, 01), y: 429 },
// 			{ x: new Date(2014, 05, 01), y: 450 },
// 			{ x: new Date(2014, 06, 01), y: 450 },
// 			{ x: new Date(2014, 07, 01), y: 445 },
// 			{ x: new Date(2014, 08, 01), y: 450 },
// 			{ x: new Date(2014, 09, 01), y: 450 },
// 			{ x: new Date(2014, 10, 01), y: 440 },
// 			{ x: new Date(2014, 11, 01), y: 429 },
// 			{ x: new Date(2015, 00, 01), y: 435 },
// 			{ x: new Date(2015, 01, 01), y: 450 },
// 			{ x: new Date(2015, 02, 01), y: 475 },
// 			{ x: new Date(2015, 03, 01), y: 475 },
// 			{ x: new Date(2015, 04, 01), y: 475 },
// 			{ x: new Date(2015, 05, 01), y: 489 },
// 			{ x: new Date(2015, 06, 01), y: 495 },
// 			{ x: new Date(2015, 07, 01), y: 495 },
// 			{ x: new Date(2015, 08, 01), y: 500 },
// 			{ x: new Date(2015, 09, 01), y: 508 },
// 			{ x: new Date(2015, 10, 01), y: 520 },
// 			{ x: new Date(2015, 11, 01), y: 525 },
// 			{ x: new Date(2016, 00, 01), y: 525 },
// 			{ x: new Date(2016, 01, 01), y: 529 },
// 			{ x: new Date(2016, 02, 01), y: 549 },
// 			{ x: new Date(2016, 03, 01), y: 550 },
// 			{ x: new Date(2016, 04, 01), y: 568 },
// 			{ x: new Date(2016, 05, 01), y: 575 },
// 			{ x: new Date(2016, 06, 01), y: 579 },
// 			{ x: new Date(2016, 07, 01), y: 575 },
// 			{ x: new Date(2016, 08, 01), y: 585 },
// 			{ x: new Date(2016, 09, 01), y: 589 },
// 			{ x: new Date(2016, 10, 01), y: 595 },
// 			{ x: new Date(2016, 11, 01), y: 595 },
// 			{ x: new Date(2017, 00, 01), y: 595 },
// 			{ x: new Date(2017, 01, 01), y: 600 },
// 			{ x: new Date(2017, 02, 01), y: 624 },
// 			{ x: new Date(2017, 03, 01), y: 635 },
// 			{ x: new Date(2017, 04, 01), y: 650 },
// 			{ x: new Date(2017, 05, 01), y: 675 }
// 		]
// 	},
// 	{
// 		type: "line",
// 		axisYType: "secondary",
// 		name: "Los Angeles",
// 		showInLegend: true,
// 		markerSize: 0,
// 		yValueFormatString: "$#,###k",
// 		dataPoints: [
// 			{ x: new Date(2014, 00, 01), y: 529 },
// 			{ x: new Date(2014, 01, 01), y: 540 },
// 			{ x: new Date(2014, 02, 01), y: 539 },
// 			{ x: new Date(2014, 03, 01), y: 565 },
// 			{ x: new Date(2014, 04, 01), y: 575 },
// 			{ x: new Date(2014, 05, 01), y: 579 },
// 			{ x: new Date(2014, 06, 01), y: 589 },
// 			{ x: new Date(2014, 07, 01), y: 579 },
// 			{ x: new Date(2014, 08, 01), y: 579 },
// 			{ x: new Date(2014, 09, 01), y: 579 },
// 			{ x: new Date(2014, 10, 01), y: 569 },
// 			{ x: new Date(2014, 11, 01), y: 525 },
// 			{ x: new Date(2015, 00, 01), y: 535 },
// 			{ x: new Date(2015, 01, 01), y: 575 },
// 			{ x: new Date(2015, 02, 01), y: 599 },
// 			{ x: new Date(2015, 03, 01), y: 619 },
// 			{ x: new Date(2015, 04, 01), y: 639 },
// 			{ x: new Date(2015, 05, 01), y: 648 },
// 			{ x: new Date(2015, 06, 01), y: 640 },
// 			{ x: new Date(2015, 07, 01), y: 645 },
// 			{ x: new Date(2015, 08, 01), y: 648 },
// 			{ x: new Date(2015, 09, 01), y: 649 },
// 			{ x: new Date(2015, 10, 01), y: 649 },
// 			{ x: new Date(2015, 11, 01), y: 649 },
// 			{ x: new Date(2016, 00, 01), y: 650 },
// 			{ x: new Date(2016, 01, 01), y: 665 },
// 			{ x: new Date(2016, 02, 01), y: 675 },
// 			{ x: new Date(2016, 03, 01), y: 695 },
// 			{ x: new Date(2016, 04, 01), y: 690 },
// 			{ x: new Date(2016, 05, 01), y: 699 },
// 			{ x: new Date(2016, 06, 01), y: 699 },
// 			{ x: new Date(2016, 07, 01), y: 699 },
// 			{ x: new Date(2016, 08, 01), y: 699 },
// 			{ x: new Date(2016, 09, 01), y: 699 },
// 			{ x: new Date(2016, 10, 01), y: 709 },
// 			{ x: new Date(2016, 11, 01), y: 699 },
// 			{ x: new Date(2017, 00, 01), y: 700 },
// 			{ x: new Date(2017, 01, 01), y: 700 },
// 			{ x: new Date(2017, 02, 01), y: 724 },
// 			{ x: new Date(2017, 03, 01), y: 739 },
// 			{ x: new Date(2017, 04, 01), y: 749 },
// 			{ x: new Date(2017, 05, 01), y: 740 }
// 		]
// 	}]
// });
// chart.render();

// function toogleDataSeries(e){
// 	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// 		e.dataSeries.visible = false;
// 	} else{
// 		e.dataSeries.visible = true;
// 	}
// 	chart.render();
// }

// }




// window.onload = function () {

    let speedTrends=(()=>{

   
let dataPoints1 = [];
let dataPoints2 = [];
let dataPoints3 = [];

let chart = new CanvasJS.Chart("speed-display-div", {
	zoomEnabled: true,
	title: {
		text: "Speeds Comparison"
	},
	axisX: {
		title: "chart updates every 3 secs"
	},
	axisY:{
        suffix: 'rpm'
	}, 
	toolTip: {
		shared: true
	},
	legend: {
		cursor:"pointer",
		verticalAlign: "top",
		fontSize: 22,
		fontColor: "dimGrey",
		itemclick : toggleDataSeries
	},
	data: [{ 
		type: "line",
		xValueType: "dateTime",
		yValueFormatString: "$####.00",
		xValueFormatString: "hh:mm:ss TT",
		showInLegend: true,
		name: "Motor Speed",
		dataPoints: dataPoints1
		},
		{				
			type: "line",
			xValueType: "dateTime",
			yValueFormatString: "$####.00",
			showInLegend: true,
			name: "Mixer Speed" ,
			dataPoints: dataPoints2
        },
        {				
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "$####.00",
            showInLegend: true,
            name: "Blower Speed" ,
            dataPoints: dataPoints3
        }]
});

function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}

let updateInterval = 3000;
// initial value
let yValue1 = 200; 
let yValue2 = 30;
let yValue3 = 700;

let time = new Date;
// starting at 9.30 am
time.setHours(9);
time.setMinutes(30);
time.setSeconds(00);
time.setMilliseconds(00);

function updateChart(count) {
	count = count || 1;
	let deltaY1, deltaY2, deltaY3;
	for (let i = 0; i < count; i++) {
		time.setTime(time.getTime()+ updateInterval);
		deltaY1 = 9.5 + Math.random() *(-.5-.5);
		deltaY2 = 6.5 + Math.random() *(-.5-.5);
        deltaY3 = 1.5 + Math.random() *(-.5-.5);

	// adding random value and rounding it to two digits. 
	yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
	yValue2 = Math.round((yValue2 + deltaY2)*100)/100;
	yValue3 = Math.round((yValue3 + deltaY3)*100)/100;

	// pushing the new values
	dataPoints1.push({
		x: time.getTime(),
		y: yValue1
	});
	dataPoints2.push({
		x: time.getTime(),
		y: yValue2
	});
    dataPoints3.push({
		x: time.getTime(),
		y: yValue3
	});
	}

	// updating legend text with  updated with y Value 
	chart.options.data[0].legendText = " Motor Speed " + yValue1;
	chart.options.data[1].legendText = " Feeder Speed " + yValue2; 
    chart.options.data[2].legendText = " Blower Speed " + yValue3; 

	chart.render();
}
// generates first set of dataPoints 
updateChart(100);	
setInterval(function(){updateChart()}, updateInterval);
})()



let pressureTrends =(()=>{

    let dataPoints1 = [];
    let dataPoints2 = [];
    let dataPoints3 = [];
    
    let chart = new CanvasJS.Chart("pressure-display-div", {
        zoomEnabled: true,
        title: {
            text: "Pressure Comparison"
        },
        axisX: {
            title: "chart updates every 3 secs"
        },
        axisY:{
            suffix: 'rpm'
        }, 
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            verticalAlign: "top",
            fontSize: 22,
            fontColor: "dimGrey",
            itemclick : toggleDataSeries
        },
        data: [{ 
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "$####.00",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Motor Speed",
            dataPoints: dataPoints1
            },
            {				
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "$####.00",
                showInLegend: true,
                name: "Mixer Speed" ,
                dataPoints: dataPoints2
            },
            {				
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "$####.00",
                showInLegend: true,
                name: "Blower Speed" ,
                dataPoints: dataPoints3
            }]
    });
    
    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    let updateInterval = 3000;
    // initial value
    let yValue1 = 200; 
    let yValue2 = 30;
    let yValue3 = 700;
    
    let time = new Date;
    // starting at 9.30 am
    time.setHours(9);
    time.setMinutes(30);
    time.setSeconds(00);
    time.setMilliseconds(00);
    
    function updateChart(count) {
        count = count || 1;
        let deltaY1, deltaY2, deltaY3;
        for (let i = 0; i < count; i++) {
            time.setTime(time.getTime()+ updateInterval);
            deltaY1 = 9.5 + Math.random() *(-.5-.5);
            deltaY2 = 6.5 + Math.random() *(-.5-.5);
            deltaY3 = 1.5 + Math.random() *(-.5-.5);
    
        // adding random value and rounding it to two digits. 
        yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
        yValue2 = Math.round((yValue2 + deltaY2)*100)/100;
        yValue3 = Math.round((yValue3 + deltaY3)*100)/100;
    
        // pushing the new values
        dataPoints1.push({
            x: time.getTime(),
            y: yValue1
        });
        dataPoints2.push({
            x: time.getTime(),
            y: yValue2
        });
        dataPoints3.push({
            x: time.getTime(),
            y: yValue3
        });
        }
    
        // updating legend text with  updated with y Value 
        chart.options.data[0].legendText = " Motor Speed " + yValue1;
        chart.options.data[1].legendText = " Feeder Speed " + yValue2; 
        chart.options.data[2].legendText = " Blower Speed " + yValue3; 
    
        chart.render();
    }
    // generates first set of dataPoints 
    updateChart(100);	
    setInterval(function(){updateChart()}, updateInterval);

})()



let temperatureTrends =(()=>{

        let dataPoints1 = [];
        let dataPoints2 = [];
        let dataPoints3 = [];
        
        let chart = new CanvasJS.Chart("temperature-display-div", {
            zoomEnabled: true,
            title: {
                text: "Temperatures Comparison"
            },
            axisX: {
                title: "chart updates every 3 secs"
            },
            axisY:{
                suffix: 'rpm'
            }, 
            toolTip: {
                shared: true
            },
            legend: {
                cursor:"pointer",
                verticalAlign: "top",
                fontSize: 22,
                fontColor: "dimGrey",
                itemclick : toggleDataSeries
            },
            data: [{ 
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "$####.00",
                xValueFormatString: "hh:mm:ss TT",
                showInLegend: true,
                name: "Motor Speed",
                dataPoints: dataPoints1
                },
                {				
                    type: "line",
                    xValueType: "dateTime",
                    yValueFormatString: "$####.00",
                    showInLegend: true,
                    name: "Mixer Speed" ,
                    dataPoints: dataPoints2
                },
                {				
                    type: "line",
                    xValueType: "dateTime",
                    yValueFormatString: "$####.00",
                    showInLegend: true,
                    name: "Blower Speed" ,
                    dataPoints: dataPoints3
                }]
        });
        
        function toggleDataSeries(e) {
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart.render();
        }
        
        let updateInterval = 3000;
        // initial value
        let yValue1 = 200; 
        let yValue2 = 30;
        let yValue3 = 700;
        
        let time = new Date;
        // starting at 9.30 am
        time.setHours(9);
        time.setMinutes(30);
        time.setSeconds(00);
        time.setMilliseconds(00);
        
        function updateChart(count) {
            count = count || 1;
            let deltaY1, deltaY2, deltaY3;
            for (let i = 0; i < count; i++) {
                time.setTime(time.getTime()+ updateInterval);
                deltaY1 = 9.5 + Math.random() *(-.5-.5);
                deltaY2 = 6.5 + Math.random() *(-.5-.5);
                deltaY3 = 1.5 + Math.random() *(-.5-.5);
        
            // adding random value and rounding it to two digits. 
            yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
            yValue2 = Math.round((yValue2 + deltaY2)*100)/100;
            yValue3 = Math.round((yValue3 + deltaY3)*100)/100;
        
            // pushing the new values
            dataPoints1.push({
                x: time.getTime(),
                y: yValue1
            });
            dataPoints2.push({
                x: time.getTime(),
                y: yValue2
            });
            dataPoints3.push({
                x: time.getTime(),
                y: yValue3
            });
            }
        
            // updating legend text with  updated with y Value 
            chart.options.data[0].legendText = " Motor Speed " + yValue1;
            chart.options.data[1].legendText = " Feeder Speed " + yValue2; 
            chart.options.data[2].legendText = " Blower Speed " + yValue3; 
        
            chart.render();
        }
        // generates first set of dataPoints 
        updateChart(100);	
        setInterval(function(){updateChart()}, updateInterval);
        
    })()


