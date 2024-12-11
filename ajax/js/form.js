
const form = document.querySelector('#form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const cep = document.getElementById('cep');
const mensagem = document.querySelector('#mensagem');
const notNull = document.getElementsByClassName('not-null');
let msg = '';

function isEmpty(elem){
    return elem.value.length < 1 ? `O campo <strong>${elem.name}</strong> não pode ser vazio.` : '';
}

function validaEmail(elem){
    return elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? '' : `Digite um <strong>e-mail</strong> válido</strong>`;
}

function validaCPF (elem){ // sem validade real
    return elem.value.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/) ? '' : `Digite um <strong>CPF</strong> válido`
}

function validaCEP (elem){ // sem validade real
    return elem.value.match(/\d{5}-\d{3}/) ? '' : `Digite um <strong>CEP</strong> válido`
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    let msg = [];
    let markup = '';
    Array.from(notNull).forEach(field => {
        let fieldState = isEmpty(field);
        if(fieldState) 
            msg.push(fieldState)
    });

    const isEmail = validaEmail(email);
    if(isEmail) msg.push(isEmail)

    const isCPF = validaCPF(cpf);
    if(isCPF) msg.push(isCPF)

    const isCEP = validaCPF(cep);
    if(isCEP) msg.push(isCEP)

    msg.forEach(item => {
        markup += `<p>${item}</p>`
    })

    mensagem.innerHTML = markup;
})