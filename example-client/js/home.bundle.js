typeof document<"u"&&document.addEventListener("DOMContentLoaded",()=>{console.log("🏠 Home page JavaScript loaded"),r(),l()});function r(){document.querySelectorAll(".post").forEach((t,n)=>{t.style.opacity="0",t.style.transform="translateY(20px)",t.style.transition="opacity 0.3s ease, transform 0.3s ease",setTimeout(()=>{t.style.opacity="1",t.style.transform="translateY(0)"},n*100);const e=t.querySelector("h2");e&&(e.style.cursor="pointer",e.addEventListener("click",()=>{e.style.color=e.style.color==="rgb(52, 152, 219)"?"#2c3e50":"#3498db",console.log("📝 Клик по посту:",e.textContent)}));const o=t.querySelector("img");o&&o.loading==="lazy"&&o.addEventListener("load",()=>{console.log("🖼️ Изображение загружено:",o.alt)})})}function l(){document.querySelectorAll(".post").forEach((t,n)=>{const e=document.createElement("span");e.className="post-view-badge",e.textContent=`👁️ ${Math.floor(Math.random()*100)+1}`,e.style.cssText=`
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(52, 152, 219, 0.9);
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: bold;
    `;const o=t.querySelector("h2");o&&(o.style.position="relative",o.appendChild(e))}),console.log("📊 Счетчики просмотров инициализированы")}
