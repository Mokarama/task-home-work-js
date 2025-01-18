
// ----problem-11------
// Generate a multiplication table for number 9
let sum =0;
let num = 1;
while(true){
    sum += num;
    total = `${sum} + ${num} = ${sum + num}`;
    if(sum >=100){
        break;
    }
    console.log(total);
}
