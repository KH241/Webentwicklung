var students = document.getElementById("Students");
var staff = document.getElementById("Staff");
var addStudentForm = document.getElementById("AddStudent");
var addStaffForm = document.getElementById("AddStaff");
var normalStyle = "flex";


//Adding Data
function addStudent(){
	let approved = true;

	let form = document.getElementById("AddStudent");
	let date = new Date(form.DOB.value)

	if(calculateAge(date) >= 17 && calculateAge(date) <= 60){
		hideForms();
		students.style.display = normalStyle;
		return true;
	}else{
		alert("Invalid DOB: Age must be between 17 and 60");
		return false;
	}
}

function calculateAge(birthday) {
	var ageDifMs = Date.now() - birthday;
	var ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

function addStaff(){
	hideForms();
	staff.style.display = normalStyle;
	return true;
}


//UI - Hiding Form/Table
function showStudents(){
	hideForms();
	students.style.display = normalStyle;
	staff.style.display = "none";
}

function showStaff(){
	hideForms();
	staff.style.display = normalStyle;
	students.style.display = "none";
}

function onAddStudent(){
	hideContainers();
	addStudentForm.style.display = "block";
}

function onAddStaff(){
	hideContainers();
	addStaffForm.style.display = "block";
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

//Filtering the Table



//Startup
hideEverything();

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
document.getElementsByName("DOB")[0].setAttribute('max', yesterday.toISOString().split('T')[0]);



