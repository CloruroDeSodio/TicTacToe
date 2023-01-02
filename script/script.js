
let Casilla1 = document.getElementById("1A");
let Casilla2 = document.getElementById("2A");
let Casilla3 = document.getElementById("3A");
let Casillb4 = document.getElementById("4B");
let Casillb5 = document.getElementById("5B");
let Casillb6 = document.getElementById("6B");
let Casillc7 = document.getElementById("7C");
let Casillc8 = document.getElementById("8C");
let Casillc9 = document.getElementById("9C");



//Cuadritos

let cuadrito1 = false
let cuadrito2 = false
let cuadrito3 = false
let cuadrito4 = false
let cuadrito5 = false
let cuadrito6 = false
let cuadrito7 = false
let cuadrito8 = false
let cuadrito9 = false





let jugador= false //jugador

let bloqueador1 =false;//bloqueador primero


let posicionX1= false //Posiciones primeras

let posicionO1 =  false


//mnecanicas intento


var unode3 = false
var dosde3 = false
var tresde3= false

var unode32 = false
var dosde32 = false
var tresde32= false

var unode33 = false
var dosde33 = false
var tresde33= false

var unode34 = false
var dosde34 = false
var tresde34= false

var unode35 = false
var dosde35 = false
var tresde35= false

var unode36= false
var dosde36 = false
var tresde36= false

var unode37= false
var dosde37 = false
var tresde37= false

var unode38= false
var dosde38 = false
var tresde38= false

var unode39= false
var dosde39 = false
var tresde39= false

var unode391= false
var dosde391 = false
var tresde391= false

var unode392= false
var dosde392 = false
var tresde392= false

var unode393= false
var dosde393= false
var tresde393=false

var unode394= false
var dosde394= false
var tresde394=false


var unode395= false
var dosde395= false
var tresde395=false

var unode396= false
var dosde396= false
var tresde396=false

var unode397= false
var dosde397= false
var tresde397=false

// PRIMERO
Casilla1.onclick=function(){
//bloqueador que de solo halla un click
if(bloqueador1 == true ){
    return
}

else if ( bloqueador1 == false){
    cuadrito1 = true
//funcion del O y la X
        if ( jugador == false){
        Casilla1.src="images/x.png";
        jugador =true
        // bloqueador
        bloqueador1=true
        // X
        posicionX1= true
        }
        else if ( jugador == true){
        Casilla1.src="images/o.png"
        jugador= false
        // bloqueado
        bloqueador1=true
        // O
        posicionO1 =true
        }


}            // Mecanicas
        // 3 en raya arriba de X
    if(cuadrito1 == true && posicionX1== true){
    unode3 = true
    console.log(unode3)
}
if(unode3 ==true && dosde3==true&& tresde3==true){
    document.getElementById('srry').textContent = "Ganaste";
    }

        // 3 en raya arriba  de O
        if(cuadrito1 == true && posicionO1== true){
            unode32 = true
            console.log(unode32)}
    if(unode32 ==true && dosde32==true&& tresde32==true){
        document.getElementById('srry').textContent = "Perdiste";
    }
        // 3 en raya izquierda de X
            if(cuadrito1 == true &&  posicionX1 == true){
                unode33=true
                console.log(unode33)
            }
            if(unode33==true&&   dosde33==true   &&  tresde33==true){
        document.getElementById('srry').textContent = "Ganaste";
            }
            // 3 en raya izquierda de O
                if(cuadrito1 == true &&  posicionO1 == true){
                    unode34=true
                    console.log(unode34)
                }
                if(unode34==true&&   dosde34==true   &&  tresde34==true){
            document.getElementById('srry').textContent = "Perdiste";
                }
                            // 3 en raya en x de X
                            if(cuadrito1 == true &&  posicionX1 == true){
                                unode394=true
                                console.log(unode394)
                            }
                            if(unode394==true&&   dosde394==true   &&  tresde394==true){
                        document.getElementById('srry').textContent = "Ganaste";
                            }
                            // 3 en raya en x de O
                            if(cuadrito1 == true &&  posicionO1 == true){
                                unode395=true
                                console.log(unode395)
                            }
                            if(unode395==true &&   dosde395==true   &&  tresde395==true){
                        document.getElementById('srry').textContent = "Perdiste";
                            }
                        }


// Segundo
let bloqueador2 =false;//bloqueador segundo

let posicionX2= false//Posiciones segundarias

let posicionO2 =  false


