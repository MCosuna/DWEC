class tres_en_raya {

    // tablero
    // tiempo
    constructor() {
        //declaramos las variables
        this._turno = 1;
        this.vaciarTablero();
    }

    //getter
    get tablero() {
        return this._tablero.slice();
    }

    //setter
    set tablero(tablero) {
        this._tablero=tablero;
    }

    //inicio
    inicio(){
       this._turno = 1;
        this.vaciarTablero();
    }

    jugada(fila,col){
        if(this._turno==1){
            if(this.jugadorAselecciona(fila,col)){
                this._turno=2;

            }
        }
        else{
            if(this.jugadorBselecciona(fila,col)){
                this._turno=1;

            }
        }
        if(this.tresEnRaya()){
            return 0;
        }
        else{
            return this._turno;
        }
    }

    tresEnRaya(){
        for (let i = 0; i < 3; i++) {
            var fila = this.rayaEnFila(i);
            if(fila == true){
                return true;
            }
        }
        for (let i = 0; i < 3; i++) {
            var col = this.rayaEnColumna(i);
            if(col == true){
                return true;
            }
        }
        if (this.rayaenDiagonal()){
            return true
        }
        else{
            return false;
        }
        
    }

    rayaenDiagonal(){
        return false
    }

    rayaEnFila(fila){
        if(this._tablero[fila][0]!=0){
            if(this._tablero[fila][0]==this.tablero[fila][1] && this._tablero[fila][1]==this._tablero[fila][2]){
                return true;
            }
            else{
                return false;
            }
        }else {
            return false;
        }
    }

    rayaEnColumna(col){
        if(this._tablero[0][col]!=0){
            if(this._tablero[0][col]==this.tablero[1][col] && this._tablero[1][col]==this._tablero[2][col]){
                return true;
            }
            else{
                return false;
            }
        }else {
            return false;
        }
    }

    vaciarTablero(){
      //  this.tablero = new Array();
        //this.tiempo = setTimeout(this.terminar, 5000);//Para controlar el tiempo.
        //Incluir contador para el tablero ... 
        


        // for (let x = 0; x < 3; x++) {
        //     this._tablero[x] = [];
        //     for (let y = 0; y < 3; y++) {
        //         this._tablero[x][y] = 0;
        //     }
        // }

    }

    //Jugador A
    // jugadorAselecciona(fila, col){
    //     if( this._tablero[fila][col]==0){
    //         this._tablero[fila][col]=1
    //         return true;
    //     }else{
    //         return false;
    //     }
        
    // }

    // //Jugador B
    // jugadorBselecciona(fila, col){
    //     if( this._tablero[fila][col]==0){
    //         this._tablero[fila][col]=2
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    // terminar() {
        
    // }

}

// var juego = new tres_en_raya();
// juego.inicio();
// juego.jugadorAselecciona(0,1);
// juego.jugadorBselecciona(1,0);
// console.log(juego.tablero);
