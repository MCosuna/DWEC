var date = new Date();
//**1....***************************************************/
function uno() {
  alert("The year is " + date.getFullYear());
  alert("The month is: " + date.toLocaleDateString("default", {month: "long"}));
  alert("The day is: " + date.getUTCDate());
  alert("What hour is it? " + date.getHours());
  alert("and minutes... " + date.getMinutes());
  alert("and seconds... " + date.getSeconds());
}

function dos() {
  var fechaHoy = date.toLocaleDateString();
  alert(fechaHoy);
  var fecha85 = new Date();
  fecha85.setDate(date.getDate() + 85);
  alert(fecha85);
  var fecha187 = new Date();
  fecha187.setDate(date.getDate() - 187);
  alert(fecha187);
}

var time = 60;

function tres() {
  document.write(time + "<br>");
  time--;
  if (time >= 0) {
    setTimeout(tres, 1000);
  } else {
    alert("Error");
  }
}


function cinco() {
  var hours = new Date();
  var minutes = new Date();
  var seconds = new Date();
  document.write(hours.getHours() + ":" + minutes.getMinutes() + ":" + seconds.getSeconds() + "<br>");
  setTimeout(cinco, 1000);
}
