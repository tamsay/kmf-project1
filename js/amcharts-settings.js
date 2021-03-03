
let createChart =(chartID, maxValue, chartType)=>{


// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// create chart
var chart = am4core.create(`${chartID}`, am4charts.GaugeChart);
chart.innerRadius = am4core.percent(85);

/**
 * Normal axis
 */

var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = 0;
axis.max = parseInt(`${maxValue}`);
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(105);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0.0125;
axis.renderer.ticks.template.disabled = false
axis.renderer.ticks.template.strokeOpacity = 1;
axis.renderer.ticks.template.length = 0;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = 0;
axis.renderer.labels.template.adapter.add("text", function(text) {
  return text + "";
})

/**
 * Axis for ranges
 */

var colorSet = new am4core.ColorSet();

var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = 0;
axis2.max = parseInt(`${maxValue}`);
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = true;

var range0 = axis2.axisRanges.create();
range0.value = 0;
range0.endValue = parseInt(`${(maxValue/2)}`);
range0.axisFill.fillOpacity = 1;
range0.axisFill.fill = colorSet.getIndex(0);

var range1 = axis2.axisRanges.create();
range1.value = parseInt(`${(maxValue/2)}`);
range1.endValue = parseInt(`${maxValue}`);
range1.axisFill.fillOpacity = 1;
range1.axisFill.fill = colorSet.getIndex(8);

/**
 * Label
 */

var label = chart.radarContainer.createChild(am4core.Label);
label.isMeasured = false;
// label.fontSize = 32;
label.x = am4core.percent(50);
label.y = am4core.percent(100);
label.horizontalCenter = "middle";
label.verticalCenter = "top";
label.text = "50%";


/**
 * Hand
 */

var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.innerRadius = am4core.percent(0);
hand.startWidth = 1;
hand.pin.disabled = true;
hand.value = 0;

hand.events.on("propertychanged", function(ev) {
  range0.endValue = ev.target.value;
  range1.value = ev.target.value;
  label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
  axis2.invalidate();
});

setInterval(function() {

  if(chartType === 'blowerSpeed'){
    var animation = new am4core.Animation(hand, {
      property: "value",
      to: getChartValues().blowerSpeed
    }, 500, am4core.ease.cubicOut).start();
  }

  else  if(chartType === 'feederSpeed'){
    var animation = new am4core.Animation(hand, {
      property: "value",
      to: getChartValues().feederSpeed
    }, 500, am4core.ease.cubicOut).start();
  }

  else  if(chartType === 'extractorSpeed'){
    var animation = new am4core.Animation(hand, {
      property: "value",
      to: getChartValues().extractorSpeed
    }, 500, am4core.ease.cubicOut).start();
  }

  else  if(chartType === 'airVelocity'){
    var animation = new am4core.Animation(hand, {
      property: "value",
      to: getChartValues().airVelocity
    }, 500, am4core.ease.cubicOut).start();
  }

  else {
    var animation = new am4core.Animation(hand, {
      property: "value",
      to: getChartValues().airPressure
    }, 500, am4core.ease.cubicOut).start();
  }

}, 3000);

}

let getChartValues =()=>{
    // fetch speed values for each chart
    // fetch function for each category will come here

    let blowerSpeed = Math.round(Math.random() * 3000);
    let feederSpeed = Math.round(Math.random() * 3000);
    let extractorSpeed = Math.round(Math.random() * 3000);
    let airVelocity = Math.round(Math.random() * 1000);
    let airPressure = Math.round(Math.random() * 7);

    let chartValues = {
      blowerSpeed: blowerSpeed,
      feederSpeed: feederSpeed,
      extractorSpeed: extractorSpeed,
      airVelocity: airVelocity,
      airPressure: airPressure,
    }

    return chartValues
};


      let blowerSpeedChart =(()=>{
          let blowerSpeedId = document.querySelector('#blowerSpeedChart').id
          let maxSpeed = 3000;
          createChart(blowerSpeedId, maxSpeed, 'blowerSpeed');
      })()

      let feederSpeedChart =(()=>{
        let feederSpeedId = document.querySelector('#feederSpeedChart').id
        let maxSpeed = 3000;
        createChart(feederSpeedId, maxSpeed, 'feederSpeed');
      })()

      let extractorSpeedChart =(()=>{
        let extractorSpeedId = document.querySelector('#extractorSpeedChart').id
        let maxSpeed = 3000;
        createChart(extractorSpeedId, maxSpeed, 'extractorSpeed');
      })()  

      let airVelocityChart =(()=>{
        let airVelocityId = document.querySelector('#airVelocityChart').id
        let maxSpeed = 1000;
        createChart(airVelocityId, maxSpeed, 'airVelocity');
      })()  

      let airPressureChart =(()=>{
        let airPressureId = document.querySelector('#airPressureChart').id
        let maxPressure = 7;
        createChart(airPressureId, maxPressure, 'airPressure');
      })()  

