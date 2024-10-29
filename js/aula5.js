window.addEventListener("load", () => {
    let destaques = document.getElementsByClassName("destaque");

    for (let i = 0; i < destaques.length; i++) {
        destaques[i].style.backgroundColor = "yellow";
        destaques[i].style.border = "2px dotted";
        destaques[i].style.borderRadius = "10px";
    }    
});