


$('#Stats1').on("shown.bs.collapse", function(){

  $('#overall1').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Overall Performance (All Attempts)'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Topic1',
        y: 20
      }, {
        name: 'Topic2',
        y: 35,
        sliced: true,
        selected: true
      }, {
        name: 'Topic3',
        y: 25
      }, {
        name: 'Topic4',
        y: 10
      }, {
        name: 'Topic5',
        y: 10
      }]
    }]
  });


  $('#understanding1').highcharts({

      chart: {
          polar: true,
          type: 'line'
      },

      title: {
          text: 'Understanding'
      },

      pane: {
          size: '65%'
      },
      credits: {
        enabled: false
      },
      xAxis: {
          categories: ['Topic1', 'Topic2', 'Topic3', 'Topic4','Topic5', 'Overall'],
          tickmarkPlacement: 'on',
          lineWidth: 0
      },

      yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          min: 0
      },

      tooltip: {
          shared: true,
          pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
      },

      series: [{
          name: 'Attempt 1',
          data: [20, 35, 25, 10, 10, 20],
          pointPlacement: 'on'
      },
      {
          name: 'Attempt 2',
          data: [30, 40, 60, 60, 50, 25],
          pointPlacement: 'on'
      },
      {
          name: 'Attempt 3',
          data: [40, 50, 70, 75, 65, 30],
          pointPlacement: 'on'
      }]

  });

  $('#attempts1').highcharts({

      chart: {
          polar: true,
          type: 'line'
      },

      title: {
          text: 'Attempts - Average Time'
      },

      pane: {
          size: '65%'
      },
      credits: {
        enabled: false
      },
      xAxis: {
          categories: ['Topic1', 'Topic2', 'Topic3', 'Topic4','Topic5', 'Average'],
          tickmarkPlacement: 'on',
          lineWidth: 0
      },

      yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          min: 0
      },

      tooltip: {
          shared: true,
          pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
      },

      series: [{
          name: 'Attempt 1',
          data: [10, 11, 12, 13, 14, 12],
          pointPlacement: 'on'
      },
      {
          name: 'Attempt 2',
          data: [9, 9, 9, 9, 9, 9],
          pointPlacement: 'on'
      },
      {
          name: 'Attempt 3',
          data: [5, 6, 7, 8, 9, 7],
          pointPlacement: 'on'
      }]

  });


  $('#indtopic1').highcharts({
    title: {
      text: 'Performance on Each Topic'
    },
    xAxis: {
      categories: ['Topic1', 'Topic2', 'Topic3', 'Topic4', 'Topic5']
    },
    yAxis: {
      title: {
        text: 'Score'
      }
    },
    labels: {
      items: [{
        style: {
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
        }
      }]
    },
    credits: {
      enabled: false
    },
    series: [{
      type: 'column',
      name: 'Attemp1',
      data: [2, 3, 1, 1, 2]
    }, {
      type: 'column',
      name: 'Attempt2',
      data: [3, 4, 3, 2, 2]
    }, {
      type: 'column',
      name: 'Attemp3',
      data: [4, 5, 5, 3, 3]
    }, ]
  });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;

  var slides = document.getElementsByClassName("badge");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
