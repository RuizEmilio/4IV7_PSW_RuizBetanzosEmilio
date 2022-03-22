// REALIZAR FUNCION DE ENTRADA DE NUMEROS POR MEDIO DE UNA EXPRESION REGULAR

function validar (e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;
    var validacion  =/[0-9\d .]/;
    var comprobacion = String.fromCharCode(entrada);
    return validacion.test(comprobacion);
}

function interes (){
    var valor = document.formulario.cantidad.value;
    var resul = parseInt(valor);
    var interes = resul*.037;
    var total = interes + resul;
    document.formulario.SueldoConInteres.value = '$' + total;
}

function borrarF(){
    document.formulario.cantidad.value = ' ';
    document.formulario.SueldoConInteres.value = ' ';
}