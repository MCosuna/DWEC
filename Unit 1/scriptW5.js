//4.10**************************************************************************
function  cabecera(){
    document.write("<h1>PRÁCTICA BUCLE FOR</h1> ");
    for (let i = 1; i <= 6; i++) {
        document.write("<h"+i+"> cabecera h"+i+"</h"+i+">");
    }
}


//4.11*************************************************************************
function cuatro(){
    var numCol = parseInt(prompt("Type the number of columns:"));
    var width = parseInt(prompt("Type width (ancho)"));
    var height = parseInt(prompt("Type height (alto)"));
    
            document.write("<table border='0px' width='200px' bgcolor='black'>");
            document.write("<tr bgcolor='white' height"+height+"px>");
            for (let i = 0; i < numCol ; i++) {
                document.write("<td width='"+width+"'>&nbsp;</td>");
    }
            document.write("</tr>");
            document.write("<table><br>");
            return numCol, width, height;
}

//4.12*************************************************************************
function cuatroDoce(){
    var numCol = parseInt(prompt("Type the number of columns:"));
    var width = parseInt(prompt("Type width (ancho)"));
    var height = parseInt(prompt("Type height (alto)"));
        document.write("<table border='0px' width='200px' bgcolor='black'>");
        
        document.write("<tr bgcolor='white' height"+height+"px>");
            for (let i = 0; i < numCol ; i++) {
                if(i%2==0){
                    document.write("<td bgcolor='white' width='"+width+"'>&nbsp;</td>");
                }else if(i!=0){
                    document.write("<td bgcolor='black' width='"+width+"'>&nbsp;</td>");
                }
               
            }
        document.write("</tr>");
        document.write("<table><br>");
}
//4.13*************************************************************************
// var cont=0;
// do {
// cont++;
// document.write("<h"+cont+" color='red'> cabecera h"+cont+"</h"+cont+">");
// }while(cont<6);
//------------------------------------------------------------------------------
//4.13*************************************************************************
function cuatroTrece(){
    var numCol = parseInt(prompt("Type the number of columns:"));
    var width = parseInt(prompt("Type width (ancho)"));
    var height = parseInt(prompt("Type height (alto)"));
    var cont=0;
        document.write("<table border=solid>");
            document.write("<tr width='"+width+"px'");
                while(cont<numCol){
                    cont++;
                   
                        document.write("<td bgcolor='white' height='"+height+"px' width='"+width+"px'></td>");
                }
            document.write("</tr></table>");
}


//4.14************************************************************************
function cuatroCatorce(){
    var numCol = parseInt(prompt("Type the number of columns:"));
    var width = parseInt(prompt("Type width (ancho)"));
    var height = parseInt(prompt("Type height (alto)"));
    var cont=0;
        document.write("<table border=solid>");
            document.write("<tr width='"+width+"px'");
                while(cont<numCol){
                    cont++;
                    if(cont%2==0){
                        document.write("<td bgcolor='white' height='"+height+"px' width='"+width+"px'></td>");
                    }else{
                        document.write("<td bgcolor='black' height='"+height+"px' width='"+width+"px'></td>");
                    }
                }
            document.write("</tr></table>");
}
//4.15*************************************************************************
function cuatroQuince(){
    var num = parseInt(prompt("The player 1: Type the number!"));
    var num_adivinar=parseInt(prompt("Type the number"));
        while(num!=num_adivinar){
            if(num_adivinar<num){
                alert("The number to guess is bigger than the number!");
            }else{
                alert("The number to guess is smaller than the number!");
            }
            var num_adivinar=parseInt(prompt("Type the number"));
        }
}
//4.16************************************************************************
function cuatroDieciseis(){
    var num = parseInt(prompt("The player 1: Type the number!"));
    var num_adivinar=parseInt(prompt("Type the number"));
        do{
            if(num_adivinar<num){
                alert("The number to guess is bigger than the number!");
            }else{
                alert("The number to guess is smaller than the number!");
            }
            var num_adivinar=parseInt(prompt("Type the number"));
        }while(num!=num_adivinar);
}
//4.17**********************************************************************
function tabla(){
    for (let i = 1; i < 10; i++) {
        document.write("<h3>Tabla del "+i+"</h3>");
      for(let j=1; j <10; j++){
        document.write("<h4>"+i+"x"+j+"="+i*j+"</h4>");
      }  
    }
}

//4.18******************************************************************** */
function forAnidado(){
    var filas=prompt("Introduce el numero de filas: ");    
    var columnas=prompt("Introduce el numero de columnas: ");  
    var height=prompt("Type the height (alto)");
    var width=prompt("Type the width (ancho)");
    document.write("<table border=1px; solid>");
    for (let i = 0; i < filas; i++) {
        document.write("<tr bgcolor='white' height='"+height+"'px width="+width+"px>");
            for(let j = 0; j < columnas; j++ ){
                document.write("<td height='"+height+"' width='"+width+"'px ></td>");
            }
    }
    document.write("</tr></table>");
}
//forAnidado();
//4.19**************************************************************************
function forAnidado2(){
    var filas=prompt("Introduce el numero de filas: ");    
    var columnas=prompt("Introduce el numero de columnas: ");  
    var height=prompt("Type the height (alto)");
    var width=prompt("Type the width (ancho)");
    document.write("<table border=1px; solid>");
    for (let i = 0; i < filas; i++) {
        if(i%2==0){
            document.write("<tr bgcolor='white' height='"+height+"'px width='"+width+"'px>");
        }else{
            document.write("<tr bgcolor='black' height='"+height+"'px width='"+width+"'>");
        }
        
            for(let j = 0; j < columnas; j++ ){
                document.write("<td height='"+height+"' width='"+width+"' ></td>");
            }
    }
    document.write("</tr></table>");
}
//forAnidado2();










