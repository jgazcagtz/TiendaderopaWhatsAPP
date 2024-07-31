// script.js

// Función para mostrar un mensaje en la consola cuando se hace clic en el botón de WhatsApp
document.querySelectorAll('.whatsapp-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('¡Haz clic en el botón de WhatsApp!');
        alert('Haz click aqquí  para ir a whatsapp');
    });
});

// Opcional: Funcionalidad de filtro (si decides agregar categorías en el futuro)
// Aquí se muestra cómo podrías agregar un filtro por categoría
// const filterButtons = document.querySelectorAll('.filter-button');
// const products = document.querySelectorAll('.product');

// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const category = button.dataset.category;

//         products.forEach(product => {
//             if (category === 'all' || product.classList.contains(category)) {
//                 product.style.display = 'block';
//             } else {
//                 product.style.display = 'none';
//             }
//         });
//     });
// });