Casilla2.onclick=function(){
    //bloqueador que de solo halla un click
    if(bloqueador2 == true ){

    }

    else if ( bloqueador2 == false){
        cuadrito2 = true
    //funcion del O y la X
            if ( jugador == false){
            Casilla2.src="images/x.png";
            jugador =true
            // bloqueador
            bloqueador2=true
            // X
            posicionX2= true
            }
            else if ( jugador == true){
            Casilla2.src="images/o.png"
            jugador= false
            // bloqueado
            bloqueador2=true
            // O
            posicionO2 =true
            }
    }
           // Mecanicas
        //    3 en raya arriba x
        if(cuadrito2 == true && posicionX2== true){
            dosde3 = true
            console.log(dosde3)
        }
        if(unode3 ==true && dosde3==true&& tresde3==true){
            document.getElementById('srry').textContent = "Ganaste";
            }
            else{}
        // 3 en raya arriba  de O
        if(cuadrito2 == true && posicionO2== true){
            dosde32 = true
            console.log(unode32)}

        if(unode32 ==true && dosde32==true&& tresde32==true){
        document.getElementById('srry').textContent = "Perdiste";
        }
        //    3 en raya a linea central con X
    if(cuadrito2 == true && posicionX2== true){
        unode39 = true
        console.log(unode39)
        }
        if(unode39 ==true && dosde39==true&& tresde39==true){
            document.getElementById('srry').textContent = "Ganaste";
            }
            //3 en raya a linea central con O
            if(cuadrito2 == true && posicionO2== true){
                unode391 = true
                console.log(unode391)
                }
                if(unode391 ==true && dosde391==true&& tresde391==true){
                    document.getElementById('srry').textContent = "Perdiste";
                    }
    }


// Tercero
let bloqueador3 =false;//bloqueador tercero

let posicionX3= false//Posiciones tercera

let posicionO3 =  false


Casilla3.onclick=function(){
    //bloqueador que de solo halla un click
    if(bloqueador3 == true ){
        return
    }

    else if ( bloqueador3 == false){
        cuadrito3 = true
    //funcion del O y la X
            if ( jugador == false){
            Casilla3.src="images/x.png";
            jugador =true
            // bloqueador
            bloqueador3=true
            // X
            posicionX3= true
            }
            else if ( jugador == true){
            Casilla3.src="images/o.png"
            jugador= false
            // bloqueado
            bloqueador3=true
            // O
            posicionO3 =true
            }
    }
   // Mecanicas
//    3 en raya arriba con x
    if(cuadrito3 == true && posicionX3== true){
    tresde3 = true
    console.log(tresde3)
    }
    if(unode3 ==true && dosde3==true&& tresde3==true){
        document.getElementById('srry').textContent = "Ganaste";
        }
                // 3 en raya arriba  de O
                if(cuadrito3 == true && posicionO3== true){
                    tresde32 = true
                    console.log(unode32)}
                    else{}

        if(unode32 ==true && dosde32==true&& tresde32==true){
        document.getElementById('srry').textContent = "Perdistes";
        }
    //    3 en raya ala derecha con x
    if(cuadrito3 == true && posicionX3== true){
        unode37 = true
        console.log(unode37)
        }
        if(unode37 ==true && dosde37==true&& tresde37==true){
            document.getElementById('srry').textContent = "Ganaste";
            }
                //    3 en raya a abajo con O
    if(cuadrito3 == true && posicionO3== true){
        unode38 = true
        console.log(unode38)
        }
        if(unode38 ==true && dosde38==true&& tresde38==true){
            document.getElementById('srry').textContent = "Perdiste";
            }
            //3 en raya en x  con X
    if(cuadrito3 == true && posicionX3== true){
        unode396 = true
        console.log(unode396)
        }
        if(unode396 ==true && dosde396==true&& tresde396==true){
            document.getElementById('srry').textContent = "Ganaste";
            }
            //3 en raya en x  con O
    if(cuadrito3 == true && posicionO3== true){
        unode397 = true
        console.log(unode397)
        }
        if(unode397 ==true && dosde397==true&& tresde397==true){
            document.getElementById('srry').textContent = "Perdiste";
            }
    }



// Cuarto
let bloqueador4 =false;//bloqueador Cuarto

let posicionX4= false//Posiciones Cuarta

let posicionO4 =  false


