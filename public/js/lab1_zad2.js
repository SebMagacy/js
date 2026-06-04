console.log("=== Zadanie 2 ===");

let wiek = 20;
let czyMaLegitymacje = true;

if (wiek >= 18) {
    console.log("Pełnoletni");
} else {
    console.log("Niepełnoletni");
}

if (wiek >= 18 && czyMaLegitymacje === true) {
    console.log("Osoba jest pełnoletnia i ma legitymację.");
} else if (wiek >= 18 && czyMaLegitymacje === false) {
    console.log("Osoba jest pełnoletnia, ale nie ma legitymacji.");
} else {
    console.log("Osoba jest niepełnoletnia.");
}