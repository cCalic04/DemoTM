//estas constantes determinan las imágenes que se muestran en el avatar del dialogo

const retratos = [
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/retrato2.png",
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/retratoVerde.png",
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/retratoRojo.png",
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/retratoDefault.png",
  "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/retratoVerde.png",
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

var audio1 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/EstudiantesColados.mp3?raw=true");
var audio2 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/ParejaColada.mp3?raw=true");
var audio3 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/ChicoColado.mp3?raw=true");
var audio4 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/ChicaColada.mp3?raw=true");

//estas constantes determinan si el muñeco en el mapa está Hablando

const Hablando = document.getElementById("estudiantesColados");
const Hablando1 = document.getElementById("parejaColada");
const Hablando2 = document.getElementById("chicoColado");
const Hablando3 = document.getElementById("chicaColada");


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
  if (!audio4.paused){
    audio4.pause()
    Hablando3.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderV.png";
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
  if (!audio4.paused){
    audio4.pause()
    Hablando3.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderV.png";
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
  if (!audio4.paused){
    audio4.pause()
    Hablando3.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderV.png";
  }
}
function entrevistas3() {
  if (audio4.paused){
    audio4.play();
    Hablando3.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/VerdeHabla.gif";
  }else {
    audio4.pause();
    Hablando3.src = "https://raw.githubusercontent.com/cCalic04/TMPortal51/refs/heads/main/frame1PlaceholderV.png";
  }
  if (!audio1.paused){
    audio1.pause()
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
function retratoChicaColada(event) {
  retrato.src = retratos[4]
}



//Estas constantes determinan dónde se muestra el dialogo

const texto = document.getElementById("observar");
const textoDialogo = document.getElementById("linea1");

//estas constantes determinan el contenido de los dialogos


//estos son los textos que salen en "mirar alrededor"

const textoRellenoestudiantesColados = {
    estudiantesColados: "ESTUDIANTES SE COLAN PORQUE NO LES ALCANZA."
}
const textoRellenoparejaColada = {
    parejaColada: "JOVENES SE COLAN EN TM COMO PROTESTA POLÍTICA."
}
const textoRellenochicoColado = {
    chicoColado: "JOVEN SE COLA PARA AHORRAR PLATA."
}
const textoRellenoChicaColada = {
    chicaColada: "JOVEN SE COLA PORQUE EL SERVICIO ES PÉSIMO."
}

//estos son los textos que salen en "..."

const textoDialogoestudiantesColados = {
    estudiantesColados: "—A veces o es almorzar o pagar pasaje."
}
const textoDialogoparejaColada = {
    parejaColada: "—Yo nunca pago un pasaje, porque no sé qué hacen con mi dinero. Transmilenio debería funcionar bajo una institución pública."
}
const textoDialogochicoColado = {
    chicoColado: "—Si voy con amigos si prefiero colarme. La plata que no gasto en pasajes la uso pa otras vainas."
}
const textoDialogoChicaColada = {
    chicaColada: "—El servicio es muy caro para lo que brinda."
}

//estas funciones hacen que el dialogo actualice el html para mostrar el texto deseado

function actualizarTextoestudiantesColados(event) {
  texto.innerHTML = textoRellenoestudiantesColados[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogoestudiantesColados(event) {
  textoDialogo.innerHTML = textoDialogoestudiantesColados[event.target.id] || "...";
}

function actualizarTextoparejaColada(event) {
  texto.innerHTML = textoRellenoparejaColada[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogoparejaColada(event) {
  textoDialogo.innerHTML = textoDialogoparejaColada[event.target.id] || "...";
}

function actualizarTextochicoColado(event) {
  texto.innerHTML = textoRellenochicoColado[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogochicoColado(event) {
  textoDialogo.innerHTML = textoDialogochicoColado[event.target.id] || "...";
}

function actualizarTextoRellenoChicaColada(event) {
  texto.innerHTML = textoRellenoChicaColada[event.target.id] || "Mirar alrededor";
}
function actualizarTextoDialogoChicaColada(event) {
  textoDialogo.innerHTML = textoDialogoChicaColada[event.target.id] || "Mirar alrededor";
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

document.getElementById("estudiantesColados").addEventListener("mouseover", actualizarTextoestudiantesColados);
document.getElementById("estudiantesColados").addEventListener("mouseout", resetTexto);
document.getElementById("estudiantesColados").addEventListener("mouseover", actualizarTextoDialogoestudiantesColados);
document.getElementById("estudiantesColados").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("estudiantesColados").addEventListener("mouseover", retratoAzul);
document.getElementById("estudiantesColados").addEventListener("mouseout", resetRetrato);

document.getElementById("parejaColada").addEventListener("mouseover", actualizarTextoparejaColada);
document.getElementById("parejaColada").addEventListener("mouseout", resetTexto);
document.getElementById("parejaColada").addEventListener("mouseover", actualizarTextoDialogoparejaColada);
document.getElementById("parejaColada").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("parejaColada").addEventListener("mouseover", retratoVerde);
document.getElementById("parejaColada").addEventListener("mouseout", resetRetrato);

document.getElementById("chicoColado").addEventListener("mouseover", actualizarTextochicoColado);
document.getElementById("chicoColado").addEventListener("mouseout", resetTexto);
document.getElementById("chicoColado").addEventListener("mouseover", actualizarTextoDialogochicoColado);
document.getElementById("chicoColado").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("chicoColado").addEventListener("mouseover", retratoRojo);
document.getElementById("chicoColado").addEventListener("mouseout", resetRetrato);

document.getElementById("chicaColada").addEventListener("mouseover", actualizarTextoRellenoChicaColada);
document.getElementById("chicaColada").addEventListener("mouseout", resetTexto);
document.getElementById("chicaColada").addEventListener("mouseover", actualizarTextoDialogoChicaColada);
document.getElementById("chicaColada").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("chicaColada").addEventListener("mouseover", retratoChicaColada);
document.getElementById("chicaColada").addEventListener("mouseout", resetRetrato)

