import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);




function createGalleryItemMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
    {
   return `
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" 
            src="${preview}"
            alt="${description}"
          />
        </a>
    </div>`;
    })
        .join('');
};


let gallery = new SimpleLightbox('.gallery__item a', {
   captionsData: "alt",
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {});

