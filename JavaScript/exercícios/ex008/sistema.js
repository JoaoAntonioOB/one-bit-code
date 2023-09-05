const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + "candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("Digite o nome da vaga:")
    const descricao = prompt("Digite a descrição para a vaga:")
    const dataLimite = prompt("Digite a data limite da vaga:")

    const confirmar = confirm("Deseja criar nova vaga com as informações:\nNome da Vaga: " + nome + "\nDescrição da vaga: " + descricao + "\nData limite: " + dataLimite)

    if(confirmar){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga cadastrada com sucesso")
    }
}

function exibirVaga(){
   const indice =  prompt("Digite o indice da vaga:")
   if (indice >= vagas.length || indice < 0){
    alert("indice invalido")
    return
   }
   const vaga = vagas[indice]

   const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
    return textoFinal + "\n - " + candidato
   }, "")

   alert(
    "Vaga nº " + indice + 
    "\nNome: " + vaga.nome + 
    "\nDescrição: " + vaga.descricao + 
    "\nData limite: " + vaga.dataLimite + 
    "\nQuantidade de candidatos: " + vaga.candidatos.length + 
    "\nCandidatos incritos: " + candidatosEmTexto
   )
}

function inscreverCandidato(){
    const candidato = prompt("Digite o nome do candidato:")
    const indice = prompt("Digite o indice da vaga desejada:")
    const vaga = vagas[indice]

    const confirmar = confirm("Deseja inscrever candidato " + candidato + " na vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite)

    if(confirmar){
        vaga.candidatos.push(candidato)
        alert("Candidato cadastrado com sucesso")
    }
}

function excluirVaga(){
    const indice = prompt("Digite o indice da vaga:")
    const vaga = vagas[indice]

    const confirmar = confirm("Deseja excluir vaga? " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite)

    if(confirmar){
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

function exibirMenu(){
    let menu = prompt("Vagas de Emprego\n Escolha uma das opções:\n1. Listar vagas disponíveis\n2. Criar uma nova vaga\n3. Visualizar uma vaga\n4. Inscrever um canditado em uma vaga\n5. Excluir uma vaga\n6. Sair ")
    return menu
}

function executar() {
    let menu = null

    do {
        menu = exibirMenu()

        switch(menu){
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Encerrando...")
                break
            default:
                alert("Opção Invalida")
        }

    } while (menu !== "6")
}

executar()