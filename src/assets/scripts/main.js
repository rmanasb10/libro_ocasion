/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

import el_paciente from 'url:../images/el_paciente_800.jpg';
import cicatriz from 'url:../images/cicatriz_800.jpg';
import reina_roja from 'url:../images/reina_roja_800.jpg';
import loba_negra from 'url:../images/loba_negra_800.jpg';
import rey_blanco from 'url:../images/rey_blanco_800.jpg';
import todo_arde from 'url:../images/todo_arde_800.jpg';
import todo_vuelve from 'url:../images/todo_muere_800.jpg';

/**
 * Write any other JavaScript below
 */
const universoReinaRoja = [
  {
    url: el_paciente,
    alt: "Libro 'El paciente' de Juán Gómez-Jurado del universo 'Reina roja'",
  },
  {
    url: cicatriz,
    alt: "Libro 'Cicatriz' de Juán Gómez-Jurado del universo 'Reina roja'",
  },
  {
    url: reina_roja,
    alt: "Libro 'Reina roja' de Juán Gómez-Jurado del universo 'Reina roja'",
  },
  {
    url: loba_negra,
    alt: "Libro 'Loba negra' de Juán Gómez-Jurado del universo 'Reina roja'",
  },
  {
    url: rey_blanco,
    alt: "Libro 'Rey blanco' de Juán Gómez-Jurado del universo 'Reina roja'",
  },
  {
    url: todo_arde,
    alt: "Libro 'Todo arde' de Juán Gómez-Jurado del universo 'Reina roja'",
  },
  {
    url: todo_vuelve,
    alt: "Libro 'Todo vuelve' de Juán Gómez-Jurado del universo 'Reina roja'",
  },
];

function carruselImagenes(id, imagenes, opciones = {}) {
  const contenedor = document.getElementById(id);
  contenedor.innerHTML = `
      <section class="splide">
         <div class="splide__track">
            <ul class="splide__list">
               ${imagenes
                 .map(
                   (imagen) => `
                  <li class="splide__slide">
                     <img class=imagenes__carousel src="${imagen.url}" alt="${imagen.alt}" style="width:100%; display:block;"/>
                  </li>`,
                 )
                 .join('')}
            </ul>
         </div>
      </section>
      <p class=images__caption>Foto: Rodrigo Mañas Barceló</p>`;
  const splide = new Splide(contenedor.querySelector('.splide'), {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    ...opciones,
  });
  splide.mount();
  return splide;
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('universoReinaRoja')) {
    carruselImagenes('universoReinaRoja', universoReinaRoja, {
      interval: 5000,
      arrows: true,
    });
  }
});
