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
    alert("Esto fue un Empate");
  }

  if ((objetojugador == "piedra") && (objeto == "tijera")){
    alert("Usted Gano");
    victorias = victorias+1;
  }

  if ((objetojugador == "piedra") && (objeto == "papel")){
    alert("Usted Perdio");
  }

  if ((objetojugador == "papel") && (objeto == "tijera")){
    alert("Usted Perdio");
  }

  if ((objetojugador == "papel") && (objeto == "piedra")){
    alert("Usted Gano");
    victorias = victorias+1;
  }

  if ((objetojugador == "tijera") && (objeto == "piedra")){
    alert("Usted Perdio")
  }

  if ((objetojugador == "tijera") && (objeto == "papel")){
    alert("Usted Gano");
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
      let objeto = newrandom(piedra,papel,tijera);
      comparar(objetojugador,objeto,victorias)
    }
    else{
      let objeto = random();
      comparar(objetojugador,objeto,victorias);
    }
    console.log(victorias);
  if ( victorias == 3 ){
    alert("Felicitaciones por la victorias");
    victorias = 0;
  }
}

function newrandom (value1,value2,value3) {
  let objeto;
  let element = Math.round((Math.random() * 100 )); // me devuelve numeros entre 0 y 100

  if (element <= value1){
    objeto = "piedra";
  }
  if ((element > value1) && (element <= (value2+value1))){
    objeto = "papel";
  }
  if (element > (value2+value1)){
    objeto = "tijera";
  }

  return objeto;
}

function checkbox() {
    let x = document.getElementById("myCheck").checked;
    return x;
}
