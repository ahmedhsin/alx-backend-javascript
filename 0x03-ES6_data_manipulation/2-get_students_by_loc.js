export default function getStudentsByLocation(students, location) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((obj) => obj.location === location);
}
