
document.addEventListener('DOMContentLoaded', function() { 
    
    const btnSilla = document.querySelector('.footer-objeto_01');
    const btnMesa = document.querySelector('.footer-objeto_02');

    const txtSilla = document.querySelector('.txt-silla');
    const imgSilla = document.querySelector('.img-silla');
    const txtMesa = document.querySelector('.txt-mesa');
    const imgMesa = document.querySelector('.img-mesa');

    


    txtSilla.style.display = 'flex';
    imgSilla.style.display = 'block';
    txtMesa.style.display = 'none';
    imgMesa.style.display = 'none';
    

    btnSilla.addEventListener('click', function() {
        // Mostrar texto e imagen de la silla
        document.querySelector('.txt-silla').style.display = 'flex';
        document.querySelector('.img-silla').style.display = 'block';
        document.querySelector('.barrita-silla').style.display = 'block';

        // Ocultar texto e imagen de la mesa
        document.querySelector('.txt-mesa').style.display = 'none';
        document.querySelector('.img-mesa').style.display = 'none';
        document.querySelector('.barrita-mesa').style.display = 'none';
    });

    btnMesa.addEventListener('click', function() {
        // Mostrar texto e imagen de la mesa
        document.querySelector('.txt-mesa').style.display = 'flex';
        document.querySelector('.img-mesa').style.display = 'block';
        document.querySelector('.barrita-mesa').style.display = 'block';

        // Ocultar texto e imagen de la silla
        document.querySelector('.txt-silla').style.display = 'none';
        document.querySelector('.img-silla').style.display = 'none';
        document.querySelector('.barrita-silla').style.display = 'none';
    });
;
 // Función para manejar el scroll
 function handleScroll() {
    // Obtener la posición del scroll vertical
    const scrollPosition = window.scrollY;

    // Altura del contenedor de texto
    const textosHeight = document.querySelector('.txt-autor').offsetHeight;

    // Determinar cuándo cambiar de elementos visibles
    if (scrollPosition > textosHeight) {
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

// Llamar a handleScroll cuando se haga scroll en la página
window.addEventListener('scroll', handleScroll);

// Llamar a handleScroll al cargar la página para inicializar el estado
handleScroll();
;});