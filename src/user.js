export default class User {
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
