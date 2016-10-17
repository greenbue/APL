var lecture_active_page;
var lecture_course;

function loadLecture(t) {
  window.location = "lecture.html?c=" + t;
}

function loadCourse() {
  course = window.location.search;
  if (course) {
    course = course.substring(1).split("=")[1];
  }
  if (!course) {
      course = "TEST123";
  }
  lecture_course = course;

  //Error checking
  exists = lecture_course_details[course];
  has_lectures = "";
  has_questions = "";
  if (exists) {
    has_lectures = lecture_course_titles[course];
  }

  if (!exists) {
    setTitle("Could not find course: " + course + ".");
    document.getElementById("lecture_body").className += " hidden";
  }
  if (exists && !has_lectures) {
    setTitle("Lectures for " + course + " have not been created yet. Please try again at a later date.");
    document.getElementById("lecture_body").className += " hidden";
  }

  //Setup lecture page
  if (has_lectures) {
    setTitle(course);
    //TODO - Need some way to set this, probably a value in lecture_data.
    activePage = 1;
    setPagination(lecture_course_details[course]);
    loadLecturePage(lecture_active_page,has_lectures);
    has_questions = lecture_course_questions[course + "E" + lecture_active_page];
    loadQuestions(lecture_active_page,has_lectures,has_questions);
    loadReading(lecture_active_page,"Lecture " + lecture_active_page + ": " + has_lectures[(lecture_active_page-1)]);
  }

  //Unhide lecture panel when everything has been setup.
  root = document.getElementById("lecture_root");
  root.className = root.className.replace(" hidden", "");
}

function setTitle(course) {
  document.getElementById("lecture_course_title").innerHTML = course;
}

function setPagination(courseInfo) {
  root = document.getElementById("lecture_pagination");
  pages = courseInfo[0];
  activePage = courseInfo[1];
  lecture_active_page = activePage;
  for (i = 1; i <= pages; i++) {
    li = document.createElement("li");
    if (i == activePage) {
      li.className += " active";
    }
    a = document.createElement("a");
    a.addEventListener('click',changeLecturePage);
    a.className += " no-text-cursor";
    node = document.createTextNode(i);
    a.appendChild(node);
    li.setAttribute("id", "lecture_page_button" + i);

    if (i > activePage) {
      li.setAttribute("title", "You have not unlocked this lesson yet.");
      li.className += " disabled";
    }

    li.appendChild(a);
    root.appendChild(li);
  }
}

//Tabs are video, reading, questions
function changeLectureTab(tabNum) {
  console.log("Change to tab " + tabNum);

}

//Pages are lecture 1, lecture 2 etc
function changeLecturePage() {
  className = this.parentNode.className;
  if (className && className.includes("disabled")) { return; }
  pageNum = this.innerHTML;
  console.log("Change to lecture " + pageNum);
  old = document.getElementById("lecture_page_button" + lecture_active_page);
  old.className = old.className.replace(" active", "");
  lecture_active_page = pageNum;
  this.parentNode.className += " active";
  titles = lecture_course_titles[lecture_course];
  questions = lecture_course_questions[lecture_course + "E" + pageNum];
  loadLecturePage(pageNum,lecture_course_titles[lecture_course]);
  loadQuestions(pageNum,titles,questions);
  loadReading(pageNum,"Lecture " + lecture_active_page + ": " + titles[(pageNum-1)]);
  //loadReading(titles[lecture_active_page-1],lecture_course + "r" + (lecture_active_page-1) + ".html");
}

function loadLecturePage(page,titles) {
  lecture_title = titles[page-1];

  video_title = document.getElementById("lecture_video_title");
  video_title.innerHTML = "Lecture " + page + ": " + lecture_title;
  document.getElementById("lecture_video").setAttribute("src", "https://www.youtube.com/embed/dQw4w9WgXcQ");
}

function loadQuestions(page,titles,questionData) {
  qTitle = document.getElementById("lecture_questions_title");
  root = document.getElementById("question_pane");
  qDiv = document.getElementById("qDiv");
  if (qDiv) {
    root.removeChild(qDiv);
  }
  if (!questionData || !questionData.constructor === Array) {
    qTitle.innerHTML = "Could not find question data for Lecture " + page + ": " + titles[page-1];
  } else {
    qTitle.innerHTML = "Questions on Lecture " + page + ": " + titles[page-1];

    qDiv = document.createElement("div");
    qDiv.setAttribute("id", "qDiv");
    for (i = 0; i < questionData.length; i++) {
      div = document.createElement("div");
      div.className = "form-group";
      q = document.createElement("label");
      q.setAttribute("for", "A" + (i+1));
      qTxt = document.createTextNode((i+1) + ") " + questionData[i]);
      q.appendChild(qTxt);
      a = document.createElement("input");
      a.setAttribute("type", "text");
      a.setAttribute("id", "A" + (i+1));
      a.className = "form-control";
      div.appendChild(q);
      div.appendChild(a);
      qDiv.appendChild(div);
    }
    root.appendChild(qDiv);
  }
}

function loadReading(pageNum,title) {
  reading_title = document.getElementById("lecture_reading_title");
  reading_title.innerHTML = title;
  page = document.getElementById("lecture_reading_content");
  key = lecture_course + "R" + pageNum;
  console.log("LoadReading: " + key);
  reading = lecture_course_readings[lecture_course + "R" + (pageNum)];
  if (!reading) {
    page.innerHTML = "Could not find reading for " + title;
  } else {
    page.innerHTML = reading;
  }
  //page.setAttribute("src", url);
}

function submitAnswers(re) {
  //TODO
  //Do stuff when answers to current questions are submitted
}



