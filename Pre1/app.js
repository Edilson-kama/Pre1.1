window.addEventListener('scroll',()=>{
    
    const navBar = document.getElementById("nav-bar");
    if(window.scrollY > 50)
    {
        navBar.classList.add('scrolled');
    }
    else
    {
        navBar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var elementos = document.querySelectorAll('.violeta');
    console.log("Hola chicos!!!!!");
    elementos.forEach(function (elemento) {
            if (esElementoVisible(elemento)) {
                elemento.classList.add('visible');
            }
        });

    window.addEventListener('scroll', function () {
        elementos.forEach(function (elemento) {
            if (esElementoVisible(elemento)) {
                elemento.classList.add('visible');
            }
        });
    });

    
    function esElementoVisible(el) {
        var rect = el.getBoundingClientRect();
        console.log(rect);
        
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        console.log(windowHeight);
        return rect.top <= windowHeight && rect.bottom >= 0;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var elementos = document.querySelectorAll('.contenedor-sobremi');
    console.log("Hola chicos!!!!!");
    elementos.forEach(function (elemento) {
            if (esElementoVisible(elemento)) {
                elemento.classList.add('visible');
            }
        });

    window.addEventListener('scroll', function () {
        elementos.forEach(function (elemento) {
            if (esElementoVisible(elemento)) {
                elemento.classList.add('visible');
            }
        });
    });

    
    function esElementoVisible(el) {
        var rect = el.getBoundingClientRect();
        console.log(rect);
        
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        console.log(windowHeight);
        return rect.top <= windowHeight && rect.bottom >= 0;
    }
});