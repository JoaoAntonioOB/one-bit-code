let cadastro = []
let menu = null


do{
    menu = prompt(
        "Quantidade de Imovéis cadastrados\n" + cadastro.length + "\n1." + "Salvar novo imovél\n2." + "Mostrar Imovéis cadastrados\n3." + "Sair"
    )
    switch(menu){
        case "1":
            let imovel = {}
            imovel.nomeProprietario = prompt("Qual o nome do proprietário?")
            imovel.quantidadeQuartos = prompt("Qual a quantidade de quartos?")
            imovel.quantidadeBanheiros = prompt("Qual a quantidade de banheiros?")
            imovel.garagem = prompt("Possui garagem?")
            cadastro.push(imovel)
            break
        case "2":
            for(let cont = 0; cont < cadastro.length; cont++){
            alert("Todos os imoveis:\nImovél " + (cont + 1) + "\n" + "Nome do Proprietario: " + cadastro[cont].nomeProprietario + "\n" + "Quantidade de quartos: " + cadastro[cont].quantidadeQuartos + "\n" + "Quantidade de banheiros: " + cadastro[cont].quantidadeBanheiros + "\n" + "Possui garem: " + cadastro[cont].garagem)
        }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            ("Opção Invalida")
    }

} while (menu !== "3")