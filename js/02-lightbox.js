import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const cardsMarkup = createGalleryCards(galleryItems);


galleryEl.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCards(cards) {
    return cards.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}"
        />
</a>
        `
    }).join("");
    
};


const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250,
});