
function inizializza(){

g_sorgente = document.getElementById("sorgente");
carica_esercizio();


g_soluzione=document.getElementById("soluzione");
//g_soluzione.style.display="none";
carica_soluzione();
// g_soluzione_stringa= file soluzione così come è



g_sol_utente=document.getElementById("sol_utente");


g_correzione=document.getElementById("correzione");

}


function carica_esercizio() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
		g_sorgente.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "dati\\ese01.html");
  xhttp.send();
};

function carica_soluzione() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
		g_soluzione_stringa = this.responseText;
		alert (g_soluzione_stringa);
		
		var n = g_soluzione_stringa;
		n = n.replace(/&/g, "&amp;");
		n = n.replace(/</g, "&lt;");
		n = n.replace(/>/g, "&gt;");
		n = n.replace(/"/g, "&quot;");

		g_soluzione.innerHTML = n;  
    }
  };
  xhttp.open("GET", "dati\\ese01.out");
  xhttp.send();
};

function verifica() {

var sol_ute_str = g_sol_utente.value;
var sol_str= g_soluzione_stringa);
var correzione_str = "";


 var ic=0;
 var is=0;
 var isu=0;
 var errori=0;
 
 while (    isu < sol_ute_str.Length() 
		 || is < sol_str.Length()   )
		 
 {	 csu= sol_ute_str.charAt(isu);
	 cs = sol_str.charAt(is);
	 if ( csu!=cs )
	    {	errori++	
		}
 
 
 
 }
 
} 
  

/*  non usate ancora
 * 
 * 
 * 
 * 
 */


            function funz() {
              tac=document.getElementById("ta").value
              pc=document.getElementById("p").innerHTML;
 
              alert(tac+"\r"+pc)
              
              var match = /\r|\n/.exec(tac);
                if (match) {
                        alert("tac ne ha !")
                    } 
                match = /\r|\n/.exec(pc);
                if (match) {
                        alert("pc ne ha !")
                    }
              loadDoc()

                match = /\r|\n/.exec(pc);
                if (match) {
                        alert("pc ne ha !")
                    }
              loadDoc()
              
              
            }
            

