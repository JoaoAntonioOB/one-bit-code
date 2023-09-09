function createLabel(text){
    const label = document.createElement('label')
    label.innerText = text
    return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createInput('input')
    label.id = id
    label.value = value
    label.name = name
    label.type = type
    label.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
const newRow = 0

addTechBtn.addEventListener('click', function(event){
    const newTech = document.getElementById('newTech')

    const newRow = document.createElement('li')
    const rowIndex = newRow



    const techName = createInput
    const timeExperinence = document.createElement('radio')
    
    newTech.appendChild(newRow)
    newRow.appendChild(techName)

})
