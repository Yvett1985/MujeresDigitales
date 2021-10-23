console.log('Ejercicio')

var actividad = [];

var almacenar = function(){
    var nombre = document.getElementById('nombre_mascota').value
    var edad = document.getElementById('edad_mascota').value
    var dueno = document.getElementById('dueño_mascota').value


    actividad.push({name:nombre,age:edad,ower:dueno})
    var x = JSON.stringify(actividad)
    console.log(x)
    alert('Prueba')
    localStorage.setItem('informacion',x) //Guardar en LocalStorage
}


var existe = localStorage.getItem('informacion')
console.log(existe)
if(existe != null){
    console.log('si entro')
    actividad = JSON.parse(localStorage.getItem('informacion').toString())
}


