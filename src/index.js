import Developer from './user';
import Manager from './user';


const manager = new Manager('Варфаламей', 'Плибеевич', 250000, 'отдел разработки');
const dev1 = new Developer('Вася', 'Петров', 74000, 'отдел разработки', manager);
const dev2 = new Developer('Петя', 'Иванов', 32000, 'отдел разработки', manager);
const dev3 = new Developer('Михаил', 'Сидоров', 50000, 'отдел разработки', manager);


dev1.render("developer");

manager.render("manager");


console.log('Hello world');
