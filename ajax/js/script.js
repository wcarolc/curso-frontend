
const url = 'https://api.github.com/users';
// const user = 'wcarolc';
const main = document.getElementById('main');

function getUser(user) {

fetch(`${url}/${user}`)
    .then((response) => response.json())
    .then((data) => {
        main.innerHTML = `${data.name} possui ${data.public_repos} repositórios públicos no Github como ${data.login}`
    })

    .catch((error) => console.error('Erro: ', error.message || error))

}

const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function(event){
    getUser(event.target.value)
})