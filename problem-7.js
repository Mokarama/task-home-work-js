// -------------Problem-7-------------
/*Find all the odd numbers from 61 to 100.
And Find all the even numbers from 78 to 98.*/

for(let i=61; i<=100; i++){
    if(i % 2!==0){
        console.log("odd numbers", i );
    }
    if (i >= 78 && i <= 98 && i % 2 == 0){
        console.log("even numbers", i );
    }
   
}