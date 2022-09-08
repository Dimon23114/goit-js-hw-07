import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const cardsMarkup = createGalleryCards(galleryItems);
console.log(createGalleryCards(galleryItems));

galleryEl.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCards(galleryItems) { 

    return galleryItems.map(({ preview, original, description }) => {
        return `
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    
    />
    </a>
</div> 
    `;
    }).join('');
};


galleryEl.addEventListener('click', onClickGalleryFoto);

function onClickGalleryFoto(event) { 
    event.preventDefault();
    
    if (!event.target.classList.contains('gallery__image')) { 
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
    
    instance.show();

};
