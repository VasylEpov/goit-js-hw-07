
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

//dom links
const galleryContainer = document.querySelector('.gallery');

const markupGallery = createGaleryMarkup(galleryItems);

//events

galleryContainer.insertAdjacentHTML('beforeend', markupGallery);

galleryContainer.addEventListener('click', onGalleryClick);

//functions

function createGaleryMarkup(galleryItems) {
   return  galleryItems.map(({ preview, original, description }) => {
       return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
                />
            </a>
        </li> 
    `;
    }).join('');
}

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return;
    }
  
    const lightbox = new SimpleLightbox(".gallery a", {
      captionSelector: "self",
      captionType: "attr",
      captionsData: "data-caption",
      captionPosition : "bottom",
      captionDelay: 250,
      closeOnEscape: true,
    });

   
  }
  
