console.log("=== Zadanie 12 ===");

const appState = {
    czyZalogowany: true,
    uzytkownik: "Anna",
    koszyk: ["Laptop", "Mysz"]
};

// Powitanie użytkownika
if (appState.czyZalogowany) {
    console.log(`Witaj ${appState.uzytkownik}!`);
} else {
    console.log("Użytkownik nie jest zalogowany.");
}

// Sprawdzenie koszyka
if (appState.koszyk.length > 0) {
    console.log(`Liczba produktów w koszyku: ${appState.koszyk.length}`);
} else {
    console.log("Koszyk jest pusty.");
}