console.log("=== Task 1: Types ===");

var obj = { name: "Alex" };
var arr = [1, 2, 3];
var str = "Hello";
var num = 42;
var func = function() {};

console.log(obj, typeof obj);
console.log(arr, typeof arr);
console.log(str, typeof str);
console.log(num, typeof num);
console.log(func, typeof func);

console.log("=== Task 2 ===");

var myStr = "123";
var myNum = 456;

// Міняємо типи
myStr = Number(myStr); // тепер число
myNum = String(myNum); // тепер рядок

console.log(myStr, typeof myStr);
console.log(myNum, typeof myNum);


console.log("=== Task 3 ===");

console.log("5" == 5);  // true (приведення типів)
console.log("5" === 5); // false (строге порівняння)


console.log("=== Task 4 ===");

function encrypt(num, key) {
    return num ^ key;
}

function decrypt(num, key) {
    return num ^ key;
}

let secret = encrypt(123, 55);
console.log("Encrypted:", secret);

console.log("Decrypted:", decrypt(secret, 55));

console.log("=== Task Select element, Change style on click, Update text dynamically ===");
const h1 = document.querySelector("h1");
console.log(h1);
h1.onclick = () => {
    h1.style.color = "red";
};

setTimeout(() => {
    h1.textContent = "Updated heading!";
}, 2000);

console.log("=== Task valid form and toggle ===");
document.getElementById("toggleTheme").onclick = () => {
    document.body.classList.toggle("dark");
};

document.getElementById("myForm").onsubmit = function(e) {
    e.preventDefault();
    let name = document.getElementById("username").value;

    if (name.length < 3) {
        alert("Name is too short!");
    } else {
        alert("OK!");
    }
};

console.log("=== Testing ===");
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();

var a = 1;
function b() {
    a = 10;
    return;
}
b();
console.log(a);


console.log(+ "5");      // унарний плюс
console.log(5 + 3);      // бінарний плюс
console.log( 5 > 3 ? "yes" : "no"); // тернарний

let result = "Нехай завжди буде сонце, ".concat(
             "Нехай завжди буде небо, ",
             "Нехай завжди буде мама, ",
             "Нехай завжди буду я.");
console.log(result);


console.log("=== Підмасив з максимальною сумою ===");
function maxSubarray(arr) {
    let maxSum = arr[0];
    let cur = arr[0];

    for (let i = 1; i < arr.length; i++) {
        cur = Math.max(arr[i], cur + arr[i]);
        maxSum = Math.max(maxSum, cur);
    }

    return maxSum;
}

console.log(maxSubarray([-1, 3, -2, 5, -7]));


console.log("=== Додавання двох дуже великих чисел  ===");
function addBig(a, b) {
    let res = "";
    let carry = 0;
    a = a.split("").reverse();
    b = b.split("").reverse();

    let len = Math.max(a.length, b.length);

    for (let i = 0; i < len; i++) {
        let sum = (+a[i] || 0) + (+b[i] || 0) + carry;
        res = (sum % 10) + res;
        carry = Math.floor(sum / 10);
    }

    if (carry) res = carry + res;
    return res;
}

console.log(addBig("999999999999", "2"));

console.log("=== Різниця двох масивів  ===");
function arrayDiff(a, b) {
    let copy = [...a];

    b.forEach(item => {
        let index = copy.indexOf(item);
        if (index !== -1) copy.splice(index, 1);
    });

    return copy;
}

console.log(arrayDiff([1,2,2,3], [2]));
