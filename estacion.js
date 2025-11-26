
var audio1 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/Destino-Portal-Norte.wav?raw=true");
var audio2 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/Destino-Portal-El-Dorado-cc-nuestro.wav?raw=true");
var audio3 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/Destino-San-Mateo.wav?raw=true");
var audio4 = new Audio(  "https://github.com/cCalic04/TMPortal51/raw/refs/heads/main/alien1.mp3?raw=true");

function letreros(){
  if (audio1.paused){
    audio1.play();
  } else {
    audio1.pause();
  }
  if (!audio2.paused){
    audio2.pause()
  }
  if (!audio3.paused){
    audio3.pause()
  }
}

function letreros1(){
  if (audio2.paused){
    audio2.play();
  } else {
    audio2.pause();
  }
  if (!audio2.paused){
    audio1.pause()
  }
  if (!audio3.paused){
    audio3.pause()
  }
}

function letreros2(){
  if (audio3.paused){
    audio3.play();
  } else {
    audio3.pause();
  }
  if (!audio2.paused){
    audio1.pause()
  }
  if (!audio3.paused){
    audio2.pause()
  }
}

function MarcianoSonido(){
  if (audio4.paused){
    audio4.play();
  } else {
    audio4.pause();
  }
}

//Estas constantes determinan dónde se muestra el dialogo

const texto = document.getElementById("observar");
const textoDialogo = document.getElementById("linea1");

//estas constantes determinan el contenido de los dialogos


//estos son los textos que salen en "mirar alrededor"

const textoRellenoFuncionarioTM = {
    funcionarioTM: "Un funcionario de Transmilenio. Le voy a preguntar qué rutas hay..."
}

const textoRellenoLetreroB = {
    letreroB: "Podría tomar este bus al norte..."
}
/*const textoRellenoLetreroD = {
    letreroD: "Podría tomar este bus a Engativá..."
}*/
const textoRellenoLetreroK = {
    letreroK: "Podría tomar este bus a Fontibón..."
}
const textoRellenoLetreroG = {
    letreroG: "Podría tomar este bus a Soacha..."
}


//estos son los textos que salen en "..."

const textoDialogoFuncionarioTM = {
    funcionarioTM: "—¡Hola veci!<br> Si quiere ir con los colados toca que agarre el B51. <br>Para donde las empleados del sistema, toca que agarre el K51. <br> Y si quiere ir con otros usuarios, toca que agarre el G51."
}

//estas funciones hacen que el dialogo actualice el html para mostrar el texto deseado

function actualizarTextoFuncionarioTM(event) {
  texto.innerHTML = textoRellenoFuncionarioTM[event.target.id] || "Mirar alrededor";
}

function actualizarTextoDialogoFuncionarioTM(event) {
  textoDialogo.innerHTML = textoDialogoFuncionarioTM[event.target.id] || "...";
}

function actualizarTextoLetreroB(event){
  texto.innerHTML = textoRellenoLetreroB[event.target.id] || "mirar alrededor";
}
function actualizarTextoLetreroD(event){
  texto.innerHTML = textoRellenoLetreroD[event.target.id] || "mirar alrededor";
}function actualizarTextoLetreroK(event){
  texto.innerHTML = textoRellenoLetreroK[event.target.id] || "mirar alrededor";
}function actualizarTextoLetreroG(event){
  texto.innerHTML = textoRellenoLetreroG[event.target.id] || "mirar alrededor";
}

//estas funciones hacen que el dialogo se reinicie después de quitar el mouse

function resetTextoDialogo() {
  textoDialogo.innerHTML = "...";
}
function resetTexto() {
  texto.innerHTML = "Mirar alrededor";
}

//estos querys hacen que todo lo anterior se active al pasar el cursor sobre los elementos

document.getElementById("funcionarioTM").addEventListener("mouseover", actualizarTextoFuncionarioTM);
document.getElementById("funcionarioTM").addEventListener("mouseout", resetTexto);
document.getElementById("funcionarioTM").addEventListener("mouseover", actualizarTextoDialogoFuncionarioTM);
document.getElementById("funcionarioTM").addEventListener("mouseout", resetTextoDialogo);


document.getElementById("letreroB").addEventListener("mouseover", actualizarTextoLetreroB);
document.getElementById("letreroB").addEventListener("mouseout", resetTexto);
document.getElementById("letreroB").addEventListener("mouseover", letreros);

/*document.getElementById("letreroD").addEventListener("mouseover", actualizarTextoLetreroD);
document.getElementById("letreroD").addEventListener("mouseout", resetTexto);*/

document.getElementById("letreroK").addEventListener("mouseover", actualizarTextoLetreroK);
document.getElementById("letreroK").addEventListener("mouseout", resetTexto);
document.getElementById("letreroK").addEventListener("mouseover", letreros1);

document.getElementById("letreroG").addEventListener("mouseover", actualizarTextoLetreroG);
document.getElementById("letreroG").addEventListener("mouseout", resetTexto);
document.getElementById("letreroG").addEventListener("mouseover", letreros2);


