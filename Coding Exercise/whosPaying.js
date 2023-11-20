const whosPaying = (names) => {
    const randomNumber = Math.floor(Math.random() * names.length);
    const randomName = names[randomNumber];
    return `${randomName} is going to buy lunch today!`;
};

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));