Casillb4.onclick=function(){
    //bloqueador que de solo halla un click
    if(bloqueador4 == true ){
        return
    }

    else if ( bloqueador4 == false){
        cuadrito4 = true
    //funcion del O y la X
            if ( jugador == false){
            Casillb4.src="images/x.png";
            jugador =true
            // bloqueador
            bloqueador4=true
            // X
            posicionX4= true
            }
            else if ( jugador == true){
            Casillb4.src="images/o.png"
            jugador= false
            // bloqueado
            bloqueador4=true
            // O
            posicionO4 =true
            }
    }
    // Mecanicas
                // 3 en raya izquierda de X
                if(cuadrito4 == true &&  posicionX4 == true){
                    dosde33=true
                    console.log(dosde33)
                }
                if(unode33==true&&   dosde33==true   &&  tresde33==true){
            document.getElementById('srry').textContent = "Ganaste";
                }
                            // 3 en raya izquierda de O
                            if(cuadrito4 == true &&  posicionO4 == true){
                                dosde34=true
                                console.log(dosde34)
                            }
                            if(unode34==true&&   dosde34==true   &&  tresde34==true){
                        document.getElementById('srry').textContent = "Perdiste";
                            }
                            // 3 en raya en medio abajo de X
                            if(cuadrito4 == true &&  posicionX4 == true){
                                unode392=true
                            console.log(unode392)
                        }
                            if(unode392==true&&   dosde392==true   &&  tresde392==true){
                        document.getElementById('srry').textContent = "Ganaste";
                                }
                            // 3 en raya en medio abajo de O
                            if(cuadrito4 == true &&  posicionO4 == true){
                                unode393=true
                            console.log(unode393)
                        }
                            if(unode393==true&&   dosde393==true   &&  tresde393==true){
                        document.getElementById('srry').textContent = "Perdiste";
                                }
    }

// Quinto
let bloqueador5 =false;//bloqueador Quinto

let posicionX5= false//Posiciones Quinto

let posicionO5 =  false


Casillb5.onclick=function(){
    //bloqueador que de solo halla un click
    if(bloqueador5 == true ){
        return
    }

    else if ( bloqueador5 == false){
        cuadrito5 = true
    //funcion del O y la X
            if ( jugador == false){
            Casillb5.src="images/x.png";
            jugador =true
            // bloqueador
            bloqueador5=true
            // X
            posicionX5= true
            }
            else if ( jugador == true){
            Casillb5.src="images/o.png"
            jugador= false
            // bloqueado
            bloqueador5=true
            // O
            posicionO5 =true
            }
    }
            //3 en raya a linea central con X
            if(cuadrito5 == true && posicionX5== true){
                dosde39 = true
                console.log(dosde39)
                }
                if(unode39 ==true && dosde39==true&& tresde39==true){
                    document.getElementById('srry').textContent = "Ganaste";
                    }
            //3 en raya a linea central con O
            if(cuadrito5 == true && posicionO5== true){
                dosde391 = true
                console.log(dosde391)
                }
                if(unode391 ==true && dosde391==true&& tresde391==true){
                    document.getElementById('srry').textContent = "Perdiste";
                    }
                            // 3 en raya en medio abajo de X
                            if(cuadrito5 == true &&  posicionX5 == true){
                                dosde392=true
                            console.log(dosde392)
                        }
                            if(unode392==true&&   dosde392==true   &&  tresde392==true){
                        document.getElementById('srry').textContent = "Ganaste";
                                }
                            // 3 en raya en medio abajo de O
                            if(cuadrito5 == true &&  posicionO5 == true){
                                dosde393=true
                            console.log(dosde393)
                        }
                            if(unode393==true&&   dosde393==true   &&  tresde393==true){
                        document.getElementById('srry').textContent = "Perdiste";
                                }
                                // 3 en raya en x de X
                                if(cuadrito5 == true &&  posicionX5 == true){
                                    dosde394=true
                                    console.log(dosde394)
                                }
                                if(unode394==true&&   dosde394==true   &&  tresde394==true){
                            document.getElementById('srry').textContent = "Ganaste";
                                }
                                // 3 en raya en x de O
                            if(cuadrito5 == true &&  posicionO5 == true){
                                dosde395=true
                                console.log(dosde395)
                            }
                            if(unode395==true &&   dosde395==true   &&  tresde395==true){
                        document.getElementById('srry').textContent = "Perdiste";
                            }
                            //3 en raya en x  con X
    if(cuadrito5 == true && posicionX5== true){
        dosde396 = true
        console.log(dosde396)
        }
        if(unode396 ==true && dosde396==true&& tresde396==true){
            document.getElementById('srry').textContent = "Ganaste";
            }
            //3 en raya en x  con O
    if(cuadrito5 == true && posicionO5== true){
        dosde397 = true
        console.log(dosde397)
        }
        if(unode397 ==true && dosde397==true&& tresde397==true){
            document.getElementById('srry').textContent = "Perdiste";
            }
    }

    // Sexto
