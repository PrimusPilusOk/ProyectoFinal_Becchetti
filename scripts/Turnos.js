
document.addEventListener("DOMContentLoaded", function() {
  const form_turnos = document.getElementById("form_turnos");
  form_turnos.addEventListener("submit", function(event) {
    event.preventDefault();
    const turnosElegidos = parseInt(document.getElementById("cantidad_turnos").value);
    const slots = document.querySelectorAll(".slot:not(.occupied)");
    const selectedSlots = Array.from(slots).sort(() => 0.5 - Math.random()).slice(0, turnosElegidos);
    selectedSlots.forEach(slot => {
      slot.classList.add("occupied");
    });
    const descuento = document.getElementById("jubilado").checked;
    const porcentajeDescuento = descuento ? 30 : 0;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Turnos elegidos: ${turnosElegidos}<br><br>Porcentaje de descuento: ${porcentajeDescuento}%`;
  });
});
