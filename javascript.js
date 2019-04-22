
var form = document.querySelector("form");




form.onsubmit = function (e){
    var nombre = document.getElementById("username");
    e.preventDefault();   
    //console.log(nombre.value);
    if (nombre.value.length < 3) {
        nombre.classList.add("malEscrito")
    } else {
        alert("Bienvenida");
        
    }
    var apellido = document.getElementById("pass");
    var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
   //console.log(apellido.value);
   if (pass.value.length < 8) {
       for (var i = 0; i < pass.value.length; i++) {
           //console.log(pass.value[i]);
       }
       for (var j = 0; j < numeros.length; j++) {
        //console.log(numeros[j]); 
           
    }
    
    if (pass.value[i] == numeros[j]) {
        alert(envio);
    } else{
        pass.classList.add("malEscrito");
    }
  
   }
   

}





form.onsubmit = function(evento) {
 evento.preventDefault();
console.log(select.options);  // retorna la colección de elementos options
console.log(select.selectedIndex);  // retorna el índice del valor seleccionado
var indice = select.selectedIndex
select.options[indice]; // retorna el option seleccionado
console.log(select.options[indice]); // retorna el elemento seleccionado.
console.log(select.options[indice].value); // retorna el valor del elemento seleccionado.
}


var checkboxes = document.getElementById("check")
var gato = checkboxes[0]; //manera cabeza de interactuar con las opciones dek checkbox
var perro = checkboxes[1];
var gato = document.querySelector("checked:input") // selecciona todos los que eligió el usuario


console.log(gato.checked);
console.log(gato.value);





/* Tarea: formulario
Input que pida el nombre
- Si el nombre tiene menos de 3 caracteres,
al enviar el formulario se pone rojo

Input que pida un password
- Si el password tiene menos de 8 caracteres
o no tiene ningun numero, al enviar
el formulario se pone en rojo

- Select de opciones (mascotas, pokemones, etc)
Al enviar el form, si esta bien todo, navegamos a
la opcion seleccionada */