//Example course: Pages, HighestUnlocked
lecture_course_details = {};
lecture_course_details['TEST123'] = [15,5]; //Testing
lecture_course_details['COMP425'] = [10,1];

//Number of titles should equal Pages above
lecture_course_titles = {};
lecture_course_titles['TEST123'] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];

//Each course should have an array of questions for each lecture page, the key should be:
//     <course_name>E<lecture_number>     
//  e.g. as below TEST123E1 for lecture 1 questions of TEST123
lecture_course_questions = {};
lecture_course_questions['TEST123E5'] = [
  "Example Question 1",
  "Example Question 2",
  "Example Question 3",
  "Example Question 4",
  "Example Question 5",
  "Example Question 6"
];

// Course + "R" + lecture_number
lecture_course_readings = {};
lecture_course_readings['TEST123R5'] = [
  "An example reading section."
];
