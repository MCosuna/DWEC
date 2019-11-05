function paresImpares() {
  var arr = [100];
  var arr1 = [];
  var arr2 = [];
  for (let i = 0; i < 100; i++) {
    num = Math.round(Math.random() * (1000 - 1) + 1);
    if (num % 2 == 0) {
      arr1[i] = num;
    } else {
      arr2[i] = num;
    }
  }
  arr = arr1.concat(arr2);
  console.log(arr);
}
//paresImpares();

function siete() {
  var arr = [];
  for (let i = 0; i < 10; i++) {
    arr.unshift(0); //añade
  }
  console.log(arr);
}
//siete();

function siete_1_2() {
  var arr = [];
  var final = 0;
  for (let i = 0; i < 10; i++) {
    arr.unshift(0); //añade
    arr.push(1); //añade al final del array
  }

  document.write(arr.join("-"));
}
//siete_1_2();

function ocho() {
  var cont = 0;
  var cont2 = 0;
  for (let i = 0; i < 5000; i++) {
    var dado1 = Math.round(Math.random() * (6 - 1) + 1);
    var dado2 = Math.round(Math.random() * (6 - 1) + 1);
    var suma = dado1 + dado2;
    if (suma == 7) {
      cont++;
    } else {
      cont2++;
    }
  }
  document.write("<h4>El número mas frecuente ha salido: " + cont + ", Saliendo como menos frecuentes: " + cont2 + "</h4>");
}
//ocho();
