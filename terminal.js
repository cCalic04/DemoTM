const seleccion = document.getElementById("seleccion");
const biblio = document.getElementById("selecBiblio");

const textoBitacora = {
  bitacora: ">Día 1. Aterrizamos en un área pantanosa y con un olor extraño. Parece que estamos en el hábitat de una especie urbana primitiva. <br> >Día 5. La nave no está arrancando. Intentamos utilizar combustibles de hidrocarburos rudimentarios, los robamos de un taller nativo. No funcionó. <br> >Día 12. Seguimos robando hidrocarburos de los simios primitivos que habitan este pantano. No ha dado resultados. Pero es muy divertido salir a verlos jugar en las estaciones donde abordan sus naves terrestres. <br> > Día 15. Estamos empezando a pensar que, en realidad, esto no es un juego. No todos los simios se divierten al abordar las naves. Además, parece que aquellos que están uniformados se sienten muy disgustados con los que están jugando. <br> >Día 16. El reactor núclear de la nave está completamente averiado, oficialmente estamos varados aquí. <br> >Día 23. Hemos estado recorriendo el pantano de manera extensiva. Es muy interesante, y tiene muchos tipos de gente distinta. Estamos comenzando a entender un poco mejor la cultura de los 'humanos'. <br> >Día 27. Se agotaron las raciones de la nave, nos vimos obligados a alimentarnos con un tipo de alimento nativo conocido como 'arepa'. Estaba rico. <br> >Día 34. Hemos estado conviviendo constantemente con los humanos. Nos gusta abordar sus naves terrestres para explorar su ciudad. Nos divierte mucho ver sus juegos de agilidad: hacen todo tipo de maromas para abordar las naves sin pagar. <br> >Día 52. Estamos construyendo un simulador de Transmilenio para entender mejor la cultura humana."
}
const textoCreditos = {
  creditos: "Diseño Web: Simón Díaz. <br> Entrevistas: Andrés Gonzalez, Danna Benitez, Emmanuel Guerrero y Samuel Santiago. <br> Ilustraciones: Samuel Santiago y Simón Díaz. <br> Poster: Samuel Santiago. <br> Trailer: Andrés Gonzalez, Danna Benitez y Simón Díaz."
}
const textoDesarrollador = {
  desarrollador: "Agregamos audios de ambiente. Optamos por ambiente en lugar de música porque consideramos que esto caracteriza mejor la temática del trabajo. Es posible que se presenten algunos problemas al momento de reproducir los sonidos, porque la mayoría de los navegadores bloquean el sonido en autoplay automaticamente. Les recomendamos estar pendientes de estarle otorgando permisos a la página, para que los sonidos se puedan reproducir bien. Tuvimos que quitar una ruta porque no hubo material suficiente.<br> -Simón Díaz"
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