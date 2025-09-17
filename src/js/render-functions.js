import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderNode = document.querySelector('.loader');
const lightboxGallery = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li>
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
          <ul>
            <li><p>Likes</p><p>${likes}</p></li>
            <li><p>Views</p><p>${views}</p></li>
            <li><p>Comments</p><p>${comments}</p></li>
            <li><p>Downloads</p><p>${downloads}</p></li>
          </ul>
        </a>
      </li>
    `
    )
    .join('');

  galleryContainer.innerHTML = galleryMarkup;
  lightboxGallery.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loaderNode.classList.toggle('active', true);
}

export function hideLoader() {
  loaderNode.classList.toggle('active', false);
}
