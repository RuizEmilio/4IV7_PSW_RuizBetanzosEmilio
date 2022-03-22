// FUNCIONES
function validar (e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;
    var validacion  =/[0-9\d .]/;
    var comprobacion = String.fromCharCode(entrada);
    return validacion.test(comprobacion);
}

// PRIMER PROBLEMA

function interes (){
    var meses = document.formulario.meses.value;
    var valor = document.formulario.cantidad.value;
    var resul = parseInt(valor);
    var mesesN = parseInt(meses);
    if (valor > 0 && mesesN >= 0){
        if(mesesN < 49 && mesesN > 0){
            var interes = resul*(1.02)**mesesN;
            var total = interes - resul;
            document.formulario.inversion.value = '$' + total;
        }
        else {
            alert('Tiene que ser menor a 49 meses y mayor a 0');

        }
    }
    else {
        alert('Tiene que llenar los campos')
    }
}

function borrarF1(){
    document.formulario.cantidad.value = '';
    document.formulario.inversion.value = '';
    document.formulario.meses.value = '';
}

// SEGUNDO PROBLEMA

function calcularSueldo (){
    var salario = parseInt(document.formulario1.salario.value);
    var venta1 = parseInt(document.formulario1.venta1.value);
    var venta2 = parseInt(document.formulario1.venta2.value);
    var venta3 = parseInt(document.formulario1.venta3.value);
    if(salario > 0 && venta1 > 0 && venta2 > 0 && venta3 > 0){
        var comision = (venta1 + venta2 + venta3)/10;
        var sueldo = salario + comision;
        document.formulario1.comisiones.value = comision;
        document.formulario1.salarioT.value = sueldo;
    }
    else {
        alert('Llena todos los campos para poder continuar')
    }
}

function borrarF2 (){
    document.formulario1.comisiones.value = '';
    document.formulario1.salarioT.value = '';
    document.formulario1.salario.value = '';
    document.formulario1.venta1.value = '';
    document.formulario1.venta2.value = '';
    document.formulario1.venta3.value = '';
}

// TERCER PROBLEMA

function calcularCompra (){
    var monto = parseInt(document.formulario2.montoI.value);
    if(monto > 0){
        var costoT = monto - (monto*.15);
        document.formulario2.costoT.value = costoT;
    }
    else {
        alert('Tiene que llenar el campo para seguir')
    }
}

function borrarF3 (){
    document.formulario2.montoI.value = '';
    document.formulario2.costoT.value = '';
}

// CUARTO PROBLEMA

function calcularCalif (){
    var cal1 = parseInt(document.formulario3.calif1.value);
    var cal2 = parseInt(document.formulario3.calif2.value);
    var cal3 = parseInt(document.formulario3.calif3.value);
    var calT = parseInt(document.formulario3.califTF.value);
    var calE = parseInt(document.formulario3.califEF.value);
    if(cal1 >= 0 && cal2 >= 0 && cal3 >= 0 && calE >= 0 && calT >= 0){
        if(cal1 < 11 && cal2 < 11 && cal3 < 11){ // ES UNA CALIFICACION QUE EXISTE
            var promC = (cal1 + cal2 + cal3)/3;
            var total = (promC*.55) + (calT*.15) + (calE*.30);
            document.formulario3.calificacionF.value = promC;
    }
        else{
            alert('Ingrese calificaciones entre 0 y 10');
        }
    }
    else {
        alert('Llene adecuadamente todos los campos');
    }
}

function borrarF4 (){
    document.formulario3.calif1.value = '';
    document.formulario3.calif2.value = '';
    document.formulario3.calif3.value = '';
    document.formulario3.califEF.value = '';
    document.formulario3.califTF.value = '';
    document.formulario3.calificacionF.value = '';
}

// QUINTO PROBLEMA

function calcularPorcentaje (){
    var niñas = parseInt(document.formulario4.niñas.value);
    var niños = parseInt(document.formulario4.niños.value);
    if(niñas != 0 || niños != 0){
        niñasP = (100 * niñas)/(niñas + niños);
        niñosP = (100 * niños)/(niñas + niños);
        document.formulario4.niñasP.value = niñasP + '%';
        document.formulario4.niñosP.value = niñosP + '%';
    }
    else {
        alert('Ingrese por lo menos un alumno')
    }
}

function borrarF5 (){
    document.formulario4.niñasP.value = '';
    document.formulario4.niñosP.value = '';
    document.formulario4.niños.value = '';
    document.formulario4.niñas.value = '';
}

function validar5 (e){
    var entrada = (document.all)?e.keyCode:e.which;
    if(entrada == 8)return true;
    var validacion  =/[0-9\d]/;
    var comprobacion = String.fromCharCode(entrada);
    return validacion.test(comprobacion);
}

// SEXTO PROBLEMA

function calcularEdad (){
    const fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    var mesActual = fechaActual.getMonth() + 1;
    var diaActual = fechaActual.getDate();
    var fechaN = document.getElementById('fechaN').value;
    var fechaLista = fechaN.split('-');
    var añoN = fechaLista[0];
    var mesN = fechaLista[1];
    var diaN = fechaLista[2];
    var añoT = 0;
    var mesT = 0;
    var diaT = 0;
    if(mesActual >= mesN){
        if(diaActual >= diaN){
            añoT = añoActual - añoN; 
        }
        else{
            añoT = añoActual - añoN;
        }
    }
    else{
        añoT = añoActual - añoN - 1 ;
    }
    if(diaActual >= diaN){
        if(mesActual >= mesN){
            mesT = mesActual - mesN;
        }
        else{
            mesT = 12 - (mesN - mesActual); 
        }
        diaT = diaActual - diaN;
    }
    else{
        if(mesActual >= mesN){
            mesT = mesActual - mesN - 1;
        }
        else{
            mesT = 11 - (mesN - mesActual);
        }
        if(mesN = 11 || 4 || 8 || 6 || 2 || 9 || 1){
            diaT = 31 - diaN + diaActual;
        }
        else if(mesN = 5 || 7 || 10 || 12){
            diaT = 30 - diaN + diaActual;
        }
        else if(mesN = 3){
            diaT = 28 - diaN + diaActual;
        }
    }
    // AÑOS BISIESTOS

    var diferencia = 2020 - añoN;
    var bisiestos = diferencia/4;
    var diaB = bisiestos.toFixed(0);
    if(mesN > 2){
        diaB -= 1;
    }
    alert('Su edad es de ' + añoT + ' años con ' + mesT + ' meses y ' + (diaT + parseInt(diaB)) + ' dias.');
}