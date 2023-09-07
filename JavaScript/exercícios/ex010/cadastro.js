function createLabel(text, htmlFor){
    let label = document.createElement('label')
    label.htmlfor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type="text", placeholder=""){
    let input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

let addTechBtn = document.getElementById('addTechBtn')
let form = document.getElementById('devForm')
let developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev){
    let starckInputs = document.getElementById('stackInputs')
    
    let newRows = document.getElementById('LI')
    let rowIndex = inputRows
    inputRows++
    newRows.id = 'inputRow-' + rowIndex
    newRows.classname = 'inputRow'

    let techNameLabel = createLabel('Nome: ' + 'techName-' + rowIndex)
    let techNameInput = createInput('techName-' + rowIndex, null, techName)

    let expLabel = createLabel('Esperencia: ')
    let exRadio = createInput('esxRaio-' + rowIndex + '.1', '0-2 anos', 'techExp-' + rowIndex)

    newRows.append(techNameLabel, techNameInput)
    starckInputs.appendChild(newRow)
})