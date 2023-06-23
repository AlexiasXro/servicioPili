 const listaCarrito = document.getElementById('lista-carrito');
 const totalCarrito = document.getElementById('total');
 const productos = document.querySelectorAll('.producto');
 const carrito = [];

 
 function agregarAlCarrito(nombre) {
     carrito.push(nombre);
     actualizarCarrito();
 }

 
 function actualizarCarrito() {
     listaCarrito.innerHTML = '';
     let total = 0;

     carrito.forEach(nombre => {
         const li = document.createElement('li');
         li.textContent = nombre;
         listaCarrito.appendChild(li);
         total += 1; // Aquí puedes agregar la lógica para calcular el total real
     });

     totalCarrito.textContent = `Total: ${total}`;
 }

 
 productos.forEach(producto => {
     producto.addEventListener('dragstart', function (event) {
         event.dataTransfer.setData('text/plain', producto.dataset.nombre);
     });
 });

 
 carrito.addEventListener('dragover', function (event) {
     event.preventDefault();
 });

 carrito.addEventListener('drop', function (event) {
     event.preventDefault();
     const nombreProducto = event.dataTransfer.getData('text/plain');
     agregarAlCarrito(nombreProducto);
 });