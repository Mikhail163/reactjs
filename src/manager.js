import './user.css';

import Employee from './employee';
import Developer from './developer';

export default class Manager extends Employee {

    constructor(firstName, lastName, salary = 0, department = "") {

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

        let content = `<div class="manager">${this.firstName} ${this.lastName}: зп ${this._salary} р; ${this._department}; <br>в подчинении:`;

        for (let i = 0; i < this._developers.length; i++) {
            content += this._developers[i].getContent();
        }

        return content += `</div>`;

    }

}
