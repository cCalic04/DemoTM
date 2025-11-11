//estas constantes determinan las imágenes que se muestran en el avatar del dialogo

const retratos = [
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/retrato2.png",
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/retratoVerde.png",
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/retratoRojo.png",
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/retratoDefault.png",
];

//estas constantes determinan los sonidos que se reproducen al hacer click al avatar

/*
const audios = [
  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/Audio1.mp3?raw=true",
  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/Audio2.mp3?raw=true",
  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/Audio3.mp3?raw=true",
]
*/

//estas variables determinan los sonidos que se pueden reproducir al clickear al personaje en la escena

var audio1 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/Audio1.mp3?raw=true");
var audio2 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/Audio2.mp3?raw=true");
var audio3 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/Audio3.mp3?raw=true");

//estas constantes determinan si el muñeco en el mapa está Hablando

const Hablando = document.getElementById("plantilla");
const Hablando1 = document.getElementById("plantilla1");
const Hablando2 = document.getElementById("plantilla2");


//estas funciones reproducen los audios y pausan los demás

function entrevistas() {
  if (audio1.paused){
    audio1.play();
    Hablando.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/Placeholderfram3T.gif";
  } else {
    audio1.pause();
    Hablando.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderT.png";
  }
  if (!audio2.paused){
    audio2.pause()
    Hablando1.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderR.png";
  }
  if (!audio3.paused){
    audio3.pause()
    Hablando2.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderV.png";
  }
}
function entrevistas1() {
  if (audio2.paused){
    audio2.play();
    Hablando1.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/RojoHabla.gif";
  } else {
    audio2.pause();
    Hablando1.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderR.png";
  }
  if (!audio1.paused){
    audio1.pause()
    Hablando.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderT.png";
  }
  if (!audio3.paused){
    audio3.pause()
    Hablando2.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderV.png";
  }
}
function entrevistas2() {
  if (audio3.paused){
    audio3.play();
    Hablando2.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/VerdeHabla.gif";
  } else {
    audio3.pause();
    Hablando2.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderV.png";
  }
  if (!audio1.paused){
    audio1.pause()
    Hablando.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderT.png";
  }
  if (!audio2.paused){
    audio2.pause()
    Hablando1.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderR.png";
  }
}

//esta constante determina el espacio en el que aparece la imagen del avatar

const retrato = document.getElementById("retrato");

//retrato.src = retratos[0];

//Estas funciones actualizan el retrato que está apareciendo

function retratoAzul(event) {
  retrato.src = retratos[0];
}
function retratoRojo(event) {
  retrato.src = retratos[1];
}
function retratoVerde(event) {
  retrato.src = retratos[2];
}



//Estas constantes determinan dónde se muestra el dialogo

const texto = document.getElementById("observar");
const textoDialogo = document.getElementById("linea1");

//estas constantes determinan el contenido de los dialogos


//estos son los textos que salen en "mirar alrededor"

const textoRellenoPlantilla = {
    plantilla: "Esa persona tiene poquito detalle, parece un placeholder azul..."
}
const textoRellenoPlantilla1 = {
    plantilla1: "Esa persona tiene poquito detalle, parece un placeholder rojo..."
}
const textoRellenoPlantilla2 = {
    plantilla2: "Esa persona tiene poquito detalle, parece un placeholder verde..."
}

//estos son los textos que salen en "..."

const textoDialogoPlantilla = {
    plantilla: "—¡Hola! Soy una plantilla azul :D"
}
const textoDialogoPlantilla1 = {
    plantilla1: "—¡Hola! Soy una plantilla roja :D"
}
const textoDialogoPlantilla2 = {
    plantilla2: "—¡Hola! Soy una plantilla verde :D"
}

//estas funciones hacen que el dialogo actualice el html para mostrar el texto deseado

function actualizarTextoPlantilla(event) {
  texto.innerHTML = textoRellenoPlantilla[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogoPlantilla(event) {
  textoDialogo.innerHTML = textoDialogoPlantilla[event.target.id] || "...";
}

function actualizarTextoPlantilla1(event) {
  texto.innerHTML = textoRellenoPlantilla1[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogoPlantilla1(event) {
  textoDialogo.innerHTML = textoDialogoPlantilla1[event.target.id] || "...";
}

function actualizarTextoPlantilla2(event) {
  texto.innerHTML = textoRellenoPlantilla2[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogoPlantilla2(event) {
  textoDialogo.innerHTML = textoDialogoPlantilla2[event.target.id] || "...";
}

//estas funciones hacen que el dialogo se reinicie después de quitar el mouse

function resetTextoDialogo() {
  textoDialogo.innerHTML = "...";
}
function resetTexto() {
  texto.innerHTML = "Mirar alrededor";
}
function resetRetrato() {
  retrato.src = retratos[3];
}

//estos querys hacen que todo lo anterior se active al pasar el cursor sobre los elementos

document.getElementById("plantilla").addEventListener("mouseover", actualizarTextoPlantilla);
document.getElementById("plantilla").addEventListener("mouseout", resetTexto);
document.getElementById("plantilla").addEventListener("mouseover", actualizarTextoDialogoPlantilla);
document.getElementById("plantilla").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("plantilla").addEventListener("mouseover", retratoAzul);
document.getElementById("plantilla").addEventListener("mouseout", resetRetrato);

document.getElementById("plantilla1").addEventListener("mouseover", actualizarTextoPlantilla1);
document.getElementById("plantilla1").addEventListener("mouseout", resetTexto);
document.getElementById("plantilla1").addEventListener("mouseover", actualizarTextoDialogoPlantilla1);
document.getElementById("plantilla1").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("plantilla1").addEventListener("mouseover", retratoVerde);
document.getElementById("plantilla1").addEventListener("mouseout", resetRetrato);

document.getElementById("plantilla2").addEventListener("mouseover", actualizarTextoPlantilla2);
document.getElementById("plantilla2").addEventListener("mouseout", resetTexto);
document.getElementById("plantilla2").addEventListener("mouseover", actualizarTextoDialogoPlantilla2);
document.getElementById("plantilla2").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("plantilla2").addEventListener("mouseover", retratoRojo);
document.getElementById("plantilla2").addEventListener("mouseout", resetRetrato);

