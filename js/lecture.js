var lecture_active_page;
var lecture_course;
var lecture_submit_current;

var lecture_submitted = {};
var animated = false;

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
    a.addEventListener('click',changeLecturePageFromButton);
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


function changeLecturePageFromButton() {
	className = this.parentNode.className;
   if (className && className.includes("disabled")) { return; }
   pageNum = Number(this.innerHTML);
   changeLecturePage(pageNum);
}

//Pages are lecture 1, lecture 2 etc
function changeLecturePage(id) {
  var pageNum = 0;
  if (id) {
  	 pageNum = id;
  	 current = document.getElementById("lecture_page_button" + pageNum);
  	 if (current) {
      current.className += " active";
  	 } else {
      //End of course??
      return;
  	 }
  }
  
  
  
  if (pageNum == lecture_active_page) { return; }
  console.log("Change to lecture " + pageNum);
  old = document.getElementById("lecture_page_button" + lecture_active_page);
  old.className = old.className.replace(" active", "");
  lecture_active_page = pageNum;
  
  titles = lecture_course_titles[lecture_course];
  questions = lecture_course_questions[lecture_course + "E" + pageNum];
  loadLecturePage(pageNum,lecture_course_titles[lecture_course]);
  loadQuestions(pageNum,titles,questions);
  loadReading(pageNum,"Lecture " + lecture_active_page + ": " + titles[(pageNum-1)]);
  next = document.getElementById("lecture_next");
  if (!next.className.includes("hidden")) {
    next.className += " hidden";
    next.setAttribute("onClick", "");
  }
  //lecture_submitted = false;
  lecture_submit_current = 0;
  removeScore();
}

function loadLecturePage(page,titles) {
  lecture_title = titles[page-1];

  video_title = document.getElementById("lecture_video_title");
  video_title.innerHTML = "Lecture " + page + ": " + lecture_title;
  //document.getElementById("lecture_video").setAttribute("src", "https://www.youtube.com/embed/dQw4w9WgXcQ");
}

function loadQuestions(page,titles,questionData) {
  qTitle = document.getElementById("lecture_questions_title");
  root = document.getElementById("question_pane");
  qDiv = document.getElementById("qDiv");
  last = document.getElementById("lecture_submit");
  if (!last.className.includes("hidden")) {
    last.className += " hidden";
  }
  if (qDiv) {
    root.removeChild(qDiv);
  }
  if (!questionData || !questionData.constructor === Array) {
    qTitle.innerHTML = "Could not find question data for Lecture " + page + ": " + titles[page-1];
  } else {
    if (lecture_submitted[lecture_active_page-1]) {
  	   if (!lecture_submit_current) {
  	     qTitle.innerHTML = "You got " + (lecture_submitted[lecture_active_page-1]-1) + " correct for this exercise.";
  	   }
  	
  	  return;
    }  	
  	 last.className = last.className.replace(" hidden", "");
  	 
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
    root.insertBefore(qDiv,last);
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
}

function submitAnswers() {
  if (lecture_submitted[lecture_active_page-1]) {
  	return;
  }
  target_answers = lecture_course_answers[lecture_course + "A" + lecture_active_page];
  answers = [];
  correct = 0;
  for (i = 0; i < target_answers.length; i++) {
    answers[i] = document.getElementById("A" + (i+1));
    
    if (answers[i].value.toUpperCase() == target_answers[i].toUpperCase()) {
      answers[i].className += " correct-answer";
      correct++;
    } else {
      answers[i].className += " wrong-answer";
      a = document.createElement("input");
      a.setAttribute("type", "text");
      a.setAttribute("disabled", "true");
      a.className = "form-control no-text-cursor";
      a.value = "The correct answer: " + target_answers[i];
      answers[i].parentNode.appendChild(a);
    }
  }

	
  root = document.getElementById("question_pane");
  p = document.createElement("p");
  p.setAttribute("id","lecture_score");
  ptxt = document.createTextNode("You got " + correct + " out of " + answers.length + " correct.");    
  p.appendChild(ptxt);
  p.className = "text-center";
  root.insertBefore(p,document.getElementById("lecture_submit"));
  if (correct >= 0.75 * answers.length) {
    p.className += " correct-answer";
  } else if (correct <= 0.25 * answers.length) {
  	 p.className += " wrong-answer";
  }
  
  
  
  lecture_submitted[lecture_active_page-1] = (correct + 1);


  //Check achievs + do stuff
  if (correct == answers.length && !animated) {
    animated = true;
    animateAchievement();
    
  }


  //Enable next lecture
  next = document.getElementById("lecture_next");
  next.className = next.className.replace(" hidden", "");
  next.setAttribute("onClick", "nextLecture()");
  next_page = document.getElementById("lecture_page_button" + (lecture_active_page+1));
  next_page.className = next_page.className.replace("disabled", "");
  next_page.setAttribute("title", "");
  lecture_submit_current = 1;

}

function removeScore() {
  root = document.getElementById("question_pane");
  if (root) {
  	 score = document.getElementById("lecture_score");
  	 if (score) {
  	 	root.removeChild(score);
    }
  }
}


function nextLecture() {
  removeScore();
	
	
  changeLecturePage((lecture_active_page + 1));
}

function animateAchievement() {
  popup = document.getElementById("lecture_achievement");
  anim = setInterval(move,1);
  pos = -150;
  down = false;
  count = 0;
  function move() {
    if (pos == -151) {
      clearInterval(anim);
    } else if (pos  == 0) {
      if (count < 1000) {
        count++;
        return;
      } else {
        down = true;
      }
      down = true;
    }
    
    if (!down) {
      pos++;
    } else {
      pos--;
    }
    popup.style.bottom = pos + "px";
  }
}

