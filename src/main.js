import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchImages } from './js/pixabay-api';
import { galleryMarkup } from './js/render-functions';

const refs = {
  formEl: document.querySelector('.search-form'),
  imgGallery: document.querySelector('.gallery'),
  submitBtn: document.querySelector('.submit'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader-container'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
  galleryItem: document.querySelector('.gallery-item'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const iziToastOptions = {
  theme: 'light',
  backgroundColor: '#B51B1B',
  messageColor: '#FFFFFF',
  position: 'topRight',
  iconColor: '#FFFFFF',
  color: '#FFFFFF',
};

let page = 1;
const perPage = 15;

let query;

lightbox.on('show.simplelightbox');

refs.formEl.addEventListener('submit', onSubmitBtn);
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);

function renderGallery(images) {
  const markup = galleryMarkup(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

async function onSubmitBtn(e) {
  e.preventDefault();
  page = 1;
  removeHidden(refs.loader);
  refs.gallery.innerHTML = '';
  setHidden(refs.loadMoreBtn);

  query = e.target.elements.search.value.trim();

  if (query === '') {
    setHidden(refs.loader);
    iziToast.error({
      ...iziToastOptions,
      message: 'Please, enter a request!',
    });
    return;
  }

  try {
    const searchResponse = await searchImages(query, page, perPage);
    const searchArray = searchResponse.data.hits;

    console.log(searchResponse);
    if (searchArray.length === 0) {
      setHidden(refs.loader);
      iziToast.error({
        ...iziToastOptions,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    if (searchArray.length >= 15) {
      removeHidden(refs.loadMoreBtn);
    }

    renderGallery(searchArray);

    setHidden(refs.loader);
  } catch (e) {
    console.log(e);
  }
  e.target.reset();
}

async function onLoadMoreClick() {
  page += 1;

  removeHidden(refs.loader);

  setHidden(refs.loadMoreBtn);

  if (query === '') {
    setHidden(refs.loader);
    iziToast.error({
      ...iziToastOptions,
      message: 'Please, enter a request!',
    });
    return;
  }

  try {
    const searchResponse = await searchImages(query, page, perPage);
    const searchArray = searchResponse.data.hits;
    const totalHits = searchResponse.data.totalHits;
    if (totalHits === 0) {
      setHidden(refs.loader);

      iziToast.error({
        ...iziToastOptions,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }

    if (totalHits === document.querySelectorAll('.gallery-item').length) {
      setHidden(refs.loadMoreBtn);
      setHidden(refs.loader);
      iziToast.show({
        ...iziToastOptions,
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      renderGallery(searchArray);
      setHidden(refs.loader);
      removeHidden(refs.loadMoreBtn);
      const rect = document
        .querySelector('.gallery-item')
        .getBoundingClientRect();

      window.scrollBy({
        top: rect.height * 2,
        behavior: 'smooth',
      });

      console.log(rect);
    }
  } catch (e) {
    console.log(e);
  }
}
function setHidden(el) {
  el.classList.add('hidden');
}

function removeHidden(el) {
  el.classList.remove('hidden');
}
