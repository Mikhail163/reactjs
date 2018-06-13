import './user.css';

import Employee from './employee';
import Manager from './manager';

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
                    this._manager.developer = this;
                }
            }


        }

    }
}
