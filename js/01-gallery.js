import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


//dom links
const galleryContainer = document.querySelector('.gallery');

const markupGallery = createGaleryMarkup(galleryItems);

//events
galleryContainer.insertAdjacentHTML('beforeend', markupGallery);
  
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

galleryContainer.onclick = (event) => {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== "IMG") return;

  basicLightbox.create(`<img src="${target.dataset.source}" width="800" height="600">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", function(event) {
        if (event.code === "Escape") {
          instance.close();
          document.body.style = "";
        }
      })
    },
    onClose: () => {
      window.addEventListener("remove", function(event) {
        if (event.code === "Escape") {
          instance.close();
          document.body.style = "";
        }
      })
    }
  }).show()
} 