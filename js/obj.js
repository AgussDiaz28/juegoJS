function random(){

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

function comparar(objetojugador,objeto,victorias){

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

function desicion(objetojugador,checked){
    let victorias;
    if (checked == 'true'){
      let objeto = newrandom(0,100,0);
      comparar(objetojugador,objeto,victorias)
    }
    else{
      let objeto = random();
      comparar(objetojugador,objeto,victorias);
    }

  if ( multiple(victorias) == true ){
    alert("Felicitaciones por la victorias");
  }
}

function newrandom (value1,value2,value3){
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

function multiple(valor){
    resto = valor % 3;
    if(resto == 0)
        return true;
    else
        return false;
}
