import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const searchForm = document.querySelector('form');
searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const searchValue = e.currentTarget.elements['search-text'].value.trim();

  clearGallery();
  showLoader();

  if (!searchValue) {
    iziToast.error({
      message: 'Please enter a search term',
    });
    hideLoader();
    e.target.reset();
    return;
  }

  getImagesByQuery(searchValue)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      createGallery(data.hits);
    })
    .catch(err => {
      iziToast.error({
        message: err.message,
      });
    })
    .finally(() => {
      hideLoader();
      e.target.reset();
    });
}
