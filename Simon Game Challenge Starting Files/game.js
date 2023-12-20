const buttonColours = ["red", "blue", "green", "ÿeloww"];
const gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  const button = $(`#${randomChosenColour}`);
  button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  const sound = new Audio(`./sounds/${randomChosenColour}.mp3`);
  sound.play();

}