console.log("=== Zadanie 11 ===");

const studenci = [
    { imie: "Anna", ocena: 5, obecny: true },
    { imie: "Jan", ocena: 3, obecny: false },
    { imie: "Ewa", ocena: 4, obecny: true },
    { imie: "Piotr", ocena: 5, obecny: true }
];

const obecniStudenci = studenci.filter(student => student.obecny === true);

const imionaStudentow = studenci.map(student => student.imie);

const studentZOcena5 = studenci.find(student => student.ocena === 5);

console.log("Wszyscy studenci:");
console.log([...studenci]);

console.log("Studenci obecni:");
console.log(obecniStudenci);

console.log("Imiona studentów:");
console.log(imionaStudentow);

console.log("Pierwszy student z oceną 5:");
console.log(studentZOcena5);
