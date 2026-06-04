console.log("=== Zadanie 10 ===");

const kursy = [
    { id: 1, nazwa: "JavaScript", aktywny: true },
    { id: 2, nazwa: "PHP", aktywny: false },
    { id: 3, nazwa: "Laravel", aktywny: true },
    { id: 4, nazwa: "HTML", aktywny: true }
];

console.log("Wszystkie kursy:");
console.log(kursy);

const aktywneKursy = kursy.filter(kurs => kurs.aktywny === true);
console.log("Aktywne kursy:");
console.log(aktywneKursy);

const nazwyKursow = kursy.map(kurs => kurs.nazwa);
console.log("Nazwy kursów:");
console.log(nazwyKursow);

const znalezionyKurs = kursy.find(kurs => kurs.id === 1);
console.log("Kurs o podanym id:");
console.log(znalezionyKurs);

kursy.forEach(kurs => {
    const status = kurs.aktywny ? "aktywny" : "nieaktywny";
    console.log(`Kurs ${kurs.nazwa} jest ${status}.`);
});
