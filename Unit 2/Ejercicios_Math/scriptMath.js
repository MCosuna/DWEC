//*******************One******************************************************************/
function uno(){
    var num= Math.random();
    alert("The number random is..."+num);
}

function uno_uno(){
   var num =  Math.round(Math.random() * (201 - 100) + 100);
   alert("The number is..."+num);

}

function uno_dos(max, min){
    var min= parseInt(prompt("Insert a number:"));
    var max=parseInt(prompt("Insert a bigger number: "));
    var num = Math.round(Math.random()*(max-min)+min);
    alert("The number is..."+num);
}
//*****Five******************************************************************************/
function segundoGrado(){
    var a = Number.parseFloat(prompt("Insert a: "));
    var b = Number.parseFloat(prompt("Insert b: "));
    var c = Number.parseFloat(prompt("Insert c: "));
    var raiz =Math.round((Math.sqrt(b*2)-(4*a*c)));
    var cal1 =Math.round(-b+raiz)/2*a;
    var cal2 = (-b-raiz)/2*a;
    alert("The solution is: "+cal1);
    alert("The solution is: "+cal2);
// x=(-b±√ (b2-4ac))/(2a) 
}
//*****Seven*****************************************************************************/
function tabla(){
   // var num = Number.parseFloat(prompt("Type a number:"));
   var numbers = ['4', '3', '1','8']
   var num = 20;
    document.write("<table border='1px' height='200px' width='200px'><tr>");
    document.write("<td>"+numbers.sort()+"<td>");
    document.write(""+Math.asin(num)+"</tr>");
    document.write("</table>");
}
//****Eight*****************************************************************************/
function ocho(){
    var img = parseInt(Math.random()*(4-1)+1);
    document.write("<img src='./img/"+img+".jpg'>");
}

