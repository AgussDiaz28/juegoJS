let victorias = 0;  /* Variable global de victorias */

function random() {

  let objeto;
  let element = Math.round((Math.random() * 2 )); //round redondea los valores del random que va desde 0 a 2

  if ( element === 0){
        objeto = "piedra";
  }
  if ( element === 1){
      objeto = "papel";
  }
  if (element === 2){
    objeto = "tijera";
  }

  return objeto;
}

function comparar(objetojugador,objeto) {

  print(objeto,objetojugador);

  if (objeto == objetojugador){
        document.getElementById("message").innerHTML = "Esto fue un empate";
  }

  if ((objetojugador == "piedra") && (objeto == "tijera")){
        document.getElementById("message").innerHTML  = "Usted Gano";
        victorias = victorias+1;
  }

  if ((objetojugador == "piedra") && (objeto == "papel")){
        document.getElementById("message").innerHTML = "Usted Perdio";
  }

  if ((objetojugador == "papel") && (objeto == "tijera")){
        document.getElementById("message").innerHTML = "Usted Perdio";
  }

  if ((objetojugador == "papel") && (objeto == "piedra")){
        document.getElementById("message").innerHTML  = "Usted Gano";
        victorias = victorias+1;
  }

  if ((objetojugador == "tijera") && (objeto == "piedra")){
        document.getElementById("message").innerHTML = "Usted Perdio";
  }

  if ((objetojugador == "tijera") && (objeto == "papel")){
        document.getElementById("message").innerHTML  = "Usted Gano";
        victorias = victorias+1;
  }

}

function print(objeto,objetojugador) {
    let imagen =  "images/" + objeto + ".png";
    let imagenjugador =  "images/" + objetojugador + ".png";
    let oponente = document.getElementById("oponente");
    oponente.src = imagen;
    let yo = document.getElementById("yo");
    yo.src = imagenjugador;
}

function desicion(objetojugador) {
	  let status = checkbox();
    console.log(status);
    if ( status == true){
        let piedra = document.getElementById("piedra-label").value;
        let papel = document.getElementById("papel-label").value;
        let tijera = document.getElementById("tijera-label").value;
        let suma = parseInt(piedra) + parseInt(papel) + parseInt(tijera);
        if ( (isEmpty(piedra) || isEmpty(papel) || isEmpty(tijera)) || (suma < 100 ) ){
              alert('Valores no validos');
        }
        else{
              let objeto = newrandom(piedra,papel,tijera);
              comparar(objetojugador,objeto,victorias)
        }
    }
    else{
      let objeto = random();
      comparar(objetojugador,objeto,victorias);
    }

  if ( victorias == 3 ){
      document.getElementById("message").innerHTML  = "Felicitaciones por sus ultimas 3 victorias!!!";
      //alert("Felicitaciones por las 3 victorias!");
    victorias = 0;
  }
}

function newrandom (value1,value2,value3) {
  let objeto;
  let element = Math.round((Math.random() * 101 )); // me devuelve numeros entre 0 y 100
  value1 = parseInt (value1);
  value2 = parseInt (value2);
  value3 = parseInt (value3);
  if (element <= value1){
    objeto = "piedra";
  }
  if ((element > value1) && (element <= (value2+value1))){
    objeto = "papel";
  }
  if (element > (value2+value1) && (element<= 100) ) { /* Asumo que si la suma de los 3 valores no da 100, lo que falta es del ultimo elemento */
    objeto = "tijera";
  }

  return objeto;
}

function checkbox() {
    let x = document.getElementById("myCheck").checked;
    return x;
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function selector(){
  let val = document.getElementById("select").value
  desicion(val);
}
