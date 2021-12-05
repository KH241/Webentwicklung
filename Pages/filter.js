var table = document.getElementById("studentTable");
var department = document.getElementById("DepartmentSelect");
var semester = document.getElementById("SemesterSelect");
var tr = table.getElementsByTagName("tr");
var summer = [4,5,6,7,8,9];

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
    for(i = 0; i < tr.length; i++){
        d = tr[i].getElementsByTagName("td")[5];
        if(d){    
            if(semester.value != "All"){
                s = parseInt(d.innerHTML.split("-")[1]);
                console.log(s);

                if(summer.includes(s)){ s = "Summer" }
                else { s = "Winter" }

                if(semester.value == s){
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

