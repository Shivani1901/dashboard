var options = {
    series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Average High & Low Temperature',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();






  var options = {
    series: [76, 67, 61, 90],
    chart: {
    height: 390,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        }
      }
    }
  },
  colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
  labels: ['batch1', 'batch2', 'batch3', 'batch4'],
  legend: {
    show: true,
    floating: true,
    fontSize: '15px',
    position: 'left',
    offsetX: 145,
    offsetY: 15,
    labels: {
      useSeriesColors: true,
    },
    markers: {
      size: 0
    },
    formatter: function(seriesName, opts) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
    },
    itemMargin: {
      vertical: 3
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
          show: false
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();






  var options = {
    series: [
    {
      data: [
        {
          x: 'batch1',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-04').getTime()
          ]
        },
        {
          x: 'batch2',
          y: [
            new Date('2019-03-01').getTime(),
            new Date('2019-03-07').getTime()
          ]
        },
        {
          x: 'batch3',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-10').getTime()
          ]
        },
        {
          x: 'batch4',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'batch5',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-16').getTime()
          ]
        },
        {
          x: 'batch6',
          y: [
            new Date('2019-03-15').getTime(),
            new Date('2019-03-18').getTime()
          ]
        },
        {
          x: 'batch7',
          y: [
            new Date('2019-03-15').getTime(),
            new Date('2019-03-22').getTime()
          ]
        },
        {
          x: 'batch8',
          y: [
            new Date('2019-03-20').getTime(),
            new Date('2019-03-26').getTime()
          ],
          fillColor: '#FEB019'
        },
        {
          x: 'batch9',
          y: [
            new Date('2019-03-18').getTime(),
            new Date('2019-03-25').getTime()
          ]
        },
        {
          x: 'batch10',
          y: [
            new Date('2019-03-23').getTime(),
            new Date('2019-03-27').getTime()
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  xaxis: {
    type: 'datetime'
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();


