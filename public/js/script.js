const socket = io()

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const messages = document.querySelector('#messages')
const pseudo = document.querySelector('#pseudo')

form.addEventListener("submit", e => {
    e.preventDefault()

    if(!input.value) {
        return
    }
    socket.emit('chat message', pseudo.value, input.value)
    input.value = ""
    input.focus()
})

// Récupérer les messages et mettre à jour le DOM
socket.on('chat message', (pseudo, msg) => {
    const item = document.createElement('li')
    item.textContent = `${pseudo} : ${msg}`
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})

// Récupérer le pseudo pour le mettre à la place de 