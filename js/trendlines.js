var speedOptions = {
  series: [{
    name: "Extractor Speed",
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
  height: 400,
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
          return val + " (rpm)"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val + " (rpm)"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val + " (rpm)"
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
],
  chart: {
  height: 400,
  type: 'line',
  zoom: {
    enabled: true
  },
},
dataLabels: {
  enabled: true
},
stroke: {
  width: [5],
  curve: 'straight',
  dashArray: [0]
},
title: {
  text: 'Air Pressure Trendline',
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
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};

var temperatureOptions = {
  series: [{
    name: "Burner Temperature",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: "Drying Duct Temperature",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
  {
    name: 'Heat Source',
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  },
  {
    name: 'Drying Duct Humidity',
    data: [87, 97, 74, 99, 45, 38, 42, 47, 82, 51, 45, 47]
  },
],
  chart: {
  height: 400,
  type: 'line',
  zoom: {
    enabled: true
  },
},
dataLabels: {
  enabled: true
},
stroke: {
  width: [5, 7, 5, 6],
  curve: 'straight',
  dashArray: [0, 8, 5, 3]
},
title: {
  text: 'Temperature and Humidity Trendlines',
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
    },
    {
      title: {
        formatter: function (val) {
          return val + " (%)";
        }
      }
    }
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};

var airVelocityOptions = {
  series: [
  {
    name: "Air Velocity",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
],
  chart: {
  height: 400,
  type: 'line',
  zoom: {
    enabled: true
  },
},
dataLabels: {
  enabled: true
},
stroke: {
  width: [7],
  curve: 'straight',
  dashArray: [8]
},
title: {
  text: 'Air Velocity Trendline',
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
          return val + " (m/s)"
        }
      }
    },
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};

var materialInputOptions = {
  series: [{
    name: "Material Input",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
],
  chart: {
  height: 400,
  type: 'line',
  zoom: {
    enabled: true
  },
},
dataLabels: {
  enabled: true
},
stroke: {
  width: [5],
  curve: 'straight',
  dashArray: [5]
},
title: {
  text: 'Material Input Trendline',
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
          return val + ""
        }
      }
    },
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};


var temperatureTrends = new ApexCharts(document.querySelector("#temperature-display-div"), temperatureOptions);
temperatureTrends.render();

var speedTrends = new ApexCharts(document.querySelector("#speed-display-div"), speedOptions);
speedTrends.render();

var pressureTrends = new ApexCharts(document.querySelector("#pressure-display-div"), pressureOptions);
pressureTrends.render();

var airVelocityTrends = new ApexCharts(document.querySelector("#air-velocity-display-div"), airVelocityOptions);
airVelocityTrends.render();

var materialInputTrends = new ApexCharts(document.querySelector("#material-input-display-div"), materialInputOptions);
materialInputTrends.render();
