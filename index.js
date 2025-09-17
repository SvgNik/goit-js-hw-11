import{a as c,S as d,i as a}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="48897506-490b457e94f36b4c176b81d54";c.defaults.baseURL=g;function y(s){const o={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get("",{params:o}).then(r=>r.data)}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),L=new d(".gallery a");function b(s){const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:i,comments:p,downloads:m})=>`
      <li>
        <a href="${n}">
          <img src="${r}" alt="${e}" />
          <ul>
            <li><p>Likes</p><p>${t}</p></li>
            <li><p>Views</p><p>${i}</p></li>
            <li><p>Comments</p><p>${p}</p></li>
            <li><p>Downloads</p><p>${m}</p></li>
          </ul>
        </a>
      </li>
    `).join("");u.innerHTML=o,L.refresh()}function S(){u.innerHTML=""}function v(){f.classList.toggle("active",!0)}function l(){f.classList.toggle("active",!1)}const w=document.querySelector("form");w.addEventListener("submit",P);function P(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(S(),v(),!o){a.error({message:"Please enter a search term"}),l(),s.target.reset();return}y(o).then(r=>{if(!r.hits||r.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");b(r.hits)}).catch(r=>{a.error({message:r.message})}).finally(()=>{l(),s.target.reset()})}
//# sourceMappingURL=index.js.map
