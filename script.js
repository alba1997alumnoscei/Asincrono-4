
    const btnSilla = document.querySelector('.footer-objeto_01');
    const btnMesa = document.querySelector('.footer-objeto_02');

    btnSilla.addEventListener('click', function() {
        // Mostrar texto e imagen de la silla
        document.querySelector('.txt-silla').style.display = 'flex';
        document.querySelector('.img-silla').style.display = 'block';

        // Ocultar texto e imagen de la mesa
        document.querySelector('.txt-mesa').style.display = 'none';
        document.querySelector('.img-mesa').style.display = 'none';
    });

    btnMesa.addEventListener('click', function() {
        // Mostrar texto e imagen de la mesa
        document.querySelector('.txt-mesa').style.display = 'flex';
        document.querySelector('.img-mesa').style.display = 'block';

        // Ocultar texto e imagen de la silla
        document.querySelector('.txt-silla').style.display = 'none';
        document.querySelector('.img-silla').style.display = 'none';
    });
;









// // Seleccionar elementos relevantes
// const imgSilla = document.querySelector('.img-silla');
// const txtSilla = document.querySelector('.txt-silla');
// const imgMesa = document.querySelector('.img-mesa');
// const txtMesa = document.querySelector('.txt-mesa');

// // Función para manejar el scroll
// function hacerScroll() {
//     // Obtener la posición actual de scroll
//     const posicionScroll = window.scrollY;

//     // Obtener la altura de la sección 
//     const alturaTextoMesa = document.querySelector('.txt-mesa').offsetTop;

    
//     if (posicionScroll >= alturaTextoMesa) {
       
//         imgSilla.style.display = 'block';
//         imgSilla.style.display = 'block';
//         imgMesa.style.display = 'none';
//         imgMesa.style.display = 'none';
       
        
        
//     } else {
        
//         imgMesa.style.display = 'block';
//         imgMesa.style.display = 'block';
//         imgSilla.style.display = 'none';
//         imgSilla.style.display = 'none';
        
        
//     }
// }

// // Escuchar el evento de scroll y llamar a handleScroll
// window.addEventListener('scroll', hacerScroll);