let bloqueador6 =false;//bloqueador Sexto

let posicionX6= false//Posiciones Sexto

let posicionO6 =  false


Casillb6.onclick=function(){
    cuadrito6 = true
    //bloqueador que de solo halla un click
    if(bloqueador6 == true ){
        return
    }

    else if ( bloqueador6 == false){
    //funcion del O y la X
            if ( jugador == false){
            Casillb6.src="images/x.png";
            jugador =true
            // bloqueador
            bloqueador6=true
            // X
            posicionX6= true
            }
            else if ( jugador == true){
            Casillb6.src="images/o.png"
            jugador= false
            // bloqueado
            bloqueador6=true
            // O
            posicionO6=true
            }
    }

    //    3 en raya ala derecha con x
    if(cuadrito6 == true && posicionX6== true){
        dosde37 = true
        console.log(dosde37)
        }
        if(unode37 ==true && dosde37==true&& tresde37==true){
            document.getElementById('srry').textContent = "Ganaste";
            }
            //    3 en raya a abajo con O
    if(cuadrito6 == true && posicionO6== true){
        dosde38 = true
        console.log(dosde38)
        }
        if(unode38 ==true && dosde38==true&& tresde38==true){
            document.getElementById('srry').textContent = "Perdiste";
            }
                            // 3 en raya en medio abajo de X
                            if(cuadrito6 == true &&  posicionX6 == true){
                                tresde392=true
                            console.log(tresde392)
                        }
                            if(unode392==true&&   dosde392==true   &&  tresde392==true){
                        document.getElementById('srry').textContent = "Ganaste";
                                }
                            // 3 en raya en medio abajo de O
                            if(cuadrito6 == true &&  posicionO6 == true){
                                tresde393=true
                            console.log(tresde393)
                        }
                            if(unode393==true&&   dosde393==true   &&  tresde393==true){
                        document.getElementById('srry').textContent = "Perdiste";
                                }
    }


    // Septimo
let bloqueador7 =false;//bloqueador Septimo

let posicionX7= false//Posiciones Septimo

let posicionO7 =  false


Casillc7.onclick=function(){
    //bloqueador que de solo halla un click
    if(bloqueador7 == true ){
        return
    }

    else if ( bloqueador7 == false){
        cuadrito7 = true
    //funcion del O y la X
            if ( jugador == false){
            Casillc7.src="images/x.png";
            jugador =true
            // bloqueador
            bloqueador7=true
            // X
            posicionX7= true
            }
            else if ( jugador == true){
            Casillc7.src="images/o.png"
            jugador= false
            // bloqueado
            bloqueador7=true
            // O
            posicionO7=true
            }
    }
        // Mecanicas
                        // 3 en raya izquierda de X
                        if(cuadrito7 == true &&  posicionX7 == true){
                            tresde33=true
                            console.log(tresde33)
                        }
                        if(unode33==true&&   dosde33==true   &&  tresde33==true){
                    document.getElementById('srry').textContent = "Ganaste";
                        }

                            // 3 en raya izquierda de O
                            if(cuadrito7 == true &&  posicionO7 == true){
                                tresde34=true
                                console.log(unode34)
                            }
                            if(unode34==true&&   dosde34==true   &&  tresde34==true){
                        document.getElementById('srry').textContent = "Perdiste";
                            }
                                    // 3 en raya abajo de X
                            if(cuadrito7 == true && posicionX7== true){
                            unode35 = true
                            console.log(unode35)
                        }
                        if(unode35 ==true && dosde35==true&& tresde35==true){
                            document.getElementById('srry').textContent = "Ganaste";
                        }
                                // 3 en raya abajo O
                        if(cuadrito7 == true && posicionO7== true){
                        unode36 = true
                        console.log(unode36)
                    }
                    if(unode36 ==true && dosde36==true&& tresde36==true){
                        document.getElementById('srry').textContent = "Perdiste";
                    }
                    //3 en raya en x  con X
    if(cuadrito7 == true && posicionX7== true){
        tresde396 = true
        console.log(tresde396)
        }
        if(unode396 ==true && dosde396==true&& tresde396==true){
            document.getElementById('srry').textContent = "Ganaste";
            }
            //3 en raya en x  con O
    if(cuadrito7 == true && posicionO7== true){
        tresde397 = true
        console.log(tresde397)
        }
        if(unode397 ==true && dosde397==true&& tresde397==true){
            document.getElementById('srry').textContent = "Perdiste";
            }
        }

    // Octavo
