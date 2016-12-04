
function inizializza(){

g_sorgente = document.getElementById("sorgente");
carica_esercizio();

carica_soluzione();
// g_soluzione_stringa= file soluzione così come è

g_sol_utente=document.getElementById("sol_utente");


}


function carica_esercizio() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
		g_sorgente.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "dati/ese01.html");
  xhttp.send();
};

function carica_soluzione() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
		g_soluzione_stringa = this.responseText;
		
    }
  };
  xhttp.open("GET", "dati/ese01.out");
  xhttp.send();
};

function verifica() {


var sol_ute_intxt= g_sol_utente.innerText;

if (sol_ute_intxt===g_soluzione_stringa)
	alert ("ok")
else alert ("NOOOOOO");

 
} 
