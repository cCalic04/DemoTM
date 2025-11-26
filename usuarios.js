//estas constantes determinan las imágenes que se muestran en el avatar del dialogo

var audioFondo = document.getElementById('fondo');

document.addEventListener("DOMContentLoaded", () => {
    audioFondo.volume = 0.5;
});

const retratos = [
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chicoRetratoNC.png",
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chicoRetrato1NC.png",
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chicaRetratoNC.png",
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/retratoVacio.png",
  "http://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/extranjeraRetratoNC.png",
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

var audio1 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/chiconocolado.mp3?raw=true");
var audio2 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/chicanocolada.mp3?raw=true");
var audio3 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/chiconocolado2.mp3?raw=true");
var audio4 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/Entrevista%20extranjera%20no%20colada.wav?raw=true");

//estas constantes determinan si el muñeco en el mapa está Hablando

const Hablando = document.getElementById("chicoBufanda");
const Hablando1 = document.getElementById("chicaSantafe");
const Hablando2 = document.getElementById("chico");
const Hablando3 = document.getElementById("extranjera");


//estas funciones reproducen los audios y pausan los demás

function entrevistas() {
  if (audio1.paused){
    audio1.play();
    Hablando.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chico1NC.gif";
  } else {
    audio1.pause();
    Hablando.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chiconocolado1NC.png";
  }
  if (!audio2.paused){
    audio2.pause()
    Hablando1.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chicanocoladaNC.png";
  }
  if (!audio3.paused){
    audio3.pause()
    Hablando2.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chiconocoladoNC.png";
  }
  if (!audio4.paused){
    audio4.pause()
    Hablando3.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/extranjeraNC.png";
  }
}
function entrevistas1() {
  if (audio2.paused){
    audio2.play();
    Hablando1.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chicaNC.gif";
  } else {
    audio2.pause();
    Hablando1.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chicanocoladaNC.png";
  }
  if (!audio1.paused){
    audio1.pause()
    Hablando.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chiconocolado1NC.png";
  }
  if (!audio3.paused){
    audio3.pause()
    Hablando2.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chiconocoladoNC.png";
  }
  if (!audio4.paused){
    audio4.pause()
    Hablando3.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/extranjeraNC.png";
  }
}
function entrevistas2() {
  if (audio3.paused){
    audio3.play();
    Hablando2.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chicoNC.gif";
  } else {
    audio3.pause();
    Hablando2.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chiconocoladoNC.png";
  }
  if (!audio1.paused){
    audio1.pause()
    Hablando.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chiconocolado1NC.png";
  }
  if (!audio2.paused){
    audio2.pause()
    Hablando1.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chicanocoladaNC.png";
  }
  if (!audio4.paused){
    audio4.pause()
    Hablando3.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/extranjeraNC.png";
  }
}
function entrevistas3() {
  if (audio4.paused){
    audio4.play();
    Hablando3.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/extranjeraNC.gif";
  }else {
    audio4.pause();
    Hablando3.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/extranjeraNC.png";
  }
  if (!audio1.paused){
    audio1.pause()
    Hablando.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chiconocolado1NC.png";
  }
  if (!audio2.paused){
    audio2.pause()
    Hablando1.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chicanocoladaNC.png";
  }
  if (!audio3.paused){
    audio3.pause()
    Hablando2.src ="https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/chiconocoladoNC.png";
  }
}

//esta constante determina el espacio en el que aparece la imagen del avatar

const retrato = document.getElementById("retrato");

//retrato.src = retratos[0];

//Estas funciones actualizan el retrato que está apareciendo

function retratoBufanda(event) {
  retrato.src = retratos[0];
}
function retratoRojo(event) {
  retrato.src = retratos[1];
}
function retratoVerde(event) {
  retrato.src = retratos[2];
}
function retratoExtranjera(event) {
  retrato.src = retratos[4]
}





//Estas constantes determinan dónde se muestra el dialogo

const texto = document.getElementById("observar");
const textoDialogo = document.getElementById("linea1");

//estas constantes determinan el contenido de los dialogos


//estos son los textos que salen en "mirar alrededor"

const textoRellenochicoBufanda = {
    chicoBufanda: "JOVEN NO SE COLA PORQUE YA TIENE UN SUBSIDIO."
}
const textoRellenochicaSantafe = {
    chicaSantafe: "JOVEN SOLAMENTE SE COLA SI NO TIENE PARA EL PASAJE."
}
const textoRellenochico = {
    chico: "JOVEN NO ES CAPAZ DE COLARSE."
}
const textoRellenoextranjera = {
    extranjera: "EXTRANJERA QUIERE MÁS MEDIDAS ANTICOLADOS."
}

//estos son los textos que salen en "..."

const textoDialogochicoBufanda = {
    chicoBufanda: "—Se colan solo porque les parece entretenido o porque se les hizo costumbre. No me parece."
}
const textoDialogochicaSantafe = {
    chicaSantafe: "—Ante la necesidad si lo justifico, pero no todas las veces."
}
const textoDialogochico = {
    chico: "—Ellos están exponiendo su vida, me parece que la integridad de su vida vale más que ir a colarse."
}
const textoDialogoextranjera = {
    extranjera: "—Es un problema estructural (...). Deberían haber mecánismos para prevenirlo o castigarlo si no es por necesidad."
}

//estas funciones hacen que el dialogo actualice el html para mostrar el texto deseado

function actualizarTextochicoBufanda(event) {
  texto.innerHTML = textoRellenochicoBufanda[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogochicoBufanda(event) {
  textoDialogo.innerHTML = textoDialogochicoBufanda[event.target.id] || "...";
}

function actualizarTextochicaSantafe(event) {
  texto.innerHTML = textoRellenochicaSantafe[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogochicaSantafe(event) {
  textoDialogo.innerHTML = textoDialogochicaSantafe[event.target.id] || "...";
}

function actualizarTextochico(event) {
  texto.innerHTML = textoRellenochico[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogochico(event) {
  textoDialogo.innerHTML = textoDialogochico[event.target.id] || "...";
}

function actualizarTextoRellenoextranjera(event) {
  texto.innerHTML = textoRellenoextranjera[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogoextranjera(event) {
  textoDialogo.innerHTML = textoDialogoextranjera[event.target.id] || "Mirar alrededor";
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

document.getElementById("chicoBufanda").addEventListener("mouseover", actualizarTextochicoBufanda);
document.getElementById("chicoBufanda").addEventListener("mouseout", resetTexto);
document.getElementById("chicoBufanda").addEventListener("mouseover", actualizarTextoDialogochicoBufanda);
document.getElementById("chicoBufanda").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("chicoBufanda").addEventListener("mouseover", retratoBufanda);
document.getElementById("chicoBufanda").addEventListener("mouseout", resetRetrato);

document.getElementById("chicaSantafe").addEventListener("mouseover", actualizarTextochicaSantafe);
document.getElementById("chicaSantafe").addEventListener("mouseout", resetTexto);
document.getElementById("chicaSantafe").addEventListener("mouseover", actualizarTextoDialogochicaSantafe);
document.getElementById("chicaSantafe").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("chicaSantafe").addEventListener("mouseover", retratoVerde);
document.getElementById("chicaSantafe").addEventListener("mouseout", resetRetrato);

document.getElementById("chico").addEventListener("mouseover", actualizarTextochico);
document.getElementById("chico").addEventListener("mouseout", resetTexto);
document.getElementById("chico").addEventListener("mouseover", actualizarTextoDialogochico);
document.getElementById("chico").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("chico").addEventListener("mouseover", retratoRojo);
document.getElementById("chico").addEventListener("mouseout", resetRetrato);

document.getElementById("extranjera").addEventListener("mouseover", actualizarTextoRellenoextranjera);
document.getElementById("extranjera").addEventListener("mouseout", resetTexto);
document.getElementById("extranjera").addEventListener("mouseover", actualizarTextoDialogoextranjera);
document.getElementById("extranjera").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("extranjera").addEventListener("mouseover", retratoExtranjera);
document.getElementById("extranjera").addEventListener("mouseout", resetRetrato)

