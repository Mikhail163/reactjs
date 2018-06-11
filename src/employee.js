class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        alert(`Hi, ${this.firstName} ${this.lastName}`);
    }

    render(parentId) {
        let content = document.getElementById(parentId);
        content.innerHTML = this.getContent();
    }

    getContent() {
        return `<div class="user">${this.firstName} ${this.lastName}</div>`;
    }
}


export default class Employee extends User {

    constructor(firstName, lastName, salary = 0, department = "") {

        super(firstName, lastName);

        this._salary = salary;
        this._department = department;

    }

    displayInfo() {
        super.displayInfo();
        console.log(this.salary);
        console.log(this.department);

    }

    get salary() {
        return this._salary;
    }

    set salary(newSalary) {
        this._salary = newSalary;
    }

    get department() {
        return this._department;
    }

    set department(newDepartment) {
        this._department = newDepartment;
    }

    getContent() {
        return `<div class="user">${this.firstName} ${this.lastName}: зп ${this._salary} р; отдел ${this._department};</div>`;
    }

}
