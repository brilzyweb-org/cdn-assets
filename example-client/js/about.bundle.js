typeof document<"u"&&document.addEventListener("DOMContentLoaded",()=>{console.log("ℹ️ About page JavaScript loaded"),i(),m()});function i(){document.querySelectorAll(".tech-card").forEach((e,s)=>{e.style.opacity="0",e.style.transform="scale(0.9)",e.style.transition="opacity 0.3s ease, transform 0.3s ease",setTimeout(()=>{e.style.opacity="1",e.style.transform="scale(1)"},s*50),e.addEventListener("click",()=>{var n;const c=(n=e.querySelector("h4"))==null?void 0:n.textContent;console.log("🔧 Клик по технологии:",c),e.style.transform="scale(0.95)",setTimeout(()=>{e.style.transform="scale(1)"},150)});const t=e.querySelector(".tech-icon");t&&(t.addEventListener("mouseenter",()=>{t.style.transform="scale(1.2) rotate(5deg)",t.style.transition="transform 0.3s ease"}),t.addEventListener("mouseleave",()=>{t.style.transform="scale(1) rotate(0deg)"}))})}function m(){const r=document.querySelectorAll(".tech-category"),e=document.querySelectorAll(".tech-card").length,s=document.createElement("div");s.className="tech-stats",s.innerHTML=`
    <div class="tech-stats-item">
      <span class="tech-stats-number">${e}</span>
      <span class="tech-stats-label">Технологий</span>
    </div>
    <div class="tech-stats-item">
      <span class="tech-stats-number">${r.length}</span>
      <span class="tech-stats-label">Категорий</span>
    </div>
  `,s.style.cssText=`
    display: flex;
    gap: 2rem;
    margin: 2rem 0;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
    justify-content: center;
  `;const t=`
    text-align: center;
  `,c=`
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: #3498db;
  `,n=`
    display: block;
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
  `;s.querySelectorAll(".tech-stats-item").forEach(l=>{l.style.cssText=t,l.querySelector(".tech-stats-number").style.cssText=c,l.querySelector(".tech-stats-label").style.cssText=n});const o=document.querySelector(".about-content"),a=o==null?void 0:o.querySelector("h2");a&&a.nextSibling&&o.insertBefore(s,a.nextSibling),console.log("📊 Статистика технологий инициализирована")}
