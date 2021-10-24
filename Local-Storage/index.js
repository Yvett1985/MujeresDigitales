console.log('hola mundo')

var misdatos = [];


var guardar = function(){
    var nombre2 = document.getElementById('nombre').value
    var apellido2 = document.getElementById('apellido').value

    misdatos.push({nombre:nombre2,apellido:apellido2}) //Subir datos (Regsitro)
    var x = JSON.stringify(misdatos) //Convertir cadena de texto
    console.log(x)
    alert('Prueba')
    localStorage.setItem('datos',x) //Almacenar datos

    // localStorage.setItem('nombre', nombre)
    // localStorage.setItem('apellido', apellido)

}

var cargar = function(){
    swal("Hello world!");  
    // document.getElementById('nombre').value = localStorage.getItem('nombre')
    // document.getElementById('apellido').value = localStorage.getItem('apellido')
}

var existe = localStorage.getItem('datos')
console.log(existe)
if(existe != null){
    console.log('si entro')
    misdatos = JSON.parse(localStorage.getItem('datos').toString())
}

var eliminarlocal = function(){
    console.log('eliminando datos')
    //localStorage.removeItem('datos')
    localStorage.clear()
}




