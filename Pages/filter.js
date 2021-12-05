var table = document.getElementById("studentTable");
var department = document.getElementById("DepartmentSelect");
var semester = document.getElementById("SemesterSelect");
var tr = table.getElementsByTagName("tr");


function filterDepartment(){
    for(i = 0; i < tr.length; i++){
        d = tr[i].getElementsByTagName("td")[3];
        if(d){    
            if(department.value != "All"){
                if(department.value == d.innerHTML){
                    tr[i].style.display = "";
                }else{
                    tr[i].style.display = "none";
                }
            }else{
                tr[i].style.display = "";
            }
        }
    }
}

function filterSemester(){

}

