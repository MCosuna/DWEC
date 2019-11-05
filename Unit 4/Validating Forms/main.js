function validar() {
  //***********Elementos que quiero recoger del imput***********************/
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("telefono").value;
  //****expresiones regulares que usaré para validar la información requerida******/
  var expRegApellidos = /^\w{3,}$/;
  var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  var expRegEmail = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  var expRegTelefono = /^(\+34|0034|34)?[6|7|9][0-9]{8}$/;
  //*****Aquí comienzo con los condicionales**************************************/
  if (!expRegNombre.test(nombre)) {
    document.getElementById("nombre").style.backgroundColor = "red";
  } else if (expRegNombre.test(nombre)) {
    document.getElementById("nombre").style.backgroundColor = "green";
  }

  if (!expRegApellidos.test(apellidos)) {
    document.getElementById("apellidos").style.backgroundColor = "red";
  } else if (expRegApellidos.test(apellidos)) {
    document.getElementById("apellidos").style.backgroundColor = "green";
  }

  if (!expRegEmail.test(email)) {
    document.getElementById("email").style.backgroundColor = "red";
  } else if (expRegEmail.test(email)) {
    document.getElementById("email").style.backgroundColor = "green";
  }

  if (!expRegTelefono.test(tel)) {
    document.getElementById("telefono").style.backgroundColor = "red";
  } else if (expRegTelefono.test(tel)) {
    document.getElementById("telefono").style.backgroundColor = "green";
  }
}
