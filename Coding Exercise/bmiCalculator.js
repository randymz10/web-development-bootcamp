//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

const bmiCalculatorOld = (weight, height) => weight / Math.pow(height, 2);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

bmi should equal 20 when it's rounded to the nearest whole number.
*/

const bmiCalculator = (weight, height) => {
    let bmi = weight / (height ** 2);

    if (bmi < 18.5) return `Your BMI is ${bmi}, so you are underweight.`;
    if (bmi >= 18.5 && bmi <= 24.9) return `Your BMI is ${bmi}, so you have a normal weight.`;
    if (bmi > 24.9) return `Your BMI is ${bmi}, so you are overweight.`;
};