typeof document<"u"&&(console.log("✅ App initialized (общий JS)"),document.addEventListener("DOMContentLoaded",()=>{console.log("✅ DOM loaded"),e()}));function e(){console.log("%c✅ JavaScript загружен и работает!","color: #27ae60; font-weight: bold; font-size: 14px;");const o=document.createElement("div");o.id="js-indicator",o.textContent="✓ JS",o.style.cssText=`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #27ae60;
    color: white;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    opacity: 0.9;
    cursor: pointer;
  `,o.addEventListener("click",()=>{o.style.opacity="0",setTimeout(()=>o.remove(),300)}),document.body.appendChild(o),setTimeout(()=>{o.parentNode&&(o.style.opacity="0",setTimeout(()=>o.remove(),300))},3e3)}
