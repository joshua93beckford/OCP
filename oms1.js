var c1 = new Audio('C3.wav');
var c2 = new Audio('E3.wav');
var c3 = new Audio('G3.wav');


var inter1 = 0;

var cl1 = function ()
{
    "use strict";
    
   var note= (Math.random()*4)+1;
   if(note <= 1){
    c1.currentTime = 0;
    c1.play();

   }
   else if(note <= 2){
    c2.currentTime = 0;
    c2.play();

   }
   else{
    c3.currentTime = 0;
    c3.play();

   }
inter1= 250;
setTimeout(cl1,inter1);
};
setTimeout(cl1,inter1);

