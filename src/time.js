import './time.css';

export default class Time {
    constructor(clickId) {
        this.clickarea = document.getElementById(clickId);

        this.clickarea.addEventListener("click", () => {
            this.changeTime();
        })
    }

    changeTime() {
        this.clickarea.innerHTML = new Date();
    }
}
