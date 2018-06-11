import Employee from './employee';
import Developer from './developer';
import Manager from './manager';
import Time from './time';



const manager = new Manager('Варфаламей', 'Плибеевич', 250000, 'отдел разработки');
const dev1 = new Developer('Вася', 'Петров', 74000, 'отдел разработки', manager);
const dev2 = new Developer('Петя', 'Иванов', 32000, 'отдел разработки', manager);
const dev3 = new Developer('Михаил', 'Сидоров', 50000, 'отдел разработки', manager);


dev1.render("developer"); // задание 1 и 2

manager.render("manager"); // задание 3 и 4

const time = new Time("time"); // задание 5


console.log('Hello world');
