const adminName = "admin";
const adminPw = "";//"admin";

const staffName = "staff";
const staffPw = "";//"staff";

var count = 0;

function disableLogin() {
	var x = document.getElementById("login");
	for (i = 0; i < x.length; i++) {
		x.elements[i].disabled = true;
	}
}

function validateStaffLogin(){
	form = document.getElementById("StaffLogin");
	if (form.Username.value == staffName && form.Password.value == staffPw) { return true; }
	else { return wrongLogin(); }
}

function validateAdminLogin(){
	form = document.getElementById("AdminLogin");
	if (form.Username.value == adminName && form.Password.value == adminPw) { return true; }
	else { return wrongLogin(); }
}

function wrongLogin(){
	count += 1;
	if (count > 2) { disableLogin(); }
	window.alert("Login Credentials Incorrect");
	return false;
}