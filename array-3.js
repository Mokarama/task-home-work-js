/*3. Checking Array Membership with ‘includes’
Instructions:
            1.Create an array of books containing different book.
            2.Use the includes method to check if the array contains a javascript book.
            3.Print a message to the console indicating whether the element is present in the array or not.
*/

let books = ["HTML", "CSS", "JavaScript", "React", "Python", "Node.js", "C++", "C"];
let javaScriptBook = books.includes( "JavaScript");
console.log(javaScriptBook);

if(javaScriptBook){
    console.log("JavaScript Boiti ache")
}

else{
    console.log("javaScript Boiti nei")
}