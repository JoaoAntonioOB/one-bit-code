let baralho = []
let opcao = null

do{
    let cartas = ""
    for(let cont = 0; cont < baralho.length; cont++){
        cartas += (cont + 1) + "º" + baralho[cont] + "\n"
    }
    opcao = prompt(
        "Cartas do Baralho:\n" + cartas + "\nEscolha uma opção:\n1. Adionar Carta\n2. Puxar carta\n3. Sair"
    )
    switch(opcao){
        case "1":
            let novaCarta = prompt("Qual o nome da carta?")
            baralho.unshift(novaCarta)
            break
        case "2":
            let cartaPuxada = baralho.shift(cartas)
            if(cartaPuxada){
                alert(cartaPuxada + " foi removida.")
            } else{
                alert("Não a carta")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção invalida")
    }

}while(opcao !== "3")