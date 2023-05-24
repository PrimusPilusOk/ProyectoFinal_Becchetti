
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form_vete").addEventListener("submit", function(event) {
    event.preventDefault();

    let datos = [
      { nombre: "Tuki", especie: "Perro", raza: "Labrador", edad: 5, veterinario: "jorge" },
      { nombre: "Michi", especie: "Gato", raza: "Siames", edad: 2, veterinario: "maria" },
      { nombre: "Piki", especie: "Iguana", raza: "?", edad: 3, veterinario: "cesar" },
      { nombre: "jorge", especialidad: "Perros", telefono: "0-800-1234" },
      { nombre: "maria", especialidad: "Gatos", telefono: "0-800-4321" },
      { nombre: "cesar", especialidad: "Reptiles", telefono: "0-800-1122" },
    ];

    function buscarVeterinario(nombreVeterinario) {
      let paciente = datos.find(function(elemento) {
        return elemento.veterinario === nombreVeterinario;
      });

      if (paciente) {
        let veterinario = datos.find(function(elemento) {
          return elemento.nombre === paciente.veterinario && "especialidad" in elemento;
        });

        if (veterinario) {
          return veterinario;
        }
      }

      return null;
    }

    let nombreVeterinario = document.getElementById("nombreVeterinario").value.toLowerCase();
    let veterinarioEncontrado = buscarVeterinario(nombreVeterinario);

    let resultContainer = document.createElement("div"); 

    if (veterinarioEncontrado !== null) {
      let especialidad = veterinarioEncontrado.especialidad;
      let telefono = veterinarioEncontrado.telefono;

      let resultText = document.createTextNode("Especialidad: " + especialidad + " / Teléfono: " + telefono);
      resultContainer.appendChild(resultText);
    } else {
      let resultText = document.createTextNode("¡Perdón! No se encontró ningún profesional veterinario con ese nombre.");
      resultContainer.appendChild(resultText);
    }

    let mainElement = document.querySelector("main");
    mainElement.appendChild(resultContainer);
  });
});
