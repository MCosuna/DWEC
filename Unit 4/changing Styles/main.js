function temaNormal() {
    document.body.style.backgroundColor = " #FFEF7E";
    document.body.style.fontSize = "18px";
    document.getElementById("azul").style.backgroundColor = "blue";
    document.getElementById("links").style.borderBottom = " solid blue";
    document.getElementById("links").style.borderRight = " solid blue";
    document.getElementById("links").style.backgroundColor = "#DCFFF6";
    document.getElementById("marco").style.border = "solid black";
    document.getElementById("marco").style.backgroundColor = "yellow";
    document.getElementById("marco").style.width = "500px";
    document.getElementById("azul").style.height = "500px";
    document.getElementById("azul").style.width = "65px";
    document.getElementById("azul2").style.paddingLeft = "70px";
    document.getElementById("azul2").style.marginTop = "-500px";
    document.getElementById("negrita").style.fontWeight = "bold";
    document.getElementById("marco").style.paddingLeft = "15px";
    document.getElementById("texto").style.fontSize = "18px";

}
function izquierda() {
    document.getElementById("texto").style.textAlign = "right";
}
function justificar() {
    document.getElementById("texto").style.textAlign = "justify";
}
function aumentarTexto() {
    document.getElementById("texto").style.fontSize = "30px";
}

function decrementarTexto() {
    document.getElementById("texto").style.fontSize = "18px";
}

function temaMinimalista() {
    document.body.style.backgroundColor = "white";
    document.getElementById("links").style.backgroundColor = "white";
    document.getElementById("links").style.borderBottom = "white ";
    document.getElementById("links").style.borderBottom = " white";
    document.getElementById("links").style.backgroundColor = "white";
    document.getElementById("marco").style.border = "none white";
    document.getElementById("marco").style.width = "600px";
    document.getElementById("marco").style.backgroundColor = "white";
    document.getElementById("azul").style.height = "";
    document.getElementById("azul").style.width = "";
    document.getElementById("azul2").style.paddingLeft = "";
    document.getElementById("azul2").style.marginTop = "";
    document.getElementById("negrita").style.visibility = "hidden";


}