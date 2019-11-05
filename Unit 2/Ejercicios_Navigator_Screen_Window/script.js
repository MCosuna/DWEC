//*Muestra, maquetada en una tabla HTML toda la información que puedas extraer mediante JavaScript del navegador cliente.
document.write("<table border='1px' width='250px' height='250px' > <tr>Information... ");
document.write("<td>Navigator:</td>");
document.write("<td>-"+clientInformation.platform+"<br>-"+clientInformation.language+"<br>-"+clientInformation.product+"<br>-"+clientInformation.hardwareConcurrency+"</td>");
document.write("<tr><td>Window:</td><td>-"+window.content+"<br>-"+window.history+"<br></tr>");
document.write("<tr><td>Navigator:</td><td>-"+navigator.appName+"<br>-"+navigator.appVersion+"</td></tr>");
document.write("<tr><td>Screen: </td><td>-"+screen.pixelDepth+"<br>-"+screen.width+", anchura total de pantalla en pixel</td></tr>");
document.write("</td></tr></tr></table>");
//href-->	La URL completa de la página actual
//pixelDepth--> profundidad de color

