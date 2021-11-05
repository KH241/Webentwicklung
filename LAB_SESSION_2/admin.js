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
	hideContainers();
	addStudentForm.style.display = "block";
}

function addStudent(){
	hideForms();
	students.style.display = "block";
	return false;
}

function onAddStaff(){
	hideContainers();
	addStaffForm.style.display = "block";
}

function addStaff(){
	hideForms();
	staff.style.display = "block";
	return false;
}

function hideForms(){
	addStudentForm.style.display = "none";
	addStaffForm.style.display = "none";
}

function hideContainers(){
	students.style.display = "none";
	staff.style.display = "none";
}

function hideEverything(){
	hideContainers();
	hideForms();
}

hideEverything();