$('#Stats1').on("shown.bs.collapse", function(){
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
                  left: '50px',
                  top: '18px',
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
