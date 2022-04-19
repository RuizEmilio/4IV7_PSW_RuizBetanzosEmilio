// VALIDACIONES

window.onload = function() { // ONPASTE
    var nombre = document.getElementById('Nombre');
    var appat = document.getElementById('Appat');
    var apmat = document.getElementById('Apmat');
    var telefono = document.getElementById('Telefono');

    nombre.onpaste = function(e) {
      e.preventDefault();
    }

    appat.onpaste = function(e) {
        e.preventDefault();
    }

    apmat.onpaste = function(e) {
        e.preventDefault();
    }
    
    telefono.onpaste = function(e) {
      e.preventDefault();
    }
  }

// VALIDACION SOLO LETRAS

function validar (e){
    var key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    abec = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz ";
    var especiales = [];
    var teclaEspecial = false;
    for(let i in especiales){
        if(key == especiales[i]){
            teclaEspecial = true;
            break;
        }
    }
    if(abec.indexOf(tecla) == -1 && !teclaEspecial){
        return false;
    }
}

// VALIDACION SOLO NUMEROS

function validar1 (e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;
    var validacion  =/[0-9\d]/;
    var comprobacion = String.fromCharCode(entrada);
    return validacion.test(comprobacion);
}

// VALIDAR TIPO DE ARCHIVO

function validarArchivo (){
    var foto = document.getElementById('Foto');
    var fotoRuta = foto.value;
    var extenciones = /(.jpg|.PNG)$/i;
    if(!extenciones.exec(fotoRuta)){
        alert('Solo archivos JPG o PNG');
        foto.value = '';
        return false;
    }
}