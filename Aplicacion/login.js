var iniciarsesion = function(){
    var email = document.getElementById('inputEmail').value
    var password = document.getElementById('inputPassword').value

    console.log(email)
    console.log(password)

    if(email == null || email == '' || email == undefined){
        alert('Email es obligatoorio')
        return false; //No deja seguir al siguiente CAMPO hasta que no se llene 
    }

    if(password == null || password == '' || password == undefined){
        alert('Password es obligatoorio')
        return false;
    }

       
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(email)) {
      alert('Correo Valido')
      
    } else {
      alert('Correo Invalido')
      return false
    }
} 