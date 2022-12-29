window.onload = RepartirCartas(), VidasImg();

Mensaje = document.getElementById("Mensaje");
TextoWin1 = "Felicidades, has ganado el juego.";
TextoWin2 = "Por ahora...";
TextoLost = "Desgracia para ti, has perdido.";

function RepartirCartas(){

    for (let i = 0; i < 5; i++){
    
        document.getElementById("Cartas").innerHTML += '<img id="'+i+'" class="Carta" src="Cartas/BackCard.png" onclick="FlipShow('+i+')">';
        
    }
    document.getElementById("Cartas").innerHTML += '<p id="Separador"></p>';
    for (let i = 5; i < 10; i++){
    
        document.getElementById("Cartas").innerHTML += '<img id="'+i+'" class="Carta" src="Cartas/BackCard.png" onclick="FlipShow('+i+')">';
        
    }

}

function VidasImg(){
    for (let i = 0; i < 5; i++){
                        
        document.getElementById("NumVidas").innerHTML += '<img class="Corazones" src="Love_Heart_symbol.svg.png">';
        
    }
}

var Baraja = ["BackCard.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png","25.png"];

Baraja.shift();
Baraja = Baraja.sort(()=>{return Math.random()-0.5});

A = Baraja[0];
B = Baraja[1];
C = Baraja[2];
D = Baraja[3];
E = Baraja[4];

var Bar =  [A,A,B,B,C,C,D,D,E,E];
Bar = Bar.sort(()=>{return Math.random()-0.5});
console.log(Bar);

let CartasMostradas = 0;
let Carta1 = null;
let Carta2 = null;
let Tiradas = 0;
let Vidas = 5;
let Aciertos = 0;

let TiradasHechas = document.getElementById("Tiradas");
let VidasPerdidas =  document.getElementById("Vidas");

function FlipShow(id){

    CartasMostradas++;
    console.log(CartasMostradas);

    if(CartasMostradas == 1){
        Carta1 = document.getElementById(id);
        Res1 = Bar[id];
        Carta1.style.transition = "0.7s";
        Carta1.style.transform = "translateY(-15px) rotateY(-180deg) scaleX(-1)";
        setTimeout(function(){
        Carta1.style.boxShadow = "0 0 5px white";
        Carta1.style.borderRadius = "10px";
        Carta1.src = 'Cartas/'+Res1;
        },160);
        Carta1.disabled = true;
    }else if(CartasMostradas == 2){
        Carta2 = document.getElementById(id);
        Res2 = Bar[id];
        Carta2.style.transition = "0.7s";
        Carta2.style.transform = "translateY(-15px) rotateY(-180deg) scaleX(-1)";
        setTimeout(function(){
        Carta2.style.boxShadow = "0 0 5px white";
        Carta2.src = 'Cartas/'+Res2;
        },160);
        Carta2.disabled = true;

        Tiradas++;
        TiradasHechas.innerText = "Nº de Tiradas: "+Tiradas;

        if(Res1 == Res2){

            Aciertos++;

            CartasMostradas = 0;
            setTimeout(function(){                
            Carta1.style.transform = "translateY(-15px) rotateY(-90deg) scaleX(0)";
            Carta2.style.transform = "translateY(-15px) rotateY(-90deg) scaleX(0)";
            Carta1.style.boxShadow = '';
            Carta1.style.borderRadius = '';
            Carta2.style.boxShadow = '';
            Carta2.style.borderRadius = '';
            },1500);
            Carta1.disabled = false;
            Carta2.disabled = false;

            if(Aciertos == 5){
                
                setTimeout(function(){
                document.getElementById("Repetir").style.opacity = 1;
                Mensaje.style.opacity = 1;
                Mensaje.innerText = TextoWin1;
                setTimeout(function(){
                    Mensaje.style.opacity = 0;
                    setTimeout(function(){
                        Mensaje.style.opacity = 1;
                        Mensaje.innerText = TextoWin2;
                    },1000);
                },4000);
                setTimeout(function(){
                    Mensaje.style.opacity = 0;
                },8000);
                for(let i = 0; i < 10; i++){
                    let CartaRevelada = document.getElementById(i);
                    CartaRevelada.setAttribute ('style', 'transition: 0.7s');
                    CartaRevelada.setAttribute ('style', 'transform: rotateY(-90deg) scaleX(-1)');
                    setTimeout(function(){
                    CartaRevelada.setAttribute ('style', 'transform: rotateY(-180deg) scaleX(-1)');
                    setTimeout(function(){
                    CartaRevelada.src = "Cartas/"+Bar[i];
                    },160);
                    },100)
                    CartaRevelada.disabled = true;
                }
                },3000);
            }

        }else{
            setTimeout(function(){
                Vidas--;
                document.getElementById("NumVidas").opacity = 0;
                document.getElementById("NumVidas").opacity = 1;
                document.getElementById("NumVidas").innerHTML = '';
                for (let i = 0; i < Vidas; i++){
                    
                    document.getElementById("NumVidas").innerHTML += '<img class="Corazones" src="Love_Heart_symbol.svg.png">';
                    
                }

                Carta1.style.transition = "0.4s";
                Carta1.style.transform = "translateY(0px) rotateY(-360deg)";
                Carta1.style.transform = '';
                Carta1.style.boxShadow = '';
                Carta1.style.borderRadius = '';
                Carta1.src = 'Cartas/BackCard.png';
                Carta2.style.transition = "0.4s";
                Carta2.style.transform = "translateY(0px) rotateY(-360deg)";
                Carta2.style.transform = '';
                Carta2.style.boxShadow = '';
                Carta2.style.borderRadius = '';
                Carta2.src = 'Cartas/BackCard.png';
                Carta1.disabled = false;
                Carta2.disabled = false;

                CartasMostradas = 0;
            },1500);

            if(Vidas == 1){

                setTimeout(function(){

                    Mensaje.style.opacity = 1;
                    Mensaje.innerText = TextoLost;
                    document.getElementById("Repetir").style.opacity = 1;

                    for(let i = 0; i < 10; i++){
                        let CartaRevelada = document.getElementById(i);
                        CartaRevelada.setAttribute ('style', 'transition: 0.7s');
                        CartaRevelada.setAttribute ('style', 'transform: rotateY(-90deg) scaleX(-1)');
                        setTimeout(function(){
                        CartaRevelada.setAttribute ('style', 'transform: rotateY(-180deg) scaleX(-1)');
                        setTimeout(function(){
                        CartaRevelada.src = "Cartas/"+Bar[i];
                        },160);
                        },500)
                        CartaRevelada.disabled = true;
                    }

                    setTimeout(function(){
                        Mensaje.style.opacity = 0;
                    },2000)

                },2000)
        
            }
        }

    }
    

}

document.getElementById("Repetir").onclick = function () {
    location.href = "EstructuraReplay.html";
};
