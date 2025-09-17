import{a as c,S as m,i as a}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="48897506-490b457e94f36b4c176b81d54";c.defaults.baseURL=h;function g(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get("",{params:r}).then(o=>o.data)}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),L=new m(".gallery a");function b(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:d})=>`
      <li>
        <a href="${n}">
          <img src="${o}" alt="${e}"  />

          <ul>
            <li>
              <p>Likes</p>
              <p>${t}</p>
            </li>
            <li>
              <p>Views</p>
              <p>${s}</p>
            </li>
            <li>
              <p>Comments</p>
              <p>${f}</p>
            </li>
            <li>
              <p>Downloads</p>
              <p>${d}</p>
            </li>
          </ul>
        </a>
      </li>
      `).join("");u.innerHTML=r,L.refresh()}function S(){u.innerHTML=""}function E(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}const w=document.querySelector("form");w.addEventListener("submit",$);function $(i){i.preventDefault(),E(),S();const r=i.currentTarget.elements["search-text"].value.trim();if(r===""){a.error({message:"Search input can`t be empty"}),setTimeout(()=>{l()},500),i.target.reset();return}g(r).then(o=>{if(o.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");b(o.hits)}).catch(o=>{a.error({message:o.message})}).finally(()=>{l(),i.target.reset()})}
//# sourceMappingURL=index.js.map
