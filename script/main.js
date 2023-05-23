console.log("Hola! Bienvenid@ a PetCare!");

/* check */

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

///////////

/* check */

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

///////////

/* check */

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form_vete").addEventListener("submit", function(event) {
    event.preventDefault();

    let datos = [
      { nombre: "Tuki", especie: "Perro", raza: "Labrador", edad: 5, veterinario: "Jorge" },
      { nombre: "Michi", especie: "Gato", raza: "Siames", edad: 2, veterinario: "Maria" },
      { nombre: "Piki", especie: "Iguana", raza: "?", edad: 3, veterinario: "Cesar" },
      { nombre: "Jorge", especialidad: "Perros", telefono: "0-800-1234" },
      { nombre: "Maria", especialidad: "Gatos", telefono: "0-800-4321" },
      { nombre: "Cesar", especialidad: "Reptiles", telefono: "0-800-1122" },
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

    let nombreVeterinario = document.getElementById("nombreVeterinario").value;
    let veterinarioEncontrado = buscarVeterinario(nombreVeterinario);

    let resultContainer = document.createElement("div"); // Create a new <div> element to hold the result

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

///////////

class Producto {
constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
}};

const formulario_producto = document.getElementById("formulario_producto");
formulario_producto.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const producto = new Producto(nombre, precio, cantidad);
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
    document.getElementById("mensaje").textContent = "Producto agregado";
    mostrarProductos();
    formulario_producto.reset();
});

function mostrarProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = "";
    productos.forEach((producto, index) => {
      const productoHTML = `
        <div>
          <h3>Producto ${index+1}</h3>
          <p><strong>Nombre:</strong> ${producto.nombre}</p>
          <p><strong>Precio:</strong> $${producto.precio}</p>
          <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
        </div>
      `;
productosContainer.innerHTML += productoHTML;
});}

mostrarProductos();