!function(){var t;function e(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t=setTimeout(e,1e3)}var o=document.querySelector("[data-start]");o.addEventListener("click",(function(){this.disabled=!0,n.disabled=!1,e()})),console.log(o);var n=document.querySelector("[data-stop]");n.addEventListener("click",(function(){this.disabled=!0,o.disabled=!1,clearTimeout(t)}))}();
//# sourceMappingURL=01-color-switcher.8141f370.js.map
