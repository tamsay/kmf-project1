var speedOptions = {
  series: [{
    name: "Motor Speed",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: "Feeder Speed",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
  {
    name: 'Blower Speed',
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  }
],
  chart: {
  height: 480,
  type: 'line',
  zoom: {
    enabled: true
  },
},
dataLabels: {
  enabled: true
},
stroke: {
  width: [5, 7, 5],
  curve: 'straight',
  dashArray: [0, 8, 5]
},
title: {
  text: 'Speed Trendlines',
  align: 'center'
},
legend: {
  tooltipHoverFormatter: function(val, opts) {
    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
  }
},
markers: {
  size: 0,
  hover: {
    sizeOffset: 6
  }
},
xaxis: {
  categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
    '10 Jan', '11 Jan', '12 Jan'
  ],
},
tooltip: {
  y: [
    {
      title: {
        formatter: function (val) {
          return val + " (mins)"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val + " per session"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val;
        }
      }
    }
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};

var pressureOptions = {
  series: [{
    name: "Air Pressure",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: "Air Velocity",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
  // {
  //   name: 'Total Visits',
  //   data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  // }
],
  chart: {
  height: 480,
  type: 'line',
  zoom: {
    enabled: true
  },
},
dataLabels: {
  enabled: true
},
stroke: {
  width: [5, 7, 5],
  curve: 'straight',
  dashArray: [0, 8, 5]
},
title: {
  text: 'Pressure Trendlines',
  align: 'center'
},
legend: {
  tooltipHoverFormatter: function(val, opts) {
    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
  }
},
markers: {
  size: 0,
  hover: {
    sizeOffset: 6
  }
},
xaxis: {
  categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
    '10 Jan', '11 Jan', '12 Jan'
  ],
},
tooltip: {
  y: [
    {
      title: {
        formatter: function (val) {
          return val + " (bar)"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val + " (bar)"
        }
      }
    },
    // {
    //   title: {
    //     formatter: function (val) {
    //       return val;
    //     }
    //   }
    // }
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};

var temperatureOptions = {
  series: [{
    name: "Panel Temperature",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: "Drying Duct Temperature",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
  {
    name: 'Heat Source',
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  }
],
  chart: {
  height: 480,
  type: 'line',
  zoom: {
    enabled: true
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [5, 7, 5],
  curve: 'straight',
  dashArray: [0, 8, 5]
},
title: {
  text: 'Temperature Trendlines',
  align: 'center'
},
legend: {
  tooltipHoverFormatter: function(val, opts) {
    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
  }
},
markers: {
  size: 0,
  hover: {
    sizeOffset: 6
  }
},
xaxis: {
  categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
    '10 Jan', '11 Jan', '12 Jan'
  ],
},
tooltip: {
  y: [
    {
      title: {
        formatter: function (val) {
          return val + " (C)"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val + " (C)"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val + " (C)";
        }
      }
    }
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};

var speedTrends = new ApexCharts(document.querySelector("#speed-display-div"), speedOptions);
speedTrends.render();

var pressureTrends = new ApexCharts(document.querySelector("#pressure-display-div"), pressureOptions);
pressureTrends.render();

var temperatureTrends = new ApexCharts(document.querySelector("#temperature-display-div"), temperatureOptions);
temperatureTrends.render();