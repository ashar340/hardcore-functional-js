"use strict";

var students = [
	{ id: 260, name: "Kyle" },
	{ id: 729, name: "Susan" },
	{ id: 42, name: "Frank" },
	{ id: 74, name: "Jessica" },
	{ id: 491, name: "Ally" }
];
//Task 1 - redcued the surface area of impurity
function getStudentsByName(students) {
    //Slicing is declarative
    students = students.slice();
      (function sortStudentsByName() {
        // Don't modify this function
            students.sort(function byName(s1,s2){
                if (s1.name < s2.name) return -1;
                else if (s1.name > s2.name) return 1;
                else return 0;
            });
            return students;
        })(students);
        return students;
	}
	
 //Task 2 took the impurity outside 
 function getStudentsByID(currStudents) { 
     //Step 1 : Making copy of what's going to be modified
    var origStudents = students.slice();

     //Step 2 : Setting up the environment of what we want it to be (shallow copy in this case)

     //this bubbled up to local and not global for sortStudentsByID()
     students = currStudents;
     
     //Step 3 : Calling the impure function and 
     //Step 4 :  Capturing the changed state
	 var newStudents = sortStudentsByID();
	 
	 //Step 5 : Reassigning the changed to to my local var
	 students = origStudents;

     return newStudents;
 }

 // Adapter Function
 function sortStudentsByID() {
	// Don't modify this function
	students.sort(function byID(s1,s2){
		return s1.id - s2.id;
	});
	return students;
}

var studentsTest1 = getStudentsByName(students);
console.log(studentsTest1[0].name === "Ally");
console.log(studentsTest1[1].name === "Frank");
console.log(studentsTest1[2].name === "Jessica");
console.log(studentsTest1[3].name === "Kyle");
console.log(studentsTest1[4].name === "Susan");

var studentsTest2 = getStudentsByID(students);
console.log(studentsTest2[0].id === 42);
console.log(studentsTest2[1].id === 74);
console.log(studentsTest2[2].id === 260);
console.log(studentsTest2[3].id === 491);
console.log(studentsTest2[4].id === 729);

var studentsTest3 = students;

console.log(studentsTest3[0].id === 260 && studentsTest3[0].name === "Kyle");
console.log(studentsTest3[1].id === 729 && studentsTest3[1].name === "Susan");
console.log(studentsTest3[2].id === 42 && studentsTest3[2].name === "Frank");
console.log(studentsTest3[3].id === 74 && studentsTest3[3].name === "Jessica");
console.log(studentsTest3[4].id === 491 && studentsTest3[4].name === "Ally");
