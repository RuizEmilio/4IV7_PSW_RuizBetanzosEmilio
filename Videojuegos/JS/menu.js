// Audio principal
function play (){
    var audio = document.getElementById('audio1');
    var count = 1;
    if(count == 1){
        audio.play();
    }
}
// Encender pantalla
function encender (){
    var contenedor = document.getElementById('container1');
    contenedor.style.opacity = 100;
}
// Click sobre
function over_seleccion (seleccion , a, audio){
    var seleccion = document.getElementById(seleccion);
    var linka = document.getElementById(a);
    seleccion.style.backgroundColor = 'lawngreen';
    linka.style.color = 'white';
}
// Click fuera
function no_selection (seleccion , a , audio){
    var seleccion = document.getElementById(seleccion);
    var linka = document.getElementById(a);
    seleccion.style.backgroundColor = 'transparent';
    linka.style.color = 'lawngreen';
}