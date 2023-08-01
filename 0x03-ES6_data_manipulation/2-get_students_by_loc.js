export default function getStudentsByLocation(getListStudents, city) {
	return students.filter((students) => students.location === city);

}
