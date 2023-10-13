//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

const bmiCalculator = (weight, height) => weight / (height ** 2);


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:


bmi should equal 20 when it's rounded to the nearest whole number.

*/
var bmi = bmiCalculator(65, 1.8); 
console.log(Math.floor(bmi));