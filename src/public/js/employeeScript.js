

window.onload = main();


function main(){
    document.querySelector("#btnSearchByCurp").addEventListener("click",searchEmployeeByCurp);
   // createEmployeeTable(employeesList[0],"tbEmployeeInfo");
   //deleteAllTableRows("tbEmployeeInfo");
}


//***** */


/*********** search employee by curp, using an input*********************/
//returns a boolean 

function searchEmployeeByCurp(){
    let compareCurp= document.querySelector("#searchByCurp");
    let employeeFound = false;
    let employeeIndex=0;
    //console.log("did click");
    employeesList.forEach( function(element,index,array){
        if(compareCurp.value === element.curp){
            employeeFound = true;
            employeeIndex = index;
            console.log("element found"+employeeIndex);
        } 
    })

    if (employeeFound === false){
         console.log("element not found")
         alert("element not found");
         deleteAllTableRows("tbEmployeeInfo");
    } else {
        createEmployeeTable(employeesList[employeeIndex],"tbEmployeeInfo");

    }
   

}


/***************** creating a table with the employee class */

function createEmployeeTable(employee,tableID){

    deleteAllTableRows(tableID);
    let table = document.querySelector("#"+tableID);
    let row = table.insertRow();
    row.innerHTML = '<tH colspan="2">'+employee.name+' '+employee.fLastName+' '+employee.mLastName+'</th>'; //name, fLastName, mLastName, rfc, curp,phone
    row = table.insertRow();
    row.innerHTML = '<td>RFC: </td>'+'<td>'+employee.rfc+'</td>';
    row = table.insertRow();
    row.innerHTML = '<td>CURP: </td>'+'<td>'+employee.curp+'</td>';
    row = table.insertRow();
    row.innerHTML = '<td>PHONE: </td>'+'<td>'+employee.phone+'</td>';

    
    
}
/******* fn for delating all the rows in a table, but leaving the table */

function deleteAllTableRows(domID){
    let table = document.querySelector("#"+domID);
    let iMax = table.rows.length;
    table.deleteCaption();
    //console.log( table.rows);

    for(let i = 0 ; i<=iMax; i++ ){
        table.deleteRow(table.rows.length-1);
    }
}