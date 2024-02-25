export function galleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        comments,
        views,
        downloads,
      }) => {
        return `<li class="gallery-item"><a href="${largeImageURL}">
  <img class="gallery-image" src="${webformatURL}" alt="${tags}" >
  
  <div class="img-details">
  <div class="img-details-item">
  <p>Likes</p>
  <p>${likes}</p>
  </div>
  <div class="img-details-item">
  <p>Views</p>
  <p>${views}</p>
  </div>
  <div class="img-details-item">
  <p>Comments</p>
  <p>${comments}</p>
  </div>
  <div class="img-details-item">
  <p>Downloads</p>
  <p>${downloads}</p>
  </div>
  </div>
  </a>
  </li>`;
      }
    )
    .join('');
}
