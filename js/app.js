/// prueba jquery

/* $(document).ready(function () {
   alert("esta mierda esta lista BB")
});
 */

// CONSTRUCTOR CARRITO DE COMPRAS Y PRODUCTOS
class CarritoDeCompras {
   constructor(date, nombreInput, apellidoUsuario) {
      this.date = date
      this.nombreUsuario = nombreInput
      this.apellidoUsuario = apellidoUsuario
      this.precioTotal = 0
      this.items = []
      this.getName = () => {
         this.nombreUsuario = prompt("ingrese su nombre")
      }
      this.getLastName = () => {
         this.apellidoUsuario = prompt("ingrese su apellido")
      }
   }
   agregarProducto(producto) {
      this.items.push(producto)

   }

   obtenerProductos() {
      return this.items
   }
   calcularPrecio() {
      this.items.map((v) => {
         this.precioTotal = v.precio + this.precioTotal
      })
   }
};

class producto {
   constructor(nombre, tipo, precio, id, image) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.precio = precio;
      this.id = id;
      this.image = image;
   }
}

// NUEVO CARRITO 

const carrito = new CarritoDeCompras(new Date(), " ", " ");
carrito.getName();
carrito.getLastName();

// PRODUCTOS
const cafe = new producto("Cafe", "Bebida", 350, "1", "./assets/cafe.png");
const gaseosa = new producto("Coca-Cola", "Bebida", 500, "2", "./assets/cocacola.png");
const sandwichMiga = new producto("Tostado de miga", "Sandwich", 350, "3", "./assets/tostado.png");
const ensalada = new producto("Ensalada", "Comida", 350, "4", "./assets/ensalada.png");
const wrap = new producto("Wrap de pollo", "Comida", 50, "5", "./assets/wrap.png");

// AGREGAR PRODUCTOS AL CARRITO
carrito.agregarProducto(cafe);
carrito.agregarProducto(wrap);
carrito.agregarProducto(gaseosa);
carrito.agregarProducto(sandwichMiga);
carrito.agregarProducto(ensalada);
carrito.agregarProducto(gaseosa);
carrito.agregarProducto(cafe);
carrito.agregarProducto(wrap);
carrito.agregarProducto(gaseosa);
carrito.agregarProducto(sandwichMiga);
carrito.agregarProducto(wrap);
carrito.agregarProducto(ensalada);
carrito.agregarProducto(cafe);
carrito.agregarProducto(wrap);
carrito.agregarProducto(gaseosa);
carrito.agregarProducto(cafe);
carrito.agregarProducto(ensalada);
carrito.agregarProducto(gaseosa);
console.log(carrito);
console.log(carrito.obtenerProductos());

console.log(carrito.precioTotal);
let products = [
   carrito.obtenerProductos()
]



// SALUDO USUARIO

let header = document.querySelector("header")
let usuario = document.createElement("div");
header.appendChild(usuario);

usuario.innerHTML =
   `<img src="assets/icon-mis-gifos-sin-contenido.svg" alt="avatar" id="avatar">
   <h1 id= "saludo" > BIENVENIDO!! </h1>
   <h2 id ="nombreUsuario"> ${carrito.nombreUsuario}  ${carrito.apellidoUsuario} </h2>
   <p id= "bajada" > Hagamos tu pedido ;D </p>`;




///PRUEBAS!!!!

const listaFinalCarrito = [];


const addValueToList = (value) => {
   console.log(value);
   let findValue = listaFinalCarrito.find((v) => {
      return v.nombre == value.nombre
   });
   if (findValue) {
      alert("Esta repitiendo un Producto");
      listaFinalCarrito.push(value);
   } else {
      listaFinalCarrito.push(value);
   }
}

// TARJETAS PRODUCTOS

const initCarrito = () => {

   const lista = document.querySelector(".contenedor")
   carrito.items.map((productos) => {
      const miniContenedor = document.createElement('div')

      const nombre = document.createElement("h4");
      const tipo = document.createElement('p');
      const precio = document.createElement('span');
      const imagen = document.createElement('img');



      miniContenedor.className = "tarjeta";
      nombre.className = "nombreProducto";
      precio.className = "precioProducto";
      tipo.className = "tipoProducto";
      imagen.className = "imgProducto";
      imagen.src = `${productos.image}`;


      nombre.textContent = `${productos.nombre}`;
      tipo.textContent = `${productos.tipo}`;
      precio.textContent = `$ ${productos.precio}`;

      lista.appendChild(miniContenedor);


      miniContenedor.appendChild(nombre);
      miniContenedor.appendChild(tipo);
      miniContenedor.appendChild(precio);
      miniContenedor.appendChild(imagen);

      miniContenedor.onmouseover = () => {
         miniContenedor.style.width = "130px";
         miniContenedor.style.height = "260px";
      }
      miniContenedor.onmouseout = () => {
         miniContenedor.style.width = "120px";
         miniContenedor.style.height = "250px";
      }
      miniContenedor.onclick = () => {
         products.map((v) => {
            addValueToList(productos);
         })
      }
   })

}

initCarrito();

const initCarritoFinal = () => {

   const contenedorCarrito = document.querySelector(".contenedorCarrito")
   listaFinalCarrito.map((products) => {
      const miniContenedorFinal = document.createElement('div')

      const nombre = document.createElement("h4");
      const tipo = document.createElement('p');
      const precio = document.createElement('span');
      const imagen = document.createElement('img');


      contenedorCarrito.appendChild(miniContenedorFinal);

      miniContenedorFinal.className = "tarjetaFinal";
      nombre.className = "nombreProducto";
      precio.className = "precioProducto";
      tipo.className = "tipoProducto";

      nombre.textContent = `${products.nombre}`;
      tipo.textContent = `${products.tipo}`;
      precio.textContent = `$ ${products.precio}`;

      imagen.src = `${products.image}`;



      miniContenedorFinal.appendChild(nombre);
      miniContenedorFinal.appendChild(tipo);
      miniContenedorFinal.appendChild(precio);
      miniContenedorFinal.appendChild(imagen);

   })
   console.log("la funcion anda");
}

const button = document.getElementById("ready");
/* button.onclick = () => {
   initCarritoFinal()
   button.disabled = "disabled"
} */


/// PRUEBAS
$(document).ready(function () {
   $('#ready').click(() => {
      initCarritoFinal()
      button.disabled = "disabled"
      console.log('esto deberia andar');
      $('#listaProductos').slideUp(1500)
   })
});


console.log("lista final carrito", listaFinalCarrito);