
let createChart =(chartID)=>{


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
axis.max = 3000;
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
axis2.max = 3000;
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = true;

var range0 = axis2.axisRanges.create();
range0.value = 0;
range0.endValue = 1500;
range0.axisFill.fillOpacity = 1;
range0.axisFill.fill = colorSet.getIndex(0);

var range1 = axis2.axisRanges.create();
range1.value = 1500;
range1.endValue = 3000;
range1.axisFill.fillOpacity = 1;
range1.axisFill.fill = colorSet.getIndex(2);

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
  var value = Math.round(Math.random() * 3000);
  // var value = 1500;
  var animation = new am4core.Animation(hand, {
    property: "value",
    to: value
  }, 10, am4core.ease.cubicOut).start();
}, 2000);

}

let allChartSelector = document.querySelectorAll('.card-chart');
[...allChartSelector].map(element=>{
  console.log(element.id)
  let elementId = element.id;
  createChart(elementId)
})