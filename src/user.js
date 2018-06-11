import './user.css';

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


class Employee extends User {

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


export default class Developer extends Employee {

    constructor(firstName, lastName, salary = 0, department = "", manager = null) {
        super(firstName, lastName, salary, department);

        this._manager = null;
        this.manager = manager;

    }

    get manager() {
        return this._manager;
    }

    set manager(newManager) {

        if (newManager != this._manager) {

            if (newManager instanceof Manager || newManager === null) {

                if (this._manager != null) {
                    // если у рабочего есть manager
                    // то у старого manager, удаляем этого сотрудника
                    this._manager.deleteDeveloper(this);

                }

                // добавляем нового девелопера менеджеру
                this._manager = newManager;

                if (newManager != null) {
                    this._manager.developer(this);
                }
            }


        }

    }
}


class Manager extends Employee {

    constructor(firstName, lastName, salary = 0, department = "") {
        console.log('create manager');
        super(firstName, lastName, salary, department);

        this._developers = [];
        console.log('create manager');

    }

    set developer(newDeveloper) {
        if (newDeveloper instanceof Developer && this._developers.indexOf(newDeveloper) === -1) {
            this._developers.push(newDeveloper);

            newDeveloper.manager = this;
        }
    }

    get developers() {
        return this._developers;
    }

    deleteDeveloper(developer) {

        let index = this._developers.indexOf(developer);

        if (index != -1) {
            // Удаляем нашего сотрудника
            this._developers.splice(index, 1);

            // Теперь горемыка остался без менеджера((
            developer.manager = null;
        }
    }

    getContent() {

        let content = `<div class="manager">${this.firstName} ${this.lastName}: зп ${this._salary} р; отдел ${this._department};`;

        for (let i = 0; i < this._developers.length; i++) {
            content += this._developers[i].getContent();
        }

        return content += `</div>`;

    }

}
