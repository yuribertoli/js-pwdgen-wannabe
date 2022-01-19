const nome = prompt("Qual'è il tuo nome?");
const cognome = prompt("Qual'è il tuo cognome?");
const colore = prompt("Qual'è il tuo colore preferito?");
let chiave = nome + cognome + colore + "19";
document.getElementById("password").innerHTML = "La tua password è: " + chiave;


let actualYear = 2022;
let yearOfBirthQuestion = prompt("In quale anno sei nato?");
yearOfBirthQuestion = parseInt(yearOfBirthQuestion);
let yourAge = actualYear - yearOfBirthQuestion;
document.getElementById("età").innerHTML = "Hai " + yourAge + " anni vero?";


const yourself = 1;
let familyMembers = prompt("Da quante altre persone è composta la tua famiglia oltre a te?");
familyMembers = parseInt(familyMembers);
let totalFamily = yourself + familyMembers;
document.getElementById("family-members").innerHTML = `In famiglia siete ${totalFamily} persone`;


console.log(yourAge);
console.log(totalFamily);

