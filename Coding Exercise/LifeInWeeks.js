const lifeInWeeks = (age) => {
    const restLifeTime = 90 - age;
    const days = restLifeTime * 365;
    const weeks = restLifeTime * 52;
    const months = restLifeTime * 12;
    console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);
}