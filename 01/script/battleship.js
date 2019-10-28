//let location1 = 3;
//let location2 = 4;
//let location3 = 5;
let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

// функция Math.floor округляет числа в меньшую сторону
// функция Math.random генерирует дробные числа от 0 до 1, не включая 1

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):", "0-6");
    if (guess < 0 || guess > 6) {
        alert("Введите корректное число от 0 до 6!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Попадание!");
            hits = hits + 1;

            if (hits == 3) {
                isSunk = true;
                alert("Все противники повержены, мой капитан!");
            }
        } else {
            alert("Мимо!");
        }
    }
}
let stats = "вы сделали " + guesses + "выстрелов. Ваша меткость составила: " + (3 / guesses);
alert(stats);