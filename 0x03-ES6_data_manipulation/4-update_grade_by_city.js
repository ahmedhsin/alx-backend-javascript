export default function updateStudentGradeByCity(students, location, grads) {
  if (!Array.isArray(students) && !Array.isArray(grads)) {
    return [];
  }
  const filteredStudents = students.filter((obj) => obj.location === location);
  const studetsWithGrades = filteredStudents.map((student) => {
    let grade = grads.filter((g) => g.studentId === student.id);
    if (grade.length === 0) grade = 'N/A';
    else grade = grade[0].grade;
    // eslint-disable-next-line no-param-reassign
    student.grade = grade;
    return student;
  });
  return studetsWithGrades;
}
