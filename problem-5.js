// --------problem-5------
// display odd numbers from 55 to 85 and skip the numbers divisible by 5.

for(let i=55; i<=85; i++){
    if(i % 2==0 || i % 5==0){
        continue;
    }
    console.log(i);
}



/*for(let i=55; i<=85; i++){
    if(i % 2 !== 0 && i % 5 !== 0){
        continue;
    }
    console.log(i);
}
*/





