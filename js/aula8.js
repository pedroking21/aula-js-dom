let paragrafo = document.querySelectorAll("p")[2];

    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = paragrafo.innerText;
    novoParagrafo.style.color = "red"

    document.querySelector("main").appendChild(novoParagrafo);