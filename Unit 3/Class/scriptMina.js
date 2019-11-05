class buscaminas{
    constructor(){//Un array con dos posiciones,
// y en cada una de las posiciones creamos otro array que contiene 8 posiciones cada uno.
       this.tablero = new Array(8); 
       for (let i = 0; i < this.tablero.length; i++) {
          this.tablero[i] = new Array(8);
           
       }
       this.generarBomba();
    }

    //get tablero
    // get tablero(){
    //     this.tablero = tablero;
    // }

    // //set tablero
    // tablero(fila, col){
    //     return this.tablero;
    // }

    //Insertamos la nomba en el tablero
     generarBomba() { 
        var fil = 0 ;
        var col = 0 ;
        for (let i = 0; i < 10; i++) {
            fil = Math.round(Math.random()*(8-1));
            col = Math.round(Math.random()*(8-1)); 
            this.tablero[fil][col] = "BUM"; 
        }
    }

    //Alrededor de la bomba
    dondeEstaBomba(){
    for (let i = 0; i < this.tablero.length; i++) {
        for (let x = 0; x < this.tablero.length; x++) {
            if(this.tablero[i][j] == "BUM"){
               var pos = [i][j];
            }
            
        }
    }
    }




}

var busca = new buscaminas();
console.log(busca.tablero);
document.write(busca.tablero);


