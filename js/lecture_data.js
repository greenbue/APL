//Example course: Pages, HighestUnlocked
lecture_course_details = {};
lecture_course_details['TEST123'] = [15,5]; //Testing
lecture_course_details['COMP425'] = [10,4];
lecture_course_details['SWEN425'] = [4,1];

//Number of titles should equal Pages above
lecture_course_titles = {};
lecture_course_titles['TEST123'] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
lecture_course_titles['SWEN425'] = ["Factory Method", "Strategy", "Decorator", "Composite", "Proxy"];
lecture_course_titles['COMP425'] = ["Title1","Title2","Title3","Propositional Logic","Computational Logic","Title6","Title7","Title8","Title9","Title10"];

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
lecture_course_questions['SWEN425E1'] = [
  "How does Factory Method promote loosely coupled code?",
  "What happens when a system has an explosion of Strategy objects?"
];

lecture_course_questions['SWEN425E2'] = [
  "How does the composite pattern help to consolidate system-wide conditional logic?",
  "Would you use the composite pattern if you did not have a part-whole hierarchy?"
];

lecture_course_questions['COMP425E4'] = [
  "How would you implement propositional logic theorem prover?",
  "What method is required to solve the N Queen problem?"
];
lecture_course_questions['COMP425E5'] = [
  "Name three different computational logic abbreviations.",
  "What are the differences between the Jape and Isabelle/HOL formula proving methods?"
];



lecture_course_answers = {};
lecture_course_answers['TEST123A5'] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6"
];

lecture_course_answers['SWEN425A1'] = [
 "yes",
 "no"
]

lecture_course_answers['SWEN425A2'] = [
 "yes",
 "yes"
]

lecture_course_answers['COMP425A4'] = [
 "no",
 "no"
];
lecture_course_answers['COMP425A5'] = [
 "no",
 "yes"
];


// Course + "R" + lecture_number
lecture_course_readings = {};
lecture_course_readings['TEST123R5'] = [
  "An example reading section."
];

lecture_course_readings['SWEN425R1'] = [
  "Over the course of my school days and professional years I've come to recognize and appreciate the study group as one of the best instruments for improving one's understanding of anything complex or profound."
];

lecture_course_readings['SWEN425R2'] = [
  "What I call a study group is inspired by the classical method of seminars conducted at schools like Oxford and St John's College."
];
lecture_course_readings['COMP425R4'] = [
  "Consider the following assertions, which express membership and ordering properties of arrays that may be required in verifying search and sorting algorithms:"
];
lecture_course_readings['COMP425R5'] = [
  "An a is understood to be an array, i, j and k are natural numbers, and x is an element of the same type as array a, which c an be assumed to be a natural number."
];

