const unsplashURL = 'https://source.unsplash.com/random/';

const container = document.querySelector('.container');

const linhas = 10;

for(let i = 0; i < linhas * 3; i++){

    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomTamanho()}`;
    container.appendChild(img);
}

function getRandomTamanho(){
    return `${getRandomTamanho}x${getRandom()}`
}

function getRandom(){
    return Math.floor(Math.random() * 10 + 300)
}
