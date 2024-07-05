// assign interface/type to the function definition properly
function findTopNames(students) {
    /* Your code here */
    var topScores = students.filter(function (student) { return student.score > 8; });
    return topScores.map(function (student) { return student.name; });
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
//รหัส นศ.:660610803
//ชื่อ-สกุล :สุริโย หลุ่มโสม
