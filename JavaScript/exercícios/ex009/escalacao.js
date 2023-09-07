function addPlayer(){
    let position = document.getElementById('position').value
    let name = document.getElementById('name').value
    let number = document.getElementById('number').value

        let confirmar = confirm("Escalar " + "como "  + position + "?")
        if(confirmar){
            let teamList = document.getElementById("teamList")
            let playerItem = document.createElement("li")
            playerItem.id = "player - "  + number
            playerItem.innerText = position + ":" + name + "(" + number + ")"
            teamList.appendChild(playerItem)

            document.getElementById("position").value = ""
            name = document.getElementById('name').value = "" 
            number = document.getElementById('number').value = ""
        
        }
}

function removePlayer(){
    let number = document.getElementById("numberToRemove").value
    let playerToRemove = document.getElementById("player - "  + number)

    let confirmar = confirm("Remover o jogador " + playerToRemove.innerText + " ?") 
    if (confirmar){
        document.getElementById("teamList").removeChild(playerToRemove)
        document.getElementById("numberToRemove").value = ""
    }
}
