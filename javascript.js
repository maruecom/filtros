
// Tenemos un listado de productos

var productos = [
    {nombre: "zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
    {nombre: "zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
    {nombre: "bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
    {nombre: "bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
    {nombre: "zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
  ]
  
  
  
  
  
  
  
  // Seleccionamos el listado apenas empezamos, porque
  // queremos tener esta variable disponible en todo nuestro codigo
  var listado = document.getElementById("lista-de-productos")
  
  
  
  
  
  
  // Para mostrarlos, recorremos el listado con un for 
  for (let i = 0; i < productos.length; i++) {
    // Creamos un div, le añadimos el nombre y la imagen 
    var div = document.createElement("div")
    div.classList.add("producto")
  
    var titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productos[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    div.appendChild(titulo)
    div.appendChild(imagen)
  
    // Agregamos el div al listado 
    listado.appendChild(div)
  }
  
  
  var botonDeFiltro = document.querySelector("button")
  
  botonDeFiltro.onclick = function() {
  
    // primero, recorremos con un while todos los "hijos" del listado
    // y los borramos
  
    while (listado.firstChild) {
      listado.removeChild(listado.firstChild);
  }
  
  let busqueda = document.querySelector("input");
 
  
  
  

  for (let i = 0; i < productos.length; i++){
    

    if (busqueda.value == productos[i].tipo  || busqueda.value == productos[i].color || busqueda.value == productos[i].nombre) {
     
      
      var div = document.createElement("div")
      div.classList.add("producto")
    
      var titulo = document.createElement("p")
      titulo.classList.add("titulo")
      titulo.textContent = productos[i].nombre
      
      var imagen = document.createElement("img");
      imagen.setAttribute('src', productos[i].img);
    
      div.appendChild(titulo)
      div.appendChild(imagen)
    
      // Agregamos el div al listado 
      listado.appendChild(div)
      
    }

  }
   

}
  

const nombre = "Ada";

const profesion = "programadora";

console.log(`mi nombre es ${nombre} y soy ${profesion}`); 

// completá el código acá
  
  
  



  // Tarea: 
  // Si el usuario escribe "zapato", mostrar los zapatos
  // Si el usuario escribe "bota", mostrar las botas
  // Si el usuario escribe "negro", mostrar el zapato y la bota negros
  // Si el usuario escribe "azul", mostrar el zapato y la bota azules
  
  
  // Para puntos extra:
  // Dejar la pagina mas linda con CSS 