function invertirCadena() {
  var cadena = prompt("introduce una cadena:");
  document.write(cadena.split("").reverse().join("") + "<br>");
}
//invertirCadena();
function invertirPalabra() {
  var palabra = prompt("Introduce una palabra:");
  palabra = palabra.split(" ");
  for (let i = 0; i < palabra.length; i++) {
    document.write(palabra[i].split("").reverse().join("") + "<br>");
  }
}

// invertirPalabra();

function palabraMasLarga(texto) {
  var texto = prompt("Introduce una cadena:");
  var palabra = texto.split(" ");
  var resultado = "";
  for (var i = 0; i < palabra.length; i++) {
    if (palabra[i].length > resultado.length) {
      resultado = palabra[i];
    }
  }
  return resultado;
}
// alert(palabraMasLarga(texto));

//****************************************************************************** */
// función que elimine los caracteres repetidos de una cadena de
// texto, incluidos los blancos.
function caracteresRepetidos() {
  var texto = "cadena cadena cadena uuuu";
  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) == texto.charAt(i + 1)) {
      var repetida = texto.replace("");
    }
  }
  alert(repetida);
}
// caracteresRepetidos();

