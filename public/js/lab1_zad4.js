console.log("=== Zadanie 4 ===");

const student = {
    imie: "Sebastian",
    wiek: 25,
    kierunek: "Informatyka"
};

console.table(student);

student.aktywny = true;
student.wiek = 26;

console.table(student);
