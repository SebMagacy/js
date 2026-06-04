console.log("=== Zadanie 3 ===");

const owoce = ["jabłko", "banan", "gruszka", "śliwka", "pomarańcza"];

console.log("Pierwszy element:", owoce[0]);

console.log("Ostatni element:", owoce[owoce.length - 1]);

console.log("Długość tablicy:", owoce.length);

console.log("Wszystkie owoce:");

let wynik = "";

for (let i = 0; i < owoce.length; i++) {
    wynik += owoce[i];

    if (i < owoce.length - 1) {
        wynik += ", ";
    }
}

console.log(wynik + ".");