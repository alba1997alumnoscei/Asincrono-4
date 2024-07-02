
// ponemos a funcionar al DOM
document.addEventListener('DOMContentLoaded', function () {

    //1. Declaramos variables 

    // Agarramos elementos: 
    //texto silla, imagen silla, texto mesa, imagen mesa 
    const txtSilla = document.querySelector('.txt-silla');
    const imgSilla = document.querySelector('.img-silla');
    const txtMesa = document.querySelector('.txt-mesa');
    const imgMesa = document.querySelector('.img-mesa');
    //botones del footer 
    const btnSilla = document.querySelector('.footerSilla');
    const btnMesa = document.querySelector('.footerMesa');

    //barritas de transición 
    const barritaSilla = document.querySelector('.barrita-silla');
    const barritaMesa = document.querySelector('.barrita-mesa');
/*COMPROBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR*/
    //texto desaparece
    const txt = document.querySelector('.textos');


    //Cuando cargue la página que se vea solo la silla (img y txt) 
    txtSilla.style.display = 'flex';
    imgSilla.style.display = 'block';
    txtMesa.style.display = 'none';
    imgMesa.style.display = 'none';
    barritaSilla.style.display = 'block';
    
    

    // 2 . Funciones 

    //Cuando hago click sobre el botón de la silla
    btnSilla.addEventListener('click', function () {

        // Se mostrarán 
        txtSilla.style.display = 'flex';
        imgSilla.style.display = 'block';
        barritaSilla.style.display = 'block';
        barritaSilla.classList.toggle('completa');
        btnSilla.classList.toggle('completa');
        /*COMPROBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR*/
        txt.classList.toggle('efecto');
        /*COMPROBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR*/

        // Ocultar texto e imagen de la mesa
        txtMesa.style.display = 'none';
        imgMesa.style.display = 'none';
        barritaMesa.classList.remove('completa');
        btnMesa.classList.remove('completa');
        
        
       
    });

    btnMesa.addEventListener('click', function () {
        // Mostrar texto e imagen de la mesa
        txtMesa.style.display = 'flex';
        imgMesa.style.display = 'block';
        barritaMesa.style.display = 'block';
        barritaMesa.classList.toggle('completa');
        btnMesa.classList.toggle('completa');
        
        // Ocultar texto e imagen de la silla
        txtSilla.style.display = 'none';
        imgSilla.style.display = 'none';
        barritaSilla.classList.remove('completa');
        btnSilla.classList.remove('completa');
        
        
    });

    ;
    // Función para manejar el scroll
    function hacerScroll() {
        // Obtener la posición del scroll vertical
        const posicionScroll = window.scrollY;

        // Altura del contenedor de texto
        const alturaTexto = document.querySelector('.txt-autor').offsetHeight;

        // Determinar cuándo cambiar de elementos visibles
        if (posicionScroll > alturaTexto) {
            // Mostrar img-mesa y txt-mesa, ocultar img-silla y txt-silla
            imgSilla.style.display = 'none';
            txtSilla.style.display = 'none';
            imgMesa.style.display = 'block';
            txtMesa.style.display = 'flex';
        } else {
            // Mostrar img-silla y txt-silla, ocultar img-mesa y txt-mesa
            imgSilla.style.display = 'block';
            txtSilla.style.display = 'flex';
            imgMesa.style.display = 'none';
            txtMesa.style.display = 'none';
        }
    }

    // Llamar a hacerScroll cuando se haga scroll en la página
    window.addEventListener('scroll', hacerScroll);

    // Llamar a hacerScroll al cargar la página para inicializar el estado
    hacerScroll();
    ;
});




