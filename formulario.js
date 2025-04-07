const form = document.getElementById('form-contato')

form.addEventListener('submit', event => {
    if (!form.checkValidity()) { //valida required, min, max, pattern return true or false
        event.preventDefault() // evita o comportamento padrao, bloqueando
        event.stopPropagation() //evita a continuação da propagação
    }

    form.classList.add('was-validated') //importante para mostrar os feedbacks
}, false)