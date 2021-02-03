// const contain = [];
const students = [
    { id: 21, name: 'Korim Mia' },
    { id: 31, name: 'Joni Mia' },
    { id: 45, name: 'Soni Mia' },
    { id: 24, name: 'Koni Mia' }
];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element;
//     contain.push(result);
// }

const names = students.map( s => s.name);
const idS = students.map(s => s.id);
const bigger = students.filter(s => s.id >40);
const bigger1 = students.find(s => s.id >40);
console.log(bigger);