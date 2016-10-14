var lecture_active_page;

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
  
  
  setTitle(course);
  
  //TODO - Need some way to set this, probably a value in lecture_data.
  activePage = 1;
  
  
  setPagination(lecture_course_details[course]);
  loadLecturePage(lecture_active_page);
  
  
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
  loadLecturePage(pageNum);
}

function loadLecturePage(page) {
  lecture_title = lecture_course_details[document.getElementById("lecture_course_title").innerHTML + "L"][page];
  video_title = document.getElementById("lecture_video_title");  
  video_title.innerHTML = "Lecture " + page + ": " + lecture_title;
  document.getElementById("lecture_video").setAttribute("src", "https://www.youtube.com/embed/dQw4w9WgXcQ");
}

