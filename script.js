// Ciao ragazzi,
// esercizio di oggi: (insicurissimo) password generator
// nome repo: js-pwdgen-wannabe
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21
const nameUser = prompt("Whats your name?");
const surnameUser = prompt("Whats your surname?");
const colorUser = prompt("Whats your favorite color?");
const numberUser = 25;

//const passwordUser = nameUser + surnameUser + colorUser + numberUser;
// document.getElementById("answer").innerHTML = passwordUser;

const passwordUser = `${nameUser}${surnameUser}${colorUser}${numberUser}`;
document.getElementById("answer").innerHTML = passwordUser;
console.log(passwordUser);
