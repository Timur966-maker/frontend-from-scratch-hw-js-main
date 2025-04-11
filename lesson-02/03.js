/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять

let rating;

let grade = rating



if(score <= 49){
    rating = "F"
} else if (score >= 50 && score <= 69){
    rating = "D"
} else if (score >= 70 && score <= 79){
    rating = "C"
} else if (score >= 80 && score <= 89){
    rating = "B"
} else {
    rating = "A"
}
// your code
console.log(rating);
