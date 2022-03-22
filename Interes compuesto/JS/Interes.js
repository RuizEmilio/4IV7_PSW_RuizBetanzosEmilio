// INTERES COMPUESTO

function validar (e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;
    var validacion  =/[0-9\d .]/;
    var comprobacion = String.fromCharCode(entrada);
    return validacion.test(comprobacion);
}

//VALIDAR PRECIOS, ENGANCHE Y MESES

function validarD(){
    var precioN = document.formulario.precio.value;
    var engancheN = document.formulario.enganche.value;
    var mesesN = document.formulario.meses.value;
    if(precioN==""&&engancheN==""&&mesesN==""){
        alert('DEBES DE LLENAR LOS DATOS DE LA COMPRA');
        return false;
    }
    else{
    if(precioN < 100000){
        alert('EL PRECIO DEBE SER MAYOR A $100000');
        return false;
    }
    else if(precioN > 1000000){
        alert('EL PRECIO DEBE SER MENOR A $1000000');
        return false;
    }
    if(engancheN < precioN/10||engancheN >= precioN){
        alert('EL ENGANCHE DEBE SER MAYOR A $' + precioN/10 + ' Y MENOR A ' + precioN);
        return false;
    }
    if(mesesN != '3' && mesesN !='6' && mesesN != '9' && mesesN != '12' && mesesN != '18'){
        alert('EL ENGANCHE SOLO ES DE 3, 6, 9, 12 O 18 MESES');
        return false;
    }
    }
    return true
}

// CALCULO DE INTERES

function interes (){
    // console.log('Hola Mundo'); PRUEBA
    var audio1 = document.getElementById('audio1');
    var precio = document.formulario.precio.value;
    var enganche = document.formulario.enganche.value;
    var meses = document.formulario.meses.value;
    var pagos = document.formulario.pagos;
    var precioN = parseInt(precio);
    var engancheN = parseInt(enganche);
    var mesesN = parseInt(meses);
    if(validarD() == true){
    var precioInteres = precioN - engancheN;
    var total = precioInteres*(1.0394)**mesesN
    var mostrar = document.formulario.total;
    pagos.value = precioInteres;
    mostrar.value = total;
    audio1.play();
    }
}

//LIMPIANDO LOS CAMPOS

function borrarF(){
    document.formulario.precio.value = ' ';
    document.formulario.meses.value = ' ';
    document.formulario.enganche.value = ' ';
    document.formulario.total.value = ' ';
    document.formulario.pagos.value = ' ';
}

// AUDIO PRINCIPAL

function ejecutar(){
    var audio2 = document.getElementById('audio2');
    audio2.play();
}