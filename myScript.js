
/*  non usate ancora
 * 
 * 
 * 
 * 
 */


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("p").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "soluzione.txt");
  xhttp.send();
};
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
