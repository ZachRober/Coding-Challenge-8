class Employee {
    Constructor(name,salary,position,department){
        this.name=name;
        this.salary=salary;
        this.position=position;
        this.department=department;//object constructor
    }
        getDetails(){
console.log(`${this.name} makes ${this.salary} working as a ${this.position} in the ${this.department} department`);
            return;
        }
    }
class Department{
    Constructor(name){
    this.name = name;
    this.employees = [];//empty array to add objects to
    }
    addEmployee(employee){
        this.employees.push(employee)//method that pushes to employees array
    }
    getDepartmentSalary(deptName){
        let total = 0;
        this.name = deptName;
        this.employees.forEach(x=>total+=x.salary);
    }
}
