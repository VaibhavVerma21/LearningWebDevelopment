// Started Video 13 Feb 2023
{
    // This is a comment

    // Normal Print Statment
    // console.log("Vaibhav Verma"); 
    // console.log(this)

    // Data Types
    let name = "Vaibhav Verma"; // String Value
    let age = 16; // Integer Value
    let decimal = 0.667; // Float Value 
    let boolean = false; // Boolean Value
    let null_ = null; // Null Value
    let undefined_ = undefined; // Undefined Value

    // Arrays
    let stuff = ["Vaibhav Verma", 16, 0.667, false, null, undefined]; // Array of previous stuff

    // Variables and Constants
    let variable = 10; // Declares and assigns variables a value
    variable = 20; // Value can be changed, will not throw exception
    const constant = 10; // Declares and assigns variables a value
    //variable = 20; // Value can not be changed, will throw exception

    // Printing variables
    let cost = 3500;
    // console.log(cost);
    cost = 2000;
    // console.log(cost);

    // Operators
    let assignment = 1; // Assignment Operator
    let addition = 2+1; // Addition Operator
    let subtraction = 2-1; // Subtraction Operator
    let multiplication = 2*1; // Multiplication Operator
    let division = 2/1; // Division Operator
    let modulus = 5%2; // Modulus Operator
    let power = 2**3; // Power Operator

    // Comparison Operators
    let greaterThan = 3>2; // Greater Than Operator
    let smallerThan = 2<3; // Smaller Than Operator
    let greaterThanOrEqualTo = 3>=2; // Greater Than Or Equal To Operator
    let smallerThanOrEqualTo = 2<=3; // Smaller Than Or Equal To Operator
    let equalTo = 3=="3"; // Equal To Operator (Ignores data type)
    let strictEqualTo = 3=="3"; // Strict Equal To Operator (Doesn't Ignore data type)
    let notEqualTo = 3!="3"; // Not Equal To Operator

    // Logical Operators
    let and = true && true; // And Operator
    let or = false || true; // Or Operator
    let not = !false; // Not Operator
}
// Finished Video 13 Feb 2023


// Started Video 14 Feb 2023
{
    // If else if ladder
    let signal = "yellow";
    if(signal=="red")
        // console.log("Red => Stop");
        null;
    else if(signal=="yellow")
        // console.log("Yellow => Go Slow");
        null;
    else if(signal=="green")
        // console.log("Green => Go Fast");
        null;
    else
        // console.log("Invalid signal");
        null;

    // Ternary Operator
    // console.log(false?true:false);

    // Switch Case
    let user = "admin";
    switch(user){
        case "admin":
            // console.log("Admin");
            break;
        case "vaibhav":
            // console.log("Vaibhav Verma");
            break;
        case "user":
            // console.log("User");
            break;
        default:
            // console.log("Guest");
    }
    
    // For Loop
    for(let i=0; i<5;i++){
        // console.log(i);
    }

    // While Loop
    let while_ = 0;
    while(while_ < 5){
        // console.log(while_);
        while_++;
    }

    // Do While Loop
    let do_ = 0;
    do{ // Execute Loop atleast once
        // console.log(do_);
        do_++;
    } while(do_ == 0)
}
// Finished Video 14 Feb 2023


