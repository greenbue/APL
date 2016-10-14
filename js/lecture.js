function loadLecture(t) {
  window.location = "lecture.html?c=" + t;
}

function setTitle() {
  titleId = "course_title";
  t = window.location.search;
  if (t) {
    t = t.substring(1).split("=")[1];
    if (t) {
      document.getElementById(titleId).innerHTML = t;  
    }
  }
}

