alert("WARNING! YOU ARE NOW ENTERING International Territory"); 
var count = 0;
var cup = 1;
var decimal = 0;

function myRolex() 
{    	
    "use strict";
	
	var d = new Date();
	
    document.getElementById("demo").innerHTML = d.toLocaleTimeString(); 
	count = Math.pow(2,cup);
	decimal = Math.pow(10,cup);
	cup++;
	document.getElementById("JT1").innerHTML = '$'+ count.toString();
	document.getElementById("JT2").innerHTML = '$'+ decimal.toString();
    document.getElementById("JT3").innerHTML = '$ Electronic Money';
    document.getElementById("JT4").innerHTML = '$ My Money';
	document.getElementById("JT5").innerHTML = '$ Free Money'; 
	document.getElementById("JT6").innerHTML = '$ Bank01 Money';
	
}	
var Rolex = setInterval(function(){"use strict";myRolex();},1000);
