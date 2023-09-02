let firstName = window.document.getElementById("firstName");
let lastName = window.document.getElementById("lastName");
let study = window.document.getElementById("study");
let birth = window.document.getElementById("birth");
let output = window.document.getElementById("output");
let mensagem = "null";
let data = new Date();
let year = data.getFullYear();
let form = window.document.getElementById("form");
let idade = "null";
idade = parseInt(idade)


function enviar(event){
    event.preventDefault();
    mensagem = `Seu nome completo é: ${firstName.value } ${lastName.value}<br>`;
    mensagem += `Seu campo de Estudo: ${study.value}<br>`;
    idade = calculo();
    mensagem += `Sua idade é: ${idade}`;
    output.innerHTML = mensagem;

}

function calculo() {
    let birthDate = new Date(birth.value);
    let birthYear = birthDate.getFullYear();
    idade = year - birthYear;
    return idade;
}

form.addEventListener("submit", enviar);


