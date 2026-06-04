console.log("=== Zadanie 8 ===");

const liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parzyste = liczby.filter(liczba => liczba % 2 === 0);

const kwadraty = liczby.map(liczba => liczba * liczba);

console.log("Tablica liczb:");
console.log(liczby);

console.log("Liczby parzyste:");
console.log(parzyste);

console.log("Kwadraty liczb:");
console.log(kwadraty);
