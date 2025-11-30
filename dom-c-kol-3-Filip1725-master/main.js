//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 
export function main(dtoIn) {
  //TODO code
  //let dtoOut = exMain(dtoIn);
  return dtoOut;
}
*/
// 4x polia mien a priezvisiek(primeni)
const menoMuz = ["Jan", "Petr", "Jiří", "Martin", "Tomáš", "Jakub", "Pavel", "Marek", "David", "Václav",
  "Filip", "Lukáš", "Michal", "Ondřej", "Karel", "Roman", "Radek", "Jaroslav", "Daniel", "Zdeněk",
  "Vojtěch", "Miroslav", "Kamil", "Jindřich", "Milan", "František", "Aleš", "Stanislav", "Bohumil",
  "Rostislav", "Vít", "Libor", "Šimon", "Dusan", "Andrej", "Ladislav", "Adam", "Františka", "Hana",
  "Milan", "Marek", "Petr", "Jakub", "Václav", "Jindřich", "Vít", "Karel", "Miroslav", "Libor"];

const menoZena = ["Eva", "Jana", "Kateřina", "Tereza", "Lucie", "Petra", "Veronika", "Markéta", "Barbora", "Simona",
  "Zuzana", "Michaela", "Monika", "Dagmar", "Alena", "Martina", "Ivana", "Klára", "Radmila", "Irena",
  "Adéla", "Veronika", "Iveta", "Jitka", "Marcela", "Lada", "Renáta", "Jarmila", "Alžběta", "Karolína",
  "Marta", "Ludmila", "Nikola", "Hana", "Klara", "Sylvie", "Kamila", "Johana", "Barbora", "Andrea",
  "Monika", "Lucie", "Pavla", "Alice", "Eva", "Kristýna", "Michaela", "Zuzana", "Tereza", "Petra"];

const priezviskoMuz = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kovář", "Vacek", "Horák", "Jirásek",
  "Kučera", "Kolář", "Bartoš", "Petrášek", "Fiala", "Kříž", "Vondra", "Mach", "Sýkora", "Řezníček",
  "Krejčí", "Šťastný", "Křížek", "Valenta", "Pavlík", "Matoušek", "Malý", "Němec", "Holub", "Žák",
  "Tesař", "Holeček", "Kubík", "Smejkal", "Vágner", "Kalina", "Zima", "Hruška", "Zelenka", "Jakubec",
  "Vácha", "Vlach", "Ryba", "Šimek", "Suk", "Petržela", "Pokorný", "Březina", "Pokorná"];

const priezviskoZena = ["Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kovářová", "Vaceková", "Horáková", "Jirásková",
  "Kučerová", "Kolářová", "Bartošová", "Petrášková", "Fialová", "Křížová", "Vondrová", "Machová", "Sýkorová", "Řezníčková",
  "Krejčová", "Šťastná", "Křížková", "Valentová", "Pavlíková", "Matoušková", "Malá", "Němcová", "Holubová", "Žáková",
  "Tesařová", "Holečková", "Kubíková", "Smejkalová", "Vágnerová", "Kalinová", "Zimová", "Hrušková", "Zelenková", "Jakubcová",
  "Váchová", "Vlachová", "Rybová", "Šimková", "Suková", "Petrželová", "Pokorná", "Březinová", "Pokorná"];

//tuto sa generuje jedno z 50 muzskych mien a priezvisiek(primeni)
function generujMenoMuz(menoZMuz, priezviskoMuz) {
  const randomMeno = Math.floor(Math.random() * 50);
  const randomPriezvisko = Math.floor(Math.random() * 50);

  const meno = menoMuz[randomMeno];
  const priezvisko = priezviskoMuz[randomPriezvisko];

  console.log(meno, priezvisko);
}

// ten isty kod ako vyssie len pre zenu
function generujMenoZena(menoZena, priezviskoZena) {
  const randomMeno = Math.floor(Math.random() * 50);
  const randomPriezvisko = Math.floor(Math.random() * 50);

  const meno = menoZena[randomMeno];
  const priezvisko = priezviskoZena[randomPriezvisko];

  console.log(meno, priezvisko);
}

// funkcia generuje jedno zo styroch cisel
function generujCisloPrace() {
  const casPrace = [10, 20, 30, 40];
  const randomCas = Math.floor(Math.random() * casPrace.length);
  return casPrace[randomCas];

}
console.log("workload:", generujCisloPrace());

// funkcia generuje bud cislo 0 alebo 1
function generujCislo() {
  return Math.random() < 0.5 ? 0 : 1;
}
// ked je generovane cislo 0 tak je to muz, inak je to zena
if (generujCislo() === 0) {
  console.log("name: ");
  generujMenoMuz(menoMuz, priezviskoMuz);
  console.log("gender: male ");
} else {
  console.log("name: ");
  (generujMenoZena(menoZena, priezviskoZena));
  console.log("gender: female ");
}


// funkcia generuje cisla pre datum narodenia
function generujNarodenie() {

  const pociatocnyRok = 1965;
  const konecnyRok = 2007;
  const rok = Math.floor(Math.random() * (konecnyRok - pociatocnyRok + 1)) + pociatocnyRok;
  const mesiac = Math.floor(Math.random() * 12) + 1;
  const den = Math.floor(Math.random() * 28) + 1;
  const hodina = Math.floor(Math.random() * 24);
  const minuta = Math.floor(Math.random() * 60);
  const sekunda = Math.floor(Math.random() * 60);
  const milisekunda = Math.floor(Math.random() * 1000);
  const nahodnyDatum = new Date(rok, mesiac, den, hodina, minuta, sekunda, milisekunda);
  return nahodnyDatum.toISOString();
}
console.log("birthday:", generujNarodenie());

