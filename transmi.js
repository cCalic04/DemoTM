
//Estas constantes determinan dónde se muestra el dialogo

const texto = document.getElementById("observar");
const textoDialogo = document.getElementById("linea1");

//estas constantes determinan el contenido de los dialogos

var audio4 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/alien1.mp3?raw=true");
function MarcianoSonido(){
  if (audio4.paused){
    audio4.play();
  } else {
    audio4.pause();
  }
}
function MarcianoSonidont(){
  if (!audio4.paused){
    audio4.pause();
  }
}

//estos son los textos que salen en "mirar alrededor"

const textoRellenoTorniquete = {
    torniquete: "Es un torniquete... <br>Hay tantas formas para colarse, podrías saltar encima, echarlo para atrás o pasar por debajo."
}
const textoRellenoMarcianoV = {
    marcianoV: "Parece que es el único ser real en esta simulación."
};

//estos son los textos que salen en "..."

const textoDialogoMarcianoV = {
    marcianoV: "—Este simulador es como una estación de la Caracas.<br>Diariamente se colan cientos de personas en estaciones como esta. <br>Puedes pasar el torniquete con tranquilidad, en este simulador el pasaje es gratuito."
}

//estas funciones hacen que el dialogo actualice el html para mostrar el texto deseado

function actualizarTextoTorniquete(event) {
  texto.innerHTML = textoRellenoTorniquete[event.target.id] || "Mirar alrededor";
}

function actualizarTextoMarcianoV(event) {
  texto.innerHTML = textoRellenoMarcianoV[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogoMarcianoV(event) {
  textoDialogo.innerHTML = textoDialogoMarcianoV[event.target.id] || "...";
}

//estas funciones hacen que el dialogo se reinicie después de quitar el mouse

function resetTextoDialogo() {
  textoDialogo.innerHTML = "...";
}
function resetTexto() {
  texto.innerHTML = "Mirar alrededor";
}

//estos querys hacen que todo lo anterior se active al pasar el cursor sobre los elementos

document.getElementById("torniquete").addEventListener("mouseover", actualizarTextoTorniquete);
document.getElementById("torniquete").addEventListener("mouseout", resetTexto);

document.getElementById("marcianoV").addEventListener("mouseover", actualizarTextoMarcianoV);
document.getElementById("marcianoV").addEventListener("mouseout", resetTexto);
document.getElementById("marcianoV").addEventListener("mouseover", actualizarTextoDialogoMarcianoV);
document.getElementById("marcianoV").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("marcianoV").addEventListener("mouseover", MarcianoSonido);
document.getElementById("marcianoV").addEventListener("mouseout", MarcianoSonidont);
