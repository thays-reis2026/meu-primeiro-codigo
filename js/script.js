document.getElementById("botãoEnviar").addEventListener("click",validaFormulário)

function validaFormulário(){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("N° Telefone").value != ""){
    alert("Prontinho! você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos nome, email e telefone!.")
    }
}
