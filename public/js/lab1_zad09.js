console.log("=== Zadanie 9 ===");

const produkty = [
    { id: 1, nazwa: "Laptop", cena: 3500 },
    { id: 2, nazwa: "Mysz", cena: 80 },
    { id: 3, nazwa: "Klawiatura", cena: 150 },
    { id: 4, nazwa: "Pendrive", cena: 45 }
];

const produktPoId = produkty.find(produkt => produkt.id === 3);
console.log("Produkt o id 3:");
console.log(produktPoId);

const produktTanszyNiz100 = produkty.find(produkt => produkt.cena < 100);
console.log("Pierwszy produkt tańszy niż 100:");
console.log(produktTanszyNiz100);
