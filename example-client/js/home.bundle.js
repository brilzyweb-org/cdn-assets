typeof document<"u"&&document.addEventListener("DOMContentLoaded",()=>{console.log("🏠 Home page JavaScript loaded"),l(),r(),a()});function r(){document.querySelectorAll(".post").forEach((e,s)=>{e.style.opacity="0",e.style.transform="translateY(20px)",e.style.transition="opacity 0.3s ease, transform 0.3s ease",setTimeout(()=>{e.style.opacity="1",e.style.transform="translateY(0)"},s*100);const t=e.querySelector("h2");t&&(t.style.cursor="pointer",t.addEventListener("click",()=>{t.style.color=t.style.color==="rgb(52, 152, 219)"?"#2c3e50":"#3498db",console.log("📝 Клик по посту:",t.textContent)}));const o=e.querySelector("img");o&&o.loading==="lazy"&&o.addEventListener("load",()=>{console.log("🖼️ Изображение загружено:",o.alt)})})}function a(){document.querySelectorAll(".post").forEach((e,s)=>{const t=document.createElement("span");t.className="post-view-badge",t.textContent=`👁️ ${Math.floor(Math.random()*100)+1}`,t.style.cssText=`
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(52, 152, 219, 0.9);
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: bold;
    `;const o=e.querySelector("h2");o&&(o.style.position="relative",o.appendChild(t))}),console.log("📊 Счетчики просмотров инициализированы")}function l(){document.querySelectorAll(".markdown-image").forEach(e=>{e.addEventListener("error",()=>{console.warn("⚠️ Ошибка загрузки изображения:",e.src),e.style.display="none"}),e.addEventListener("load",()=>{console.log("✅ Изображение загружено:",e.src)})}),console.log("🖼️ Обработка ошибок изображений инициализирована")}
