console.log("Hello world!");
var muutuja = "Muutuja";
console.log(muutuja);
var number = 1;
console.log(number);
console.log("Hello "+muutuja);
var massiiv=["Tere",24];
massiiv.push("Tere2");
console.log(massiiv);

var kalad={type:"ahven", size:10, color:"hall"};
console.log(kalad);
console.log(kalad.size+2);

var display="Hello world!";
function funktsioon() {
 console.log("funkstioon tootab")
 document.getElementById("display").style.color = "red";
 document.getElementById("suur").style.background = "black";
 document.getElementById("suur").style.height = "300px";

};