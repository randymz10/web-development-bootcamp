let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

const firstImage = document.querySelector('.img1');
firstImage.setAttribute('src', `./images/dice${randomNumber1}.png`)

const secondImage = document.querySelector('.img2');
secondImage.setAttribute('src', `./images/dice${randomNumber2}.png`)

const h1 = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = `Player 1 Wins!`;
} else if (randomNumber1 < randomNumber2) {
    h1.innerHTML = `Player 2 Wins!`;
} else {
    h1.innerHTML = `Draw!`;
}