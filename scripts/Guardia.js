
document.addEventListener("DOMContentLoaded", function() {
  const form_guardia = document.getElementById("form_guardia");
  form_guardia.addEventListener("submit", function(event) {
      event.preventDefault();
      let nombrePaciente = document.getElementById("nombre_dueno").value;
      let nombreMascota = document.getElementById("nombre_mascota").value;
      let resultados = document.getElementById("resultados");
      resultados.innerHTML = "";
      let randomNum = Math.floor(Math.random() * 20) + 1;
      let mensaje = "El cliente " + nombrePaciente + " con su mascota " + nombreMascota + " tiene asignado el turno número: " + randomNum + "<br>";
      resultados.innerHTML = mensaje;
  });
});
