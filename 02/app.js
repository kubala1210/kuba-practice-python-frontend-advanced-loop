const x = 5;
let result = 0;

for (let i = 0; i <= x; i++) {
    result += i;
}

console.log(result);

result = 0;
let i = 0;

while (i <= x) {
    result += i;
    i++;
}

console.log(result);