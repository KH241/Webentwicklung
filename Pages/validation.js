const adminName = "admin";
const adminPw = "admin";

const staffName = "staff";
const staffPw = "staff";

var count = 0;

function disableLogin() {
	let x = document.getElementById("StaffLogin");
	for (i = 0; i < x.length; i++) {
		x.elements[i].disabled = true;
	}
	
	let y = document.getElementById("AdminLogin");
	for (i = 0; i < y.length; i++) {
		y.elements[i].disabled = true;
	}
}

function validateStaffLogin(){
	form = document.getElementById("StaffLogin");
	if (form.Username.value == staffName && form.Password.value == staffPw) { return true; }
	else { wrongLogin(); return false; }
}

function validateAdminLogin(){
	form = document.getElementById("AdminLogin");
	if (form.Username.value == adminName && form.Password.value == adminPw) { return true; }
	else { wrongLogin(); return false; }
}

function wrongLogin(){
	count += 1;
	if (count > 2) { disableLogin(); }
	window.alert("Login Credentials Incorrect");
}