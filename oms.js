var c1 = new Audio('LEX Hat(1).wav');
var c2 = new Audio('LEX Clap(2).wav');
var c5 = new Audio('808.wav');
var c6 = new Audio('LexLugerFX.wav');

var inter1 = 0;
var inter2 = 0;
var inter5 = 0;
var inter6 = 0;

var cl1 = function ()
{
	"use strict";
c1.currentTime = 0;
c1.play();
inter1= (Math.random()*500)+32;
setTimeout(cl1,inter1);
};
setTimeout(cl1,inter1);

var cl2 = function ()
{
	"use strict";
c2.currentTime= 0;
c2.play();
inter2= (Math.random()*2000)+250;
setTimeout(cl2,inter2);
};
setTimeout(cl2,inter2);

var cl5 = function ()
{
	"use strict";
c5.currentTime= 0;
c5.play();
inter5= (Math.random()*2000)+500;
setTimeout(cl5,inter5);
};
setTimeout(cl5,inter5);

var cl6 = function ()
{
	"use strict";
c6.currentTime= 0;
c6.play();
inter6= (Math.random()*10000)+15000;
setTimeout(cl6,inter6);
};
setTimeout(cl6,inter6);
