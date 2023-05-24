
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
