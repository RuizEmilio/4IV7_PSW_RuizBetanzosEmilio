// PRIMER PROBLEMA

function volteo (){
    var frase = document.getElementById('p1-input').value;
    var fraseLista = frase.split(' ');
    var fraseN = '';
    for(let i = fraseLista.length - 1 ; i >= 0 ; --i){
        console.log(fraseLista[i]);
        fraseN += ' ' + fraseLista[i];    
    }
    document.querySelector('#p1-output').textContent = fraseN;
}

// SEGUNDO PROBLEMA

function matrizes (){
    var x1 = parseInt(document.getElementById('p2-x1').value);
    var x2 = parseInt(document.getElementById('p2-x2').value);
    var x3 = parseInt(document.getElementById('p2-x3').value);
    var x4 = parseInt(document.getElementById('p2-x4').value);
    var x5 = parseInt(document.getElementById('p2-x5').value);
    var y1 = parseInt(document.getElementById('p2-y1').value);
    var y2 = parseInt(document.getElementById('p2-y2').value);
    var y3 = parseInt(document.getElementById('p2-y3').value);
    var y4 = parseInt(document.getElementById('p2-y4').value);
    var y5 = parseInt(document.getElementById('p2-y5').value);
    var productoPunto1 = (x1 * y1) + (x2 * y2) + (x3 * y3) + (x4 * y4) + (x5 * y5);
    var productoPunto2 = (x5 * y1) + (x4 * y2) + (x3 * y3) + (x2 * y4) + (x1 * y5);
    if(productoPunto1 < productoPunto2){
        document.querySelector('#p2-output').textContent = productoPunto1;
    }
    else if(productoPunto2 < productoPunto1){
        document.querySelector('#p2-output').textContent = productoPunto2;
    }
    else {
        document.querySelector('#p2-output').textContent = productoPunto1;
        console.log('Son iguales');
    }
}

// TERCER PROBLEMA

function eliminarRepetidos (palabra){
    palabraNueva = '';
    palabraLista = [];
    for(let i = 0 ; i < palabra.length ; i++){
        if(palabraLista.includes(palabra[i]) == false){
            palabraLista.push(palabra[i]);
        }
    }
    palabraNueva = palabraLista.join('');
    return palabraNueva;
}

function compararPalabras (lista){
    longitudesPalabras = [];
    for(let i = 0 ; i < lista.length ; i++){
        longitudesPalabras.push(lista[i].length);
    }
    var palabraMLarga = Math.max.apply(null , longitudesPalabras);
    var index = longitudesPalabras.indexOf(palabraMLarga);
    return (palabraMLarga + ' : ' + lista[index]);
}

function conteoPalabras (){
    pRecortadasLista = []
    var frase = document.getElementById('p3-input').value;
    var fraseLista = frase.split(',');
    for(let k = 0 ; k < fraseLista.length ; k++){
        var palabraRecortada = eliminarRepetidos(fraseLista[k]);
        pRecortadasLista.push(palabraRecortada);
    }
    var palabraNueva = compararPalabras(pRecortadasLista);
    document.querySelector('#p3-output').textContent = palabraNueva;
}