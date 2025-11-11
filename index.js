
//Estas constantes determinan dónde se muestra el dialogo

const texto = document.getElementById("observar");
const textoDialogo = document.getElementById("linea1");

//estas constantes determinan el contenido de los dialogos


//estos son los textos que salen en "mirar alrededor"
const textoRellenoMarcianoR = {
    marcianoR: "Parece un ser de otro mundo. Tiene forma de cebolla",
};

const textoRellenoMarcianoV = {
    marcianoV: "Parece un ser de otro mundo. El funcionamiento de sus gafas es un misterio",
};
const textoRellenoNave = {
    nave: "Es una nave espacial averiada, parece que lleva acá mucho tiempo. <br> La puerta está abierta, podrías entrar."
}

const textoRellenoFuncionarioTM = {
    funcionarioTM: "Un funcionario de Transmilenio. Le voy a preguntar qué rutas hay..."
}
//estos son los textos que salen en "..."

const textoDialogoMarcianoR = {
    marcianoR: "—¡Bienvenido, terrícola!<br> Somos (todavía no se me ocurren los nombres).<br> Venimos desde otra galaxia.<br> Por favor, terrícola, ¡haznos el honor de entrar a nuestra nave y visitar nuestra replica virtual de un Transmilenio!"
}
const textoDialogoMarcianoV = {
    marcianoV: "—Llevamos algunos meses varados aquí.<br> Como nuestra nave ya no prende nos toca ir en Transmilenio a todos lados.<br> Tenemos mucha curiosidad por el tema de los colados...<br> Por favor, terrícola, ¡haznos el honor de entrar a nuestra nave y visitar nuestra replica virtual de un Transmilenio!"
}

const textoDialogoFuncionarioTM = {
    funcionarioTM: "—¡Hola veci! Si quiere ir con los colados toca que agarre el B51. <br> Si quiere ir con otros funcionarios del sistema, toca que agarre el D51. <br> Si sumercé va para donde los ejecutivos del sistema, toca que agarre el J51. <br> Y si quiere ir con otros usuarios, toca que agarre el K51."
}

//estas funciones hacen que el dialogo actualice el html para mostrar el texto deseado

function actualizarTextoMarcianoR(event) {
  texto.innerHTML = textoRellenoMarcianoR[event.target.id] || "Mirar alrededor";
}
function actualizarTextoMarcianoV(event) {
  texto.innerHTML = textoRellenoMarcianoV[event.target.id] || "Mirar alrededor";
}
function actualizarTextoNave(event) {
  texto.innerHTML = textoRellenoNave[event.target.id] || "Mirar alrededor";
}
function actualizarTextoFuncionarioTM(event) {
  texto.innerHTML = textoRellenoFuncionarioTM[event.target.id] || "Mirar alrededor";
}


function actualizarTextoDialogoMarcianoR(event) {
  textoDialogo.innerHTML = textoDialogoMarcianoR[event.target.id] || "...";
}
function actualizarTextoDialogoMarcianoV(event) {
  textoDialogo.innerHTML = textoDialogoMarcianoV[event.target.id] || "...";
}
function actualizarTextoDialogoFuncionarioTM(event) {
  textoDialogo.innerHTML = textoDialogoFuncionarioTM[event.target.id] || "...";
}

//estas funciones hacen que el dialogo se reinicie después de quitar el mouse

function resetTextoDialogo() {
  textoDialogo.innerHTML = "...";
}
function resetTexto() {
  texto.innerHTML = "Mirar alrededor";
}

//estos querys hacen que todo lo anterior se active al pasar el cursor sobre los elementos

document.getElementById("nave").addEventListener("mouseover", actualizarTextoNave);
document.getElementById("nave").addEventListener("mouseout", resetTexto)

document.getElementById("marcianoR").addEventListener("mouseover", actualizarTextoMarcianoR);
document.getElementById("marcianoR").addEventListener("mouseout", resetTexto);
document.getElementById("marcianoR").addEventListener("mouseover", actualizarTextoDialogoMarcianoR);
document.getElementById("marcianoR").addEventListener("mouseout", resetTextoDialogo);

document.getElementById("marcianoV").addEventListener("mouseover", actualizarTextoMarcianoV);
document.getElementById("marcianoV").addEventListener("mouseout", resetTexto);
document.getElementById("marcianoV").addEventListener("mouseover", actualizarTextoDialogoMarcianoV);
document.getElementById("marcianoV").addEventListener("mouseout", resetTextoDialogo);

document.getElementById("funcionarioTM").addEventListener("mouseover", actualizarTextoFuncionarioTM);
document.getElementById("funcionarioTM").addEventListener("mouseout", resetTexto);
document.getElementById("funcionarioTM").addEventListener("mouseover", actualizarTextoDialogoFuncionarioTM);
document.getElementById("funcionarioTM").addEventListener("mouseout", resetTextoDialogo);

