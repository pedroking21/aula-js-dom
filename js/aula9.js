function enviarFormulario() {

    //let nome = document.querySelector("input").value;
    //let email = document.querySelector(".email").value;
    //let telefone = document.querySelector("#telefone").value;

    const pessoaDTO = {
        "nome": document.querySelectorAll("input")[0].value,
        "email": document.querySelector(".email")[1].value,
        "telefone": document.querySelector("#telefone")[2].value
    }

    alert(JSON.stringify(pessoaDTO))
}

document.querySelectorAll("input")[3].addEventListener("click", enviarFormulario);