let n1 = window.document.getElementById("n1");
let n2 = window.document.getElementById("n2");
let output = window.document.getElementById("output");
//let operacoes = window.document.getElementById("operacoes")


function calcular(simbolo){
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);
    //let simbolo = operacoes.value

    if(isNaN(num1) || isNaN(num2)){
        output.innerHTML = "Por favor, insira números válidos";
    } else {
        let res;
    switch (simbolo) {
        case "+":
            res = num1 + num2
            break
        case "-":
            res = num1 - num2
            break
        case "*":
            res = num1 * num2
            break
        case "/":
            if(n2 == 0){
                output.innerHTML = "Divisão por zero não é permitida"
            }
            res = num1 / num2
            break
            default:
                output.innerHTML = "Operação invalida"
                return
        }
    output.innerHTML = `Resultado: ${res}`
    }
}



