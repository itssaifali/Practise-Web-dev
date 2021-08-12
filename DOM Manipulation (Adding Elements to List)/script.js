document.getElementById("heading").innerHTML="Monthly Essentials";
document.getElementById("sbheading").innerHTML="List for Grocery Shopping";

var gros = ['Detergent','Soap','Hand Wash','Toothpaste', 'Shampoo'];
var ul = document.getElementById("lst");

for (var i = 0; i < gros.length; i++) {
    var gro = gros[i];
    var li = document.createElement('li');
    li.setAttribute("class","food");
    li.appendChild(document.createTextNode(gro));
    ul.appendChild(li);
}