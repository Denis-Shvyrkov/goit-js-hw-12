import{a as y,S as b,i as c}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();async function f(e,o,a){y.defaults.baseURL="https://pixabay.com";const n="/api/",p=`?key=42535847-effe6d5cdde3e67806355c12e&q&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${a}`;return await y.get(n+p)}function q(e){return e.map(({webformatURL:o,largeImageURL:a,tags:n,likes:t,comments:s,views:l,downloads:p})=>`<li class="gallery-item"><a href="${a}">
  <img class="gallery-image" src="${o}" alt="${n}" >
  
  <div class="img-details">
  <div class="img-details-item">
  <p>Likes</p>
  <p>${t}</p>
  </div>
  <div class="img-details-item">
  <p>Views</p>
  <p>${l}</p>
  </div>
  <div class="img-details-item">
  <p>Comments</p>
  <p>${s}</p>
  </div>
  <div class="img-details-item">
  <p>Downloads</p>
  <p>${p}</p>
  </div>
  </div>
  </a>
  </li>`).join("")}const r={formEl:document.querySelector(".search-form"),imgGallery:document.querySelector(".gallery"),submitBtn:document.querySelector(".submit"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn"),galleryItem:document.querySelector(".gallery-item")},h=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),d={theme:"light",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",iconColor:"#FFFFFF",color:"#FFFFFF"};let m=1;const v=15;let u;h.on("show.simplelightbox");r.formEl.addEventListener("submit",S);r.loadMoreBtn.addEventListener("click",L);function F(e){const o=q(e);r.gallery.insertAdjacentHTML("beforeend",o),h.refresh()}async function S(e){if(e.preventDefault(),m=1,g(r.loader),r.gallery.innerHTML="",i(r.loadMoreBtn),u=e.target.elements.search.value.trim(),u===""){i(r.loader),c.error({...d,message:"Please, enter a request!"});return}try{const o=await f(u,m,v),a=o.data.hits;console.log(o),a.length===0&&(i(r.loader),c.error({...d,message:"Sorry, there are no images matching your search query. Please try again!"})),a.length>=15&&g(r.loadMoreBtn),F(a),i(r.loader)}catch(o){console.log(o)}e.target.reset()}async function L(){if(m+=1,g(r.loader),i(r.loadMoreBtn),u===""){i(r.loader),c.error({...d,message:"Please, enter a request!"});return}try{const e=await f(u,m,v),o=e.data.hits,a=e.data.totalHits;if(a===0&&(i(r.loader),c.error({...d,message:"Sorry, there are no images matching your search query. Please try again!"})),a===document.querySelectorAll(".gallery-item").length)i(r.loadMoreBtn),i(r.loader),c.show({...d,message:"We're sorry, but you've reached the end of search results."});else{F(o),i(r.loader),g(r.loadMoreBtn);const n=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:n.height*2,behavior:"smooth"}),console.log(n)}}catch(e){console.log(e)}}function i(e){e.classList.add("hidden")}function g(e){e.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
