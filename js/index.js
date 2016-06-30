var Colors = [
	"Red",
	"Orange",
	"Yellow",
	"Green",
	"Blue",
	"Indigo",
	"Violet"];

function pickColor(){
	var color1 = Math.floor(Math.random()*Colors.length);
	var color2 = Math.floor(Math.random()*Colors.length);

	document.getElementById('mixcolors').innerHTML = "<h1><a id='c1'>"+Colors[color1]+"</a> and <a id='c2' >"+Colors[color2]+"</a></h1>";

	document.getElementById('c1').style.color = Colors[color1];
	document.getElementById('c2').style.color = Colors[color2];

}