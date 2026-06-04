console.log("=== Zadanie 13 ===");

const produkty = [
    { id: 1, nazwa: "Laptop", cena: 3500, dostepny: true },
    { id: 2, nazwa: "Mysz", cena: 80, dostepny: false },
    { id: 3, nazwa: "Monitor", cena: 900, dostepny: true }
];

function dodajProdukt(produkty, nowyProdukt) {
    produkty.push(nowyProdukt);
}

function znajdzProduktPoId(produkty, id) {
    return produkty.find(produkt => produkt.id === id);
}

function pobierzDostepneProdukty(produkty) {
    return produkty.filter(produkt => produkt.dostepny === true);
}

// sprawdzenie działania funkcji
dodajProdukt(produkty, {
    id: 4,
    nazwa: "Klawiatura",
    cena: 150,
    dostepny: true
});

console.log("Wszystkie produkty:");
console.log(produkty);

console.log("Produkt o id 2:");
console.log(znajdzProduktPoId(produkty, 2));

console.log("Dostępne produkty:");
console.log(pobierzDostepneProdukty(produkty));
