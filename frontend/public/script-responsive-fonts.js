window.addEventListener("resize",function() {
    
    var textos = document.getElementsByClassName("texto-imagens");
    var numFontSize = window.getComputedStyle(textos[0]).getPropertyValue("font-size");
    numFontSize = Number(numFontSize.replace("px", ""));
    for(var i = 0; i != textos.length; i ++) {
        if(window.innerWidth < 1900) {
          textos[i].style.fontSize = (5*window.innerWidth)/66 + "px";
        } else {
          textos[i].style.fontSize = "150px";
        }
    }
})
window.addEventListener("load",function() {
    
    var textos = document.getElementsByClassName("texto-imagens");
    var numFontSize = window.getComputedStyle(textos[0]).getPropertyValue("font-size");
    numFontSize = Number(numFontSize.replace("px", ""));
    for(var i = 0; i != textos.length; i ++) {
        if(window.innerWidth < 1900) {
          textos[i].style.fontSize = (5*window.innerWidth)/66 + "px";
        } else {
          textos[i].style.fontSize = "150px";
        }
    }
})