// Started Video 20 Feb 2023
{
    // Arrays
    let a = [1, 2, 3.0, 4, "Vaibhav", undefined];

    let b = new Array(); // Output -> []
    let c = new Array(5); // Output -> [ <5 empty items> ]

    // console.log(a[0]); // Output -> 1
    a[0] = "lol" // Arrays are mutateable in javascript
    // console.log(a[50]); // Doesn't throw an error. Output -> undefined
}
{
    // Arrays Methods
    let arr = [1, 2, 3, 4, 5];
    
    arr.push(6); // Adds parameters to right side of array. Returns the new length of the array.
    arr.push(7, 8);

    arr.pop(); // Removes the last element from an array and returns it. If the array is empty, undefined is returned.
    arr.shift(2); // Removes the first element from an array and returns it. If the array is empty, undefined is returned.
    
    arr.unshift(9, 10); // Adds parameters to left side of array. Returns the new length of the array.

    let a1 = [1,2,3,4,5];
    let a2 = [6,7,8];
    let a3 = a1.concat(a2); // Combines two or more arrays. Returns a new array. Output -> [1, 2, 3, 4, 5, 6, 7, 8]
    
    let s = a3.join("$"); // Adds all the elements of an array into a string, separated by the parameter. Output -> 1$2$3$4$5$6$7$8
    a3.reverse(); // Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array..

    let index = a3.indexOf(1); // Returns index of first occurence of the parameter in the array, -1 if value is not found in array. Output -> 2 as array is [1, 2, 3, 4, 5, 6, 7, 8]

    let slice = a1.slice(2,4); // Returns array from start to end(end not included). A negative index can be used to indicate an offset from the end of the array. Output -> [3,4]
    
    let a4 = [1, 2, 3, 4, 5, 6, 7];
    let deleted = a4.splice(2,2,11,12,13); // Starts from index of 1st parameter. Deletes (2nd parameter) number of elements from that index. Adds parameters passed after 2nd parameter from that index. Returns array with deleted elements. Output -> [ 3, 4 ]
}
{
    // Function Declarations
    function functionName(){
        // Function body
    }
    functionName(); // Calling function

    function sqrt(x){ // x is a parameter.
        return Math.sqrt(x); // Returns the value to whoever called the function.
    }
    let sqrt_4 = sqrt(4); // sqrt function returns value which gets stored in variable 'a'
    // console.log(sqrt_4); // Output -> 2
}
{
    // Default parameters
    function add(a=0, b=0){ // Sets default value of a and b as 0.
        return a + b;
    }
    // console.log(add(10, 12)); // Output -> 22
    // console.log(add(10)); // Output -> 10
    // console.log(add()); // Output -> 0

    // Array parameters
    function add([a , b]){ // Sets a to first element of the array and b to second element of the array.
        return a + b;
    }
    let arr = [1, 2, 3, 4, 5, 6];
    // console.log(add(arr)); // Output -> 3
    // console.log(add(arr.slice(2,4))); // Output -> 7
    // console.log(add(arr.slice(2,6))); // Output -> 7
}
{
    // Unlimited parameters
    function add(){
        let sum = 0;
        for(let i = 0; i < arguments.length; i++) // Arguments is an array.
            sum += arguments[i];
        return sum;
    }
    let sum = add(1,2,3,4,5,6,7,8,9,10); // Output -> 55
}
{
    // Arrow Functions
    
    // 1. One parameter, single statement.
    const square = x => x * x; // Parentheses are optional in the case of a single parameter. The return keyword is not required for a single return expression in the function body.

    // 2. Multiple parameters, single statement.
    const sum = (x=0, y=0) => x + y; // Must use parentheses in case of multiple parameters.

    // 3. Multiple parameters, multiple statement
    const sumWithLog = (x=0, y=0) => {
        console.log(`Adding ${x} and ${y}`);
        return x + y; // The return keyword is required in case of multiple statements in the function.
    }

    // 4. Returning an Object
    const sumAndDifference = (x=0, y=0) => ({sum: x + y, diff: x - y}); // To return an object notation, wrap it with parentheses as object has to wrapped inside curly brackets which can be confused as a scope by javascript.
}
{
    // Anonymous functions
    let anonymousAdd = function (x=0, y=0) {
        return x + y;
    };
    // console.log(anonymousAdd(1,2)); // Output -> 3

    // Immediately Invoked Function
    (function (x){
        // console.log(x * x ); // Output -> 25
    }) (5);
}
{
    // Function Expression
    // In JavaScript, a function expression is a way to define a function as a value of a variable. They are of two types: 
    
    // Named Function Expression
    let named = function exec(){
        return;
    }

    //Unnamed Function Expression
    let unnamed = function (){
        return;
    }
}
{
    // Objects Declarations

    let obj = {id: 101, name: "Alex", salary: 10000} // Declaring keys and values at the object declaration
    // console.log(obj); // Output -> { id: 101, name: 'Alex', salary: 10000 }

    let emp = new Object();
    emp.id = 102; // Declaring keys and values after the object declaration
    emp.name = "Sam";
    emp.salary = 11000
    // console.log(emp); // Output -> { id: 102, name: 'Sam', salary: 11000 }

    function Emp(id, name, salary){ // Class kind of method to make object declaration.
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    let e = new Emp(103, "Amy", 12000);
    // console.log(e); // Output -> Emp { id: 103, name: 'Amy', salary: 12000 }

    let id = e.id; // Using . operator to access value of a key.
    // console.log(id); // Output -> 103
    let name = e["name"];// Using array kind of method to access value of a key.
    // console.log(name); // Output -> Amy

    e.salary = 15000; // Reassigning a value to a key using . operator.
    // console.log(e.salary); // Output -> 15000
    e["salary"] = 20000; // Reassigning a value to a key using array kind of method.
    // console.log(e.salary); // Output -> 20000 

    delete emp.id; // Removes a key. In this case it was id.
    // console.log(emp); // Output -> { name: 'Sam', salary: 11000 }
}
{
    function Emp(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    const emp = new Emp(1, "Vaibhav", 17);

    let keys = Object.keys(emp); // Returns an array with all keys in it.
    // console.log(keys); // Output -> [ 'id', 'name', 'age' ]

    let values = Object.values(emp); // Returns an array with all values of keys in it.
    // console.log(values); // Output -> [ 1, 'Vaibhav', 17 ]

    let entries = Object.entries(emp); // Returns an array with arrays as elements which contains key and its value in the array.
    // console.log(entries); // Output -> [ [ 'id', 1 ], [ 'name', 'Vaibhav' ], [ 'age', 17 ] ]

    Object.freeze(emp); // Prevents object to have its value changed or removed or a new key and value to be added. Makes object immutable.

    Object.seal(emp); // Prevents object from getting its keys and values added or removed.

    let obj = {x: 16};
    let o = Object.assign(obj, emp); // Appends contents of objects to the first object passed in parameters. Also returns the new object with added values.
    // console.log(obj); // Output -> { x: 16, id: 1, name: 'Vaibhav', age: 17 }
    // console.log(o); // Output -> { x: 16, id: 1, name: 'Vaibhav', age: 17 }
}
// Finished Video 20 Feb 2023