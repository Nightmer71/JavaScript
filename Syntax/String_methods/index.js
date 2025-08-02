// string methods = allows the manipulation of strings

// userName = userName.trim // ha előfordul whitespace a string-be akkor azokat kitörli

let userName = "Nightmer";

console.log(userName.charAt(0)); // visszaadja az n-edik indexen lévő értéket
console.log(userName.indexOf("h")); // visszadja a megadott érték első előfordulásának az indexét
console.log(userName.lastIndexOf("h")); // visszadja a megadott érték utolsó előfordulásának az indexét
console.log(userName.length); // visszaadja a string tipusú változó hosszát

userName = userName.toUpperCase(); // megváltoztatja az egész stringet nagybetűre
userName = userName.toLowerCase(); // megváltoztatja az egész stringet kisbetűre
userName = userName.repeat(3); // megadott n számszor megismétli a változó tartalmát

// let result = userName.startsWith("n"); // megnézi, hogy a megadott értékkel kezdődik-e a string változó (kis és nagybetű érzékeny)
// let result = userName.endsWith("r"); // megnézi, hogy a megadott értékkel végződik-e a string változó (kis és nagybetű érzékeny)
let result = userName.includes("m"); // megnézi, hogy a string változó tartalmazza-e a megadott értéket (kis és nagybetű érzékeny)
console.log(result);

let phoneNumber = "+36-30-123-4567";
phoneNumber = phoneNumber.replaceAll("-", ""); // első beviteli érték megmondja hogy mit akarunk átírni a változóban, a második érték pedig megmondja hogy mi kerüljön az első érték helyére
// phoneNumber = phoneNumber.padStart(15, "0"); // első beviteli érték megmondja, hogy milyen hosszú legyen a változó, a második érték pedig megmondja hogy mivel töltse fel a változó hosszát, hogy elérjük a kívánt hosszt. (Az elejére szúrja be az értéket amit megadunk)
phoneNumber = phoneNumber.padEnd(15, "0"); // első beviteli érték megmondja, hogy milyen hosszú legyen a változó, a második érték pedig megmondja hogy mivel töltse fel a változó hosszát, hogy elérjük a kívánt hosszt. (Az végére szúrja be az értéket amit megadunk)
console.log(phoneNumber);




