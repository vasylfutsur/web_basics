// const out = document.getElementById("output");

// // Формуємо кількість зірок по зростанню і спаданню
// let stars = [9, 17, 23, 27, 29, 29, 27, 23, 17, 9];

// let result = "=== Task 1 ===\n";

// for (let i = 0; i < stars.length; i++) {
//     result += "*".repeat(stars[i]) + "\n";
// }

// out.textContent = result;


// const out = document.getElementById("output");
// const startBtn = document.getElementById("start");

// startBtn.addEventListener("click", () => {
//     out.textContent = "Таймер запущено...\n";

//     let start = new Date().getTime();   // час старту
//     let current = start;
//     let secondsPassed = 0;

//     // Цикл блокує потік, але саме це і треба за умовою завдання
//     do {
//         current = new Date().getTime();
//         let diff = Math.floor((current - start) / 1000);

//         if (diff !== secondsPassed) {
//             secondsPassed = diff;
//             out.textContent = `Минуло: ${secondsPassed} сек`;
//         }

//     } while (secondsPassed < 10);

//     out.textContent = "10 секунд пройшло!";
// });

// Завдання 3: створити об’єкт car з літерала
// const car = {
//     speedometer: 0
// };

// // Вивід у HTML
// const out = document.getElementById("output");
// out.textContent = `Object car created.\nspeedometer = ${car.speedometer}`;


// Завдання 4: додаємо методи до об’єкта car

// const car = {
//     speedometer: 0,

//     // Сеттер — змінює значення
//     setSpeedometer(value) {
//         this.speedometer = value;
//     },

//     // Геттер — повертає значення
//     getSpeedometer() {
//         return this.speedometer;
//     },

//     // Очищення значення
//     clearSpeedometer() {
//         this.speedometer = 0;
//     }
// };

// // Виводимо результат у HTML
// const out = document.getElementById("output");

// let text = "=== Car object test ===\n";

// car.setSpeedometer(120);
// text += "After setSpeedometer(120): " + car.getSpeedometer() + "\n";

// car.clearSpeedometer();
// text += "After clearSpeedometer(): " + car.getSpeedometer() + "\n";

// out.textContent = text;


// Базовий клас Vehicle
class Vehicle {
    constructor() {
        this.speedometer = 0;
    }

    setSpeed(value) {
        this.speedometer = value;
        return this;  // для ланцюжкових викликів
    }

    getSpeed() {
        console.log(`Current speed: ${this.speedometer}`);
        return this;  // для ланцюжкових викликів
    }

    clearSpeed() {
        this.speedometer = 0;
        return this;  // для ланцюжкових викликів
    }
}

// Наслідування: Car від Vehicle
class Car extends Vehicle {
    constructor(brand) {
        super();
        this.brand = brand;
    }

    // Приклад додаткового методу
    info() {
        console.log(`Car brand: ${this.brand}`);
        return this;
    }
}

// Наслідування: Truck від Vehicle
class Truck extends Vehicle {
    constructor(capacity) {
        super();
        this.capacity = capacity;
    }

    info() {
        console.log(`Truck capacity: ${this.capacity} tons`);
        return this;
    }
}

// Тестування

const out = document.getElementById("output");

const car = new Car("Toyota");
const truck = new Truck(15);

let result = "=== Testing Car ===\n";

// Ланцюжковий виклик
car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed();
result += `Car speed after clear: ${car.speedometer}\n\n`;

result += "=== Testing Truck ===\n";
truck.setSpeed(80).getSpeed().setSpeed(120).clearSpeed();
result += `Truck speed after clear: ${truck.speedometer}\n\n`;

result += "=== Info methods ===\n";
car.info();
truck.info();

out.textContent = result;
