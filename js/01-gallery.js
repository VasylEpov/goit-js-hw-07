import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


//dom links
const galleryContainer = document.querySelector('.gallery');

const markupGallery = createGaleryMarkup(galleryItems);

//events
galleryContainer.insertAdjacentHTML('beforeend', markupGallery);


galleryContainer.addEventListener('click', onGalleryClick);

  
//functions
function createGaleryMarkup(galleryItems) {
   return  galleryItems.map(({ preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link"  href="${original}" >
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>
    `;
    }).join('');
}


function onGalleryClick(event) {
    event.preventDefault();
    const { target } = event;
    if (target.nodeName !== "IMG") return;

    const instance = basicLightbox.create(
        `<img src="${target.dataset.source}" width="800" height="600">`
      );
      instance.show();
      document.body.style = "overflow: hidden; height: 100vh;";
    
      window.addEventListener("keydown", onEscKeyClick);

      function onEscKeyClick(event) {
        if (event.code === "Escape" && instance.visible()) {
          instance.close();
          document.body.style = "";
          window.removeEventListener("keydown", onEscKeyClick);
        }
      }
    }


