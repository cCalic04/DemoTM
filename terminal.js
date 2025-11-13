const seleccion = document.getElementById("seleccion");
const biblio = document.getElementById("selecBiblio");

const textoBitacora = {
  bitacora: "Toca escribir la historia de los marcianos xdd"
}
const textoCreditos = {
  creditos: "Diseño Web: Simón Díaz. <br> Entrevistas: Andrés Gonzalez, Danna Benitez, Emmanuel Guerrero y Samuel Santiago. <br> Ilustraciones: Samuel Santiago y Simón Díaz. <br> Poster: Samuel Santiago. <br> Trailer: Andrés Gonzalez, Danna Benitez y Simón Díaz."
}
const textoDesarrollador = {
  desarrollador: "La versión actual funciona a grandes rasgos. Nos faltan escribir algunas cosas, como la historia de los marcianitos en detalle. También nos falta terminar de editar algunos de los audios de nuestras entrevistas para facilitar su escucha. Por favor, al evaluar esta preentrega consideren que esto es más bien un mockup sofisticado de la entrega final. En la versión actual las páginas más sofisticadas son la estación de transmilenio con los letreros interactivos, el bus B51 de los colados y la primera página con los marcianitos afuera de la nave. <br> Posdata: Casi no he usado chatgpt para programar esta vaina, entonces agradezco si comprenden que esto es más un mockup que otra cosa xd. <br> -Simón Díaz"
}
const textoBibliografia = {
  bibliografia: `
Cohen, H. (Director). (2016). <i>Life Underground</i> [Documental interactivo].<br><br>
Malaver, C. (2025, 28 agosto). <i>Así es como más de 7.000 ciudadanos, incluidos colados, pagan sus comparendos de convivencia con jornadas comunitarias.</i> <i>El Tiempo.</i><br><br>
Montoya, V., González, A., & Gómez, D. (2023). <i>Gallery 3 — Invisible Commutes.</i> <i>Invisible Commutes.</i><br><br>
Noticias Caracol. (2025, 11 septiembre). «Ya es la costumbre». . .\"No tenía sencillo\": Las excusas insólitas de los colados en TransMilenio [Vídeo]. <i>YouTube.</i><br><br>
Pardo, P., & Chappe, S. (2023). <i>Detrás del torniquete.</i> <i>Detrás del Torniquete.</i><br><br>
Restrepo Sánchez, D. (2023). <i>Colados en Transmilenio: El síntoma de una enfermedad.</i> <i>Arte-Facto: Revista De Estudiantes De Humanidades,</i> 25.<br><br>
Saavedra, F. (2025, 18 febrero). <i>Colados en Transmilenio hacen hasta fila para entrar sin pagar a las estaciones: imágenes generan polémica.</i> <i>Infobae.</i><br><br>
Sanguino Galvis, J. (2020). <i>Aproximación de la teoría de juegos a la disminución del número de colados en Transmilenio.</i> <i>Universidad de los Andes.</i><br><br>
TransMilenio. (2018, 23 abril). <i>¿Cómo se va a solucionar el tema de los colados?</i> Recuperado 21 de octubre de 2025.
`
}

function actualizarTextoBitacora(event) {
  seleccion.innerHTML = textoBitacora[event.target.id] || "...";
}
function actualizarTextoCreditos(event) {
  seleccion.innerHTML = textoCreditos[event.target.id] || "...";
}
function actualizarTextoDesarrollador(event) {
  seleccion.innerHTML = textoDesarrollador[event.target.id] || "...";
}
function actualizarTextoBiografia(event) {
  biblio.innerHTML = textoBibliografia[event.target.id] || "...";
}

function resetTexto(){
  seleccion.innerHTML = "...";
}
function resetBiblio(){
  biblio.innerHTML = "";
}

document.getElementById("bitacora").addEventListener("click", actualizarTextoBitacora);
document.getElementById("bitacora").addEventListener("click", resetBiblio);
document.getElementById("creditos").addEventListener("click", actualizarTextoCreditos);
document.getElementById("creditos").addEventListener("click", resetBiblio);
document.getElementById("desarrollador").addEventListener("click", actualizarTextoDesarrollador);
document.getElementById("desarrollador").addEventListener("click", resetBiblio);
document.getElementById("bibliografia").addEventListener("click", actualizarTextoBiografia);
document.getElementById("bibliografia").addEventListener("click", resetTexto);