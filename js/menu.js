/* global document */

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    'use strict';
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

// Scroll Up // 

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;    
    
    if(currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);  
        window.scrollTo(0, currentScroll - (currentScroll / 5 ));
    }
}

var buttonUp = document.getElementById("button-up");

window.onscroll = function() {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
    }else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }
}











//Buscador de contenido

//Ejecutando funciones 

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);


//Declarando variables
var bars_search = document.getElementById("ctn-bars-search");
var cover_ctn_search = document.getElementById("cover-ctn-search");
var input_search = document.getElementById("inputSearch");
var box_search = document.getElementById("box-search");

// Funcion para mostrar el buscador 
function mostrar_buscador() {
    "use strict";
    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    input_search.focus();

    if (input_search.value === "") {
        box_search.style.display = "none";
    }
}

function ocultar_buscador() {
    "use strict";
    bars_search.style.top = "-120px";
    cover_ctn_search.style.display = "none";
    input_search.value = '';
    box_search.style.display = "none";
}

//Ejecutar codigo presionando una tecla - Ocultar Menu  // 

function presionar_tecla() {
    "use strict";
    var tecla_esc = event.keyCode;

    if (tecla_esc == 27) {
        return ocultar_buscador();
    }
}

function tecla_buscador(e) {
    if (e.ctrlKey && e.which == 66) {
        //Función a la que vas a llamar
        return mostrar_buscador();
    }
}
window.onkeydown = tecla_buscador;
window.onkeydown = presionar_tecla;

//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {
    "use strict";
    var filter = input_search.value.toUpperCase();
    var li = box_search.getElementsByTagName("li");
    // Recorriendo elementos a filtrar mediante los "li" // 

    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";
            box_search.style.display = "block";

            if (input_search.value === "") {
                box_search.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }
    }
}