let bloqueador8 =false;//bloqueador Octavo

let posicionX8= false//Posiciones Octavo

let posicionO8 =  false


Casillc8.onclick=function(){
    //bloqueador que de solo halla un click
    if(bloqueador8 == true ){
        return
    }

    else if ( bloqueador8 == false){
        cuadrito8 = true
    //funcion del O y la X
            if ( jugador == false){
            Casillc8.src="images/x.png";
            jugador =true
            // bloqueador
            bloqueador8=true
            // X
            posicionX8= true
            }
            else if ( jugador == true){
            Casillc8.src="images/o.png"
            jugador= false
            // bloqueado
            bloqueador8=true
            // O
            posicionO8=true
            }
                        // Mecanicas
                    // 3 en raya abajo de X
                    if(cuadrito8 == true && posicionX8== true){
                        dosde35 = true
                        console.log(dosde35)
                    }
                    if(unode35 ==true && dosde35==true&& tresde35==true){
                        document.getElementById('srry').textContent = "Ganaste";
                    }
                    // 3 en raya abajo 0
                    if(cuadrito8 == true && posicionO8== true){
                                    dosde36 = true
                                    console.log(dosde36)
                                }
                                if(unode36 ==true && dosde36==true&& tresde36==true){
                                    document.getElementById('srry').textContent = "Perdiste";
                                }
            //3 en raya a linea central con X
            if(cuadrito8 == true && posicionX8== true){
                tresde39 = true
                console.log(tresde39)
                }
                if(unode39 ==true && dosde39==true&& tresde39==true){
                    document.getElementById('srry').textContent = "Ganaste";
                    }
                //3 en raya a linea central con O
                if(cuadrito8 == true && posicionO8== true){
                    tresde391 = true
                    console.log(tresde391)
                    }
                    if(unode391 ==true && dosde391==true&& tresde391==true){
                        document.getElementById('srry').textContent = "Perdiste";
                        }
                }
    }

    // Noveno
let bloqueador9 =false;//bloqueador Noveno

let posicionX9= false//Posiciones Noveno

let posicionO9 =  false


Casillc9.onclick=function(){
    //bloqueador que de solo halla un click
    if(bloqueador9 == true ){
        return
    }

    else if ( bloqueador9 == false){
        cuadrito9 = true
    //funcion del O y la X
            if ( jugador == false){
            Casillc9.src="images/x.png";
            jugador =true
            // bloqueador
            bloqueador9=true
            // X
            posicionX9= true
            }
            else if ( jugador == true){
            Casillc9.src="images/o.png"
            jugador= false
            // bloqueado
            bloqueador9=true
            // O
            posicionO9=true
            }
    }
    // Mecanicas
// 3 en raya abajo de X
if(cuadrito9 == true && posicionX9== true){
    tresde35 = true
    console.log(tresde35)
}
if(unode35 ==true && dosde35==true&& tresde35==true){
    document.getElementById('srry').textContent = "Ganaste";
}
                    // 3 en raya abajo 0
                    if(cuadrito9 == true && posicionO9== true){
                        tresde36 = true
                        console.log(tresde36)
                    }
                    if(unode36 ==true && dosde36==true&& tresde36==true){
                        document.getElementById('srry').textContent = "Perdiste";
                    }

                    //    3 en raya ala derecha con x
    if(cuadrito9 == true && posicionX9== true){
        tresde37 = true
        console.log(tresde37)
        }
        if(unode37 ==true && dosde37==true&& tresde37==true){
            document.getElementById('srry').textContent = "Ganaste";
            }
                        //    3 en raya a abajo con O
    if(cuadrito9 == true && posicionO9== true){
        tresde38 = true
        console.log(tresde38)
        }
        if(unode38 ==true && dosde38==true&& tresde38==true){
            document.getElementById('srry').textContent = "Perdiste";
            }
                // 3 en raya en x de X
            if(cuadrito9 == true &&  posicionX9 == true){
                tresde394=true
                console.log(tresde394)
            }
            if(unode394==true&&   dosde394==true   &&  tresde394==true){
        document.getElementById('srry').textContent = "Ganaste";
            }
            // 3 en raya en x de O
            if(cuadrito9 == true &&  posicionO9 == true){
                tresde395=true
                console.log(tresde395)
            }
            if(unode395==true &&   dosde395==true   &&  tresde395==true){
        document.getElementById('srry').textContent = "Perdiste";
            }
    }
