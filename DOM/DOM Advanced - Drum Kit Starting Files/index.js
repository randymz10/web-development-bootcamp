document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    const buttonInnerHTML = element.innerHTML;
    makeSound (buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

const makeSound = (key) => {
    switch (key) {
        case "w":
          const tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          const tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          const tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          const tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          const snare = new Audio("./sounds/snare.mp3");
          snare.play();
          break;
        case "k":
          const crash = new Audio("./sounds/crash.mp3");
          crash.play();
        case "l":
          const kick = new Audio("./sounds/kick-bass.mp3");
          kick.play();
          break;
        default:
            console.log(key);
          break;
      }
}

const buttonAnimation = (currentKey) => {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 100);
}