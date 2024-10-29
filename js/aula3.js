function estiloParagrafo() {
    const cores = [
        "red", // 0
        "blue", // 1
        "green", // 2
        "yellow", // 3
        "purple" // 4
    ];

    let paragrafos = document.getElementsByTagName("p");

    for(let i = 0; i <= paragrafos.length; i++) {
        let corAplicada = cores[(Math.floor(Math.random() * cores.length))];
        paragrafos[i].style.color = corAplicada;
    }
}

document.querySelector("button").addEventListener("click", estiloParagrafo);