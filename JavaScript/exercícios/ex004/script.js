let fila = []

let opcao = null

do {
    let pacientes = ""
    for(let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "º" + fila[i] + "\n"
    }
    opcao = prompt(
        "Pacientes: \n" + pacientes + 
        "\nEscolha uma opção:\n1. Novo paciente\n2. Consultar paciente\n3. Sair")

        switch (opcao){
            case "1":
                let novoPaciente = prompt("Qual o nome do Paciente?")
                fila.push(novoPaciente)
                break
            case "2":
                let pacienteConsultado = fila.shift()
                alert(pacienteConsultado + "foi removido da fila.")
                break
            case "3":
                alert("Encerrando...")
                break
            default: 
                alert("Opção invalida")
        }

} while (opcao !== "3")