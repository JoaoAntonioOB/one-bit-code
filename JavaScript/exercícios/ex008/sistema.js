let vagas = []
let menu = null

do {
    menu = prompt("Vagas de Emprego\n Escolha uma das opções:\n1. Listar vagas disponíveis\n2. Criar uma nova vaga\n3. Visualizar uma vaga\n4. Inscrever um canditado em uma vaga\n5. Excluir uma vaga\n6. Sair ")

    switch(menu){
        case "1":
            break
        case "2":
            let novaVaga = {}
            novaVaga.nome = prompt("Qual o nome da vaga?")
            novaVaga.descricao = prompt("Qual a descrição para a vaga?")
            novaVaga.dataLimite = prompt("Qual a data limite da vaga?")

            let confirmar = confirm("Deseja criar nova vaga com as informações:\nNome da Vaga: " + novaVaga.nome + "\nDescrição da vaga: " + novaVaga.descricao + "\nData limite: " + novaVaga.dataLimite)

            if(confirmar){
                vagas.push(novaVaga)
                alert("Vaga cadastrada com sucesso")
            } else {
                alert("Voltando ao menu")
            }
            break
        case "3":
            break
        case "4":
            break
        case "5":
            break
        case "6":
            alert("Encerrando...")
            break
        default:
            alert("Opção Invalida")
    }

} while (menu !== "6")