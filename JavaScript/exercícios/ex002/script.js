let n1 = window.document.getElementById("n1");
n1 = parseFloat(n1);
let n2 = window.document.getElementById("n2");
n2 = parseFloat(n2);
let output = window.document.getElementById("output");
let operacoes = window.document.getElementById("operacoes")
let res = parseFloat("null")

function escrever() {
    res = calcular();
    output.innerHTML = res
}

function calcular(operacoes){
    switch {
        case "+":
            res = n1 + n2
            break
        case "-":
            res = n1 - n2
            break
        case "*":
            res = n1 * n2
            break
        case "/":
            res = n1 / n2
    }
    return res
}



