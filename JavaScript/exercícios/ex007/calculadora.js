let opcao = null

function areaTriangulo(){
    let base = parseFloat(prompt("Digite o valor da base: "))
    let altura = parseFloat(prompt("Digite o valor da altura: "))
    return (base * altura) / 2
}

function areaRetangulo(){
    let base = parseFloat(prompt("Digite o valor da base: "))
    let altura = parseFloat(prompt("Digite o valor da altura: "))
    return base * altura
}

function areaQuadrado(){
    let lado = parseFloat(prompt("Digite o valor do lado: "))
    return lado * lado
}

function areaTrapezio(){
    let baseMaior = parseFloat(prompt("Digite o valor da base maior: "))
    let baseMenor = parseFloat(prompt("Digite o valor da base menor: "))
    let altura = parseFloat(prompt("Digite o valor da altura: "))
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(){
    let raio = parseFloat(prompt("Digite o valor do raio do circulo: "))
    return 3.14 * (raio * raio)
}


do{
    opcao = prompt("Calculadora Geométrica:\n O que quer calcular?\n1. Área do triângulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do círculo\n6. Sair")

    switch(opcao){
        case "1":
        alert("A área do triângulo é igual a: " + areaTriangulo())
            break
        case "2":
            alert("A área do retangulo é igual a: " + areaRetangulo())
            break
        case "3":
            alert("A área do quadrado é igual a: " + areaQuadrado())
            break
        case "4":
            alert("A área do trapézio é igual a: " + areaTrapezio())
            break
        case "5":
            alert("A área do círculo é igual a: " + areaCirculo())
            break
        case "6":
            alert("Encerrando...")
            break
        default:
            alert("Opção Invalida")
    }

} while (opcao !== "6")