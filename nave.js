
//Estas constantes determinan dónde se muestra el dialogo

const texto = document.getElementById("observar");
const textoDialogo = document.getElementById("linea1");

//estas constantes determinan el contenido de los dialogos

var audio4 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/alien1.mp3?raw=true");
var audio5 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/alien2.mp3?raw=true")
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
function MarcianoSonido1(){
  if (audio5.paused){
    audio5.play();
  } else {
    audio4.pause();
  }
}
function MarcianoSonidont1(){
  if (!audio5.paused){
    audio5.pause();
  }
}


//estos son los textos que salen en "mirar alrededor"
const textoRellenoMarcianoR = {
    marcianoR: "Huele a marciano.",
};

const textoRellenoMarcianoV = {
    marcianoV: "Huele a marciano.",
};

const textoRellenoTerminal = {
    terminal: "Aparentemente es un computador bastante antiguo."
}

const textoRellenoTransmi = {
    transmi: "Detrás de esta puerta se oye el ajetreo de la ciudad."
}

//estos son los textos que salen en "..."

const textoDialogoMarcianoR = {
    marcianoR: "—¡Esta es nuestra nave! <br> Tenemos un compu donde llevamos registros de nuestra investigación sobre los colados."
}

const textoDialogoMarcianoV = {
    marcianoV: "—Al fondo de la nave está la puerta al simulador de Transmilenio."
}


//estas funciones hacen que el dialogo actualice el html para mostrar el texto deseado

function actualizarTextoMarcianoR(event) {
  texto.innerHTML = textoRellenoMarcianoR[event.target.id] || "Mirar alrededor";
}
function actualizarTextoMarcianoV(event) {
  texto.innerHTML = textoRellenoMarcianoV[event.target.id] || "Mirar alrededor";
}
function actualizarTextoTerminal(event) {
  texto.innerHTML = textoRellenoTerminal[event.target.id] || "Mirar alrededor";
}
function actualizarTextoTransmi(event) {
  texto.innerHTML = textoRellenoTransmi[event.target.id] || "Mirar alrededor";
}


function actualizarTextoDialogoMarcianoR(event) {
  textoDialogo.innerHTML = textoDialogoMarcianoR[event.target.id] || "...";
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

document.getElementById("terminal").addEventListener("mouseover", actualizarTextoTerminal);
document.getElementById("terminal").addEventListener("mouseout", resetTexto)

document.getElementById("transmi").addEventListener("mouseover", actualizarTextoTransmi);
document.getElementById("transmi").addEventListener("mouseout", resetTexto);

document.getElementById("marcianoR").addEventListener("mouseover", actualizarTextoMarcianoR);
document.getElementById("marcianoR").addEventListener("mouseout", resetTexto);
document.getElementById("marcianoR").addEventListener("mouseover", actualizarTextoDialogoMarcianoR);
document.getElementById("marcianoR").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("marcianoR").addEventListener("mouseover", MarcianoSonido1);
document.getElementById("marcianoR").addEventListener("mouseout", MarcianoSonidont1);

document.getElementById("marcianoV").addEventListener("mouseover", actualizarTextoMarcianoV);
document.getElementById("marcianoV").addEventListener("mouseout", resetTexto);
document.getElementById("marcianoV").addEventListener("mouseover", actualizarTextoDialogoMarcianoV);
document.getElementById("marcianoV").addEventListener("mouseout", resetTextoDialogo);
document.getElementById("marcianoV").addEventListener("mouseover", MarcianoSonido);
document.getElementById("marcianoV").addEventListener("mouseout", MarcianoSonidont);




