/*4. Checking if it's an Array
Instructions:
                1.Create different variables, each containing either an array or a non-array value.
                2.Now use isArray to check if each variable is an array.
                3.Print a message to the console indicating whether each variable is an array or not.*/

               
                let brothers = ["Hridoy", "Sabbir", "Tanvir"]; 
                let name = "Shants";                      
                let age = 30;                               
                let isStudent = true;                      
                let books = ["Math", "Science", "Bangla"]; 
                let address = { city: "Dhaka", country: "Bangladesh" };
                
               
                function checkIfArray(variable, variableName) {
                    if (Array.isArray(variable)) {
                        console.log(`The variable '${variableName}' is an array.`);
                    } else {
                        console.log(`The variable '${variableName}' is not an array.`);
                    }
                }
                
                

                checkIfArray(brothers, "brothers");
                checkIfArray(name, "name");
                checkIfArray(age, "age");
                checkIfArray(isStudent, "isStudent");
                checkIfArray(books, "books");
                checkIfArray(address, "address");          