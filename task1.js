
const students = [
  { name: 'RAGU', marks: [78, 85, 90] },
  { name: 'SRIRAM', marks: [65, 70, 60] },
  { name: 'YUVAKATHIR', marks: [88, 92, 95] },
  { name: 'GIRIPANDI', marks: [55, 60, 58] },
  { name: 'SHANKAR', marks: [80, 75, 70] }
]
const studentsWithTotal = students.map(student => ({
  name: student.name,
  total: student.marks.reduce((sum, mark) => sum + mark, 0)
}));
console.log('Total marks for each student:', studentsWithTotal);

const highScorers = studentsWithTotal.filter(student => student.total > 200);
console.log('Students with more than 200 marks:', highScorers);

const topperTotal = studentsWithTotal.reduce((max, student) => student.total > max ? student.total : max, 0);
console.log('Class topper\'s total marks:', topperTotal);
