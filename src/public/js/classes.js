
/*******************************Class Employee**************************************/
class Employee {
    constructor(name, fLastName, mLastName, rfc, curp,phone){
        this.name=name;
        this.fLastName=fLastName;
        this.mLastName=mLastName;
        this.rfc=rfc;
        this.curp=curp;
        this.phone=phone;

        Employee.employeesNumber++;
    }

    static getEmployeesNumber(){
        return Employee.employeesNumber;
    }

    static addToEmployeeList(name, fLastName, mLastName, rfc, curp,phone){
        employeesList.push(new Employee(name, fLastName, mLastName, rfc, curp,phone));

    }

    static updateEmployeesList(){
        if(localStorage.EmployeeList!=undefined){
            employeesList = JSON.parse(localStorage.EmployeeList);
            localStorage.EmployeeList=JSON.stringify(employeesList);
        }
    }

    static updateLocalEmployeesList(){
        if(employeesList!=undefined && employeesList!=null){
            localStorage.EmployeeList=JSON.stringify(employeesList);
        }
    }
}

Employee.employeesNumber = 0;

var employeesList = [
    new Employee("diego saul","hernandez","gonzalez","goch139585a","12345",9992719413),
    new Employee("gustavo","maldonado","gonzalez","sdfhjsdfkj","123456",9992808080),
    new Employee("manual","aviles","ferraz","sdfsdg","1234567",999280580),
    new Employee("patricio","estrella","cuadrada","sdgtgtd","1234568",9998963080),
    new Employee("roberto","pantalones","cuadrados","segtgtd","12345689",9992848547)
]


/********************************Class Manager***********************************/

class Manager{
        constructor(usrName, fLastName, mLastName, password){
            this.usrName = usrName;
            this.fLastName = fLastName;
            this.mLastName=mLastName;
            this.password=password;
            Manager.managersNumber++;
        }

}

Manager.managersNumber=0;

var managersList= [
    new Manager("Diego","Hernandez","Gonzalez","123456"),
    new Manager("Ragnar","Lothbrok","none","1234567"),
    new Manager("Bjorn","Ragnar","Son","12345678"),
    new Manager("Lagherta","Hernandez","none","12345678a"),
    new Manager("Naruto","Uzumaki","Hyuga","123456789"),

];




