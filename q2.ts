// define interface for Student object
/* Your code here */
interface Student{
  name: string;
  score: number;
}

// assign interface/type to the function definition properly
function findTopNames(students: Student[]): string[] {
  /* Your code here */
  const topScores = students.filter(student => student.score > 8);
  return topScores.map(student => student.name);
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;


//รหัส นศ.:660610803

//ชื่อ-สกุล :สุริโย หลุ่มโสม