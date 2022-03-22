function validar(formulario){

    if(formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 Caracteres para el nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNMÑ"
    +"qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }


    var checkOK = "0123456789";

    var checkStr = formulario.edad.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente numeros en el campo de edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.email.value;

    //Expresiones locas

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/; // Esta parte no le agarre tanto la onda XD

    alert("Email "+ (b.test(txt)?" ":"no")+" valido");

    return b.test;

}