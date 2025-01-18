
// -----problem-8-------
// Display sum of all the odd numbers from 91 to 129.
let sum = 0;
for(let i=91; i<=129; i++){
    if(i% 2!==0){
        console.log("odd number",i);
    }
    sum +=i;
}
console.log(sum);


