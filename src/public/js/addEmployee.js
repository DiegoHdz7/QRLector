window.onload = main;


function main (){
    document.querySelector("#formAddEmployee").addEventListener('submit', addEmployee);

    Employee.updateEmployeesList();
}

function addEmployee(evt){
    let name= document.querySelector("#name");
    let fLastName= document.querySelector("#fLastName");
    let mLastName= document.querySelector("#mLastName");
    let rfc= document.querySelector("#rfc");
    let curp= document.querySelector("#curp");
    let phone= document.querySelector("#phone");
    let input = document.querySelector("input");
    

    alert("can submit");
    Employee.addToEmployeeList(name.value,fLastName.value,mLastName.value, rfc.value,curp.value, phone.value);
    console.log(employeesList);
    localStorage.EmployeeList = JSON.stringify(employeesList);
    
    //return false; for not reloading the page
    
    
}



