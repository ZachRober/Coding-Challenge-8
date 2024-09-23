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
        return total;
    }
}
class Manager extends Employee{
    Constructor(name,salary,position,department,bonus){
        super(name,salary,position,department);//super calls the parent class
        this.bonus = bonus;
    }
    getDetails(){
console.log(`${this.name} makes ${this.salary} working as a ${this.position} in the ${this.department} department. Bonus is ${this.bonus}`);
        return;  
    }
}
Department.prototype.calculateTotalSalaryWithBonus=function(deptName){
let oldTotal = this.getDepartmentSalary(deptName);//whatever dept we want returns dept total wo/bonus
let newTotal = oldTotal + this.bonus;//add the bonus after
console.log(`Total with bonus is ${newTotal}`);
}








const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");

const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

engineering.addEmployee(alice);
engineering.addEmployee(charlie);

marketing.addEmployee(bob);
marketing.addEmployee(diana);

console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);
