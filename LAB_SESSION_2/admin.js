var students = document.getElementById("Students");
var staff = document.getElementById("Staff");
var addStudentForm = document.getElementById("AddStudent");
var addStaffForm = document.getElementById("AddStaff");

function showStudents(){
	hideForms();
	students.style.display = "block";
	staff.style.display = "none";
}

function showStaff(){
	hideForms();
	staff.style.display = "block";
	students.style.display = "none";
}

function onAddStudent(){
	addStudentForm.style.display = "block";
}

function addStudent(){
	hideForms();
	return false;
}

function onAddStaff(){
	addStaffForm.style.display = "block";
}

function addStaff(){
	hideForms();
	return false;
}

function hideForms(){
	addStudentForm.style.display = "none";
	addStaffForm.style.display = "none";
}

function hideEverything(){
	students.style.display = "none";
	staff.style.display = "none";
	hideForms();
}

hideEverything();