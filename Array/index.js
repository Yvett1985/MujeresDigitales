var valor1 = 0;
var valor2 = 0;
var nombre = 'Yarymi'
var apellido = 'Ordonez'

var multiplica = function(){
    console.log(valor1 * valor2) 
}

var suma = function(){
    console.log(valor1 + valor2) 
}

var resta = function(){
    console.log(valor1 - valor2) 
}

var dividir = function(){
    console.log(valor1 / valor2) 
}

var nombrecompleto = function(){
    console.log(nombre + ' ' + apellido)
}

var obtener = function(){
    console.log('obteniendo datos')
    var a = document.getElementById('prueba1').value
    var b = document.getElementById('prueba2').value
    valor1 = parseInt (a);
    valor2 = parseInt (b);
 }


 for (var index = 0; index <= 20; index ++ ) {
     console.log('5' + 'X' +  index + '=' + (5*index))
 }

 for (var camilo = 0; camilo <= 5; camilo++) {
     console.log(camilo)             
 }



 var dato1 = 4
 var dato2 = 5

 if (true) {
     console.log('si se cumplio la condicion')
 }else{
     console.log('no se cumplio la condicion')
 }

 if ('jhon' != 'juan') {
     console.log('si se cumplio la condicion')
 }else{
     console.log('no se cumplio la condicion')
 }

 if (dato1 < dato2) {
     console.log('si se cumplio la condicion')
 }else{
     console.log('no se cumplio la condicion')
 }

 if (4<5 && 3>2 && 1>0){
     console.log('si se cumplio la condicion')
 }else{
     console.log('no se cumplio la condicion')
 }

 if (1==2 || 4==4){
     console.log('si se cumplio la condicion')
 }else{
     console.log('no se cumplio la condicion')
 }
     
 if (2 == (1+1)) {
     console.log('si se cumplio la condicion')
 }else{
     console.log('no se cumplio la condicion')
 }


 /*Ejericicio switch*/
 
 var dato = 100;
 var analizar = function(){
     switch (dato){
     case 100:
         console.log('el valor es 100')
         break;
     
     case 200:
         console.log('el valor es 200')
         break;

     case 300:
         console.log('el valor es 300')
         break;

     default:
         console.log('ninguno')
         break;
 }
 dato = dato + 100
 }

 /*Comparación if*/

 var dato = 100;
 var analizar = function(){

     if(dato == 100){
         console.log('100')
     }

     if(dato == 200){
         console.log('200')
     }

     if(dato == 300){
         console.log('300')
     }
     if(dato != 100 && dato != 200 && dato != 300)
         console.log('ninguno')
 dato = dato + 100
 }

 /*Ejercicio While*/

 var dato1 = 100
 while (dato1 < 120){
     console.log('imprimir')
     dato1 = dato1 + 1
 }

 var booEstado = true
 var contador = 0;
 while(booEstado){

     contador = contador + 1;

     console.log('imprimir')

     if (contador == 5){
         booEstado = false;
     }
 }




 /*Ejercicio ARRAY*/

 /*var contenedor = document.getElementById('contenedordedatos')
 contenedor.innerHTML = "<h1 onclick = 'agregarinformacion()'>hola mundo</h1>"
 console.log(contenedor)*/

 var contenedor = document.getElementById('contenedordedatos')
 var listadedatos = [];
 var agregarinformacion = function(){

     var nombre = document.getElementById('minombre').value
     listadedatos.push(nombre)

    contenedor.innerHTML = ''
     for (var a = 0; a < listadedatos.length; a++){

        if(listadedatos[a] != 'juan'){
            contenedor.innerHTML = contenedor.innerHTML + '' + listadedatos[a] + '<br>'           
        }else{
            contenedor.innerHTML = contenedor.innerHTML + 'profesor <br>' 
        }
        console.log(listadedatos[a])
     }
     
 }

 /*var listadedatos = [0,1,2,3,4,5,6,100];
 console.log(listadedatos)

 var listadedatos = ['juan', 'camilo', 'jose', 'lucas'];
 console.log(listadedatos)

 var registro20 = {nombre: 'juan', apellido: 'castro', edad:'36'}
 var registro21 = {nombre: 'camilo', apellido: 'castro', edad:'36'}
 var registro22 = {nombre: 'jose', apellido: 'castro', edad:'36'}

 var listadedatos = [registro20, registro21, registro22];
 console.log(listadedatos)

 var listadedatos = [{nombre: 'juan', apellido: 'castro', edad:'36'}, {nombre: 'camilo', apellido: 'castro', edad:'36'}, {nombre: 'jose', apellido: 'castro', edad:'36'}];
 console.log(listadedatos)

 var listadedatos = ['juan', 'camilo', 'jose'];
 console.log(listadedatos[1])

 var listadedatos = [];
 listadedatos.push('juan')
 listadedatos.push('camilo')
 listadedatos.push('jose')
 console.log(listadedatos)



 var agregarinformacion = function(){
     var nombre = document.getElementById('minombre').value
     listadedatos.push(nombre)
     console.log(listadedatos)
 }

    var agregarinformacion = function(){
    var nombre = document.getElementsByClassName('pruebax')[0].value
    listadedatos.push(nombre)
    console.log(listadedatos)
}

var agregarinformacion = function(){
    var nombre = document.getElementsByName('xx')[0].value
    listadedatos.push(nombre)
    console.log(listadedatos)
}*/

var tabla = document.getElementById('tablademultiplicar')

for (let a = 0; a < 100; a++) {
    tabla.innerHTML = tabla.innerHTML + "5 X "+ a +" = "+ (5*a) +" <br>" 
    
}

var tabla = document.getElementById('tablademultiplicar')

var datox = []

function agregarcontenido(){
    datox.push('juan')
    datox.push('camilo')
    datox.push('jose')
}

function mostrardatos(){
    tabla.innerHTML = ''
    for (var a = 0; a < datox.length; a++) {
        tabla.innerHTML = tabla.innerHTML + datox[a] + "<br>" 
        
    }
}

var mivariablearray = ["goku", "goham", "roshi", "krilin"]
//var tmp = ['sara', 'ana']
//Para eliminar el ultimo registros
//mivariablearray.pop()

//Para quitar elementos 
//mivariablearray.splice(0,2)

//Para cambiar el orden de la Array
//mivariablearray.reverse()

//Para converir mi ARRAY en cadena de texto separada de caracteres
//var temporal = mivariablearray.join('-')

/*for (key of mivariablearray.keys()){
    console.log(key)
    tabla.innerHTML = tabla.innerHTML + key + "<br>"
}*/

/*for (key of mivariablearray.keys()){
    console.log(key)
    mivariablearray[key] = key + ''
}*/

//console.log(mivariablearray)

//Para Contatenar
//var x = mivariablearray.concat(tmp)

//Para Indenxar y encontrar información
//var x = mivariablearray.indexOf('roshi')
//mivariablearray[x] = mivariablearray[x] + 'Holamundo'
//console.log(mivariablearray)

var buscarycambiar = function(){
var criteriodebusqueda = document.getElementById('criterio').value
var posicion = mivariablearray.indexOf(criteriodebusqueda)
if (posicion > 0){
    mivariablearray.splice(posicion, 1) //splice es para borrar
    console.log(mivariablearray)

}else{
    alert('no se encuentra ese dato')
}

}












 