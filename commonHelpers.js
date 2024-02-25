import{a as p,S as b,i as c}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();async function y(e,o,s){p.defaults.baseURL="https://pixabay.com";const l="/api";return await p.get(l,{params:{key:"21768935-3fedd5c602a3f7ac5e18d4c15",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${o}`,per_page:`${s}`}})}function q(e){return e.map(({webformatURL:o,largeImageURL:s,tags:l,likes:t,comments:a,views:n,downloads:F})=>`<li class="gallery-item"><a href="${s}">
  <img class="gallery-image" src="${o}" alt="${l}" >
  
  <div class="img-details">
  <div class="img-details-item">
  <p>Likes</p>
  <p>${t}</p>
  </div>
  <div class="img-details-item">
  <p>Views</p>
  <p>${n}</p>
  </div>
  <div class="img-details-item">
  <p>Comments</p>
  <p>${a}</p>
  </div>
  <div class="img-details-item">
  <p>Downloads</p>
  <p>${F}</p>
  </div>
  </div>
  </a>
  </li>`).join("")}const r={formEl:document.querySelector(".search-form"),imgGallery:document.querySelector(".gallery"),submitBtn:document.querySelector(".submit"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn"),galleryItem:document.querySelector(".gallery-item")},f=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),d={theme:"light",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",iconColor:"#FFFFFF",color:"#FFFFFF"};let m=1;const h=15;let u;f.on("show.simplelightbox");r.formEl.addEventListener("submit",L);r.loadMoreBtn.addEventListener("click",S);function v(e){const o=q(e);r.gallery.insertAdjacentHTML("beforeend",o),f.refresh()}async function L(e){if(e.preventDefault(),m=1,g(r.loader),r.gallery.innerHTML="",i(r.loadMoreBtn),u=e.target.elements.search.value.trim(),u===""){i(r.loader),c.error({...d,message:"Please, enter a request!"});return}try{const o=await y(u,m,h),s=o.data.hits;console.log(o),s.length===0&&(i(r.loader),c.error({...d,message:"Sorry, there are no images matching your search query. Please try again!"})),s.length>=15&&g(r.loadMoreBtn),v(s),i(r.loader)}catch(o){console.log(o)}e.target.reset()}async function S(){if(m+=1,g(r.loader),i(r.loadMoreBtn),u===""){i(r.loader),c.error({...d,message:"Please, enter a request!"});return}try{const e=await y(u,m,h),o=e.data.hits,s=e.data.totalHits;if(s===0&&(i(r.loader),c.error({...d,message:"Sorry, there are no images matching your search query. Please try again!"})),s===document.querySelectorAll(".gallery-item").length)i(r.loadMoreBtn),i(r.loader),c.show({...d,message:"We're sorry, but you've reached the end of search results."});else{v(o),i(r.loader),g(r.loadMoreBtn);const l=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:l.height*2,behavior:"smooth"}),console.log(l)}}catch(e){console.log(e)}}function i(e){e.classList.add("hidden")}function g(e){e.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
