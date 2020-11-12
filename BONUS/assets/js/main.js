var Saluti = "Benvenuto in questo scarsissimo generatore di password";
alert(Saluti);

alert("Inserisci i dati richiesti, grazie");

var UserName = prompt("Dimmi il tuo nome.");

var UserSurname = prompt("Qual è il tuo cognome?");

var UserColor = prompt("Ora dimmi il tuo colore preferito, per favore.");

var UserPassword = UserName + UserSurname + UserColor + "20";

alert("Grazie, elaboro la richiesta. Premi ok");

document.getElementById("Pass").innerHTML = UserPassword;
document.getElementById("Name").innerHTML = "Ciao " + UserName;
