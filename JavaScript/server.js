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


// Started Video 6 Mar 2023
{
    // Higher Order Functions, Callbacks, Returning Functions, setInterval, setTimeout

    const powerTwo = (n) => {
        return Math.pow(n, 2);
    }
    // A function that returns a function or takes other functions as arguments is called a higher-order function.
    const powerThree = (powerTwo, n) => {
        return powerTwo(n) * n;
        // A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
    }
    let cubeOf3 = powerThree(powerTwo, 3);
    // console.log(cubeOf3); // Output -> 27

    function sayHello() {
        return function lol (){
            console.log("Hello!");
        }
    }
    let hello = sayHello();
    // console.log(hello); // Output -> [Function: lol]
    // hello(); // Output -> Hello!

    const oneFunc = (m) => {
        const twoFunc = (n) => {
            const threeFunc = (o) => {
                return m + n + o;
            }
            return threeFunc;
        }
        return twoFunc;
    }
    let result = oneFunc(2)(3)(4);
    // console.log(result); // Output -> 9

    // setInterval(() => console.log("Hi!", Math.random()), 1000); // Exectues the callback function every 1000 milliseconds or 1 second.

    let setTimeoutID = setTimeout(() => {
        // console.log("This message will be printed after 2000 milliseconds or 2 seconds");
        // This is an async function which means that code after this will be exectued while the setTimeout is waiting.
    }, 2000); // Except the callback and time argument, any other arguments that are passed to setTimeout are passed to callback in order. It also returns its ID which can be used to stop the setTimeout or setInterval by using clearTimeout(ID) or clearInterval(ID). This also happens in setInterval. NaN are treated as 0 i.e. setTimeout executes immediately and setInterval executes without any delay infinitely.

}
{
    // Array Methods for iterating through the array

    let array = ["Vaibhav", "Verma"];
    let arrayResult = array.forEach((element, index, arr) => { // Takes callback as argument
        let element_ = element; // Stores current element
        let index_ = index; // Stores index of current element
        let arr_ = arr; // Stores the array of elements
        // Undefined is returned to the forEach function.
    }); 
    // This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database) and does not return anything.
    // console.log(arrayResult); // Output -> undefined


    let map = ["Vaibhav", "Verma", "is", "a", "good", "boy"];
    let mapResult = map.map((element, index, arr) => {
            return element + " 1"; // Stores the returned value in a new array and is returned to the map function.
    }); 
    // This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase). It does not mutate the array on which it is called (although the callback function may do so).
    // console.log(map); // Output -> [ 'Vaibhav', 'Verma', 'is', 'a', 'good', 'boy' ]
    // console.log(mapResult); // Output -> [ 'Vaibhav 1', 'Verma 1', 'is 1', 'a 1', 'good 1', 'boy 1' ]


    let heros = ["lolraj", "idklol", "idkraj", "lolraj"];
    const herosWithRaj_Bugged = heros.filter((element, index, arr) => {
        element.endsWith("raj"); // Need to return the value in order to store it in the array which will be returned to the filter function.
    });
    // console.log(herosWithRaj_Bugged); // Output -> []
    const herosWithRaj = heros.filter((element, index, arr) => {
        return element.endsWith("raj"); // The element which satisfies the condition in the return statement gets stored in the array which will be returned back to filter function.
    });
    // console.log(herosWithRaj); // Output -> [ 'lolraj', 'idkraj', 'lolraj' ]


    let nums = [20, 30, 50];
    let sumOfNums = nums.reduce((accumulator, currentValue, index, arr) => {
        return accumulator + currentValue; // Need to return value to store in accumulator for next iteration
    }, 0);
    // Accumulator stores the result of calculation returned by the previous iterations. If it is just starting it takes accumulator as value of initial value argument of reduce function(if given) and starts from index 0 otherwise it starts from index 1 and takes accumulator as value of element at index 0.
    // console.log(sumOfNums); // Output -> 100


    let score = [200, 300, 310, 250, 150];
    let areAllPositive = score.every((element, index, arr) => {
        return element > 0; // Need to return to have an effect on every function. Need to have return statement between {} but return statement in not needed for one statement i.e. where there is no {} as javascript on its own returns when there is no {}.
    }); // Checks if all elements pass a certain test/condition. Returns a boolean value.
    // console.log(areAllPositive); // Output -> true
    let areAllNumbers = score.every((element, index, arr) => {
        // return typeof(element) === Number; // typeof(2) returns 'number' and not Number
        return typeof(element) == 'number';
    });
    // console.log(areNumbers); // Output -> true
    
    
    let atLeastOneNumber = score.some((element, index, arr) => {
        return typeof(element) === 'number'; // Returns true if even one of the elements satisfies the condition.
    });
    // console.log(atLeastOneNumber); // Output -> true


    const toBeFindFrom = [5, 12, 8, 130, 44];
    const found = toBeFindFrom.find((element, index, arr) => {
        return element > 10; // Returns the first element that satisfies the condition. Returns undefined if not satisfied by any element.
    });
    // console.log(found); // Output -> 12
    const foundIndex = toBeFindFrom.findIndex((element, index, arr) => {
        return element > 13;
    })
    // console.log(foundIndex); // Output -> 3

    const months = ["March", "Jan", "Feb", "Dec"];
    months.sort();
    // console.log(months); // Output -> [ 'Dec', 'Feb', 'Jan', 'March' ]
    const number = [1, 30, 4, 21, 100000];
    number.sort();
    // console.log(number); // Output -> [1, 100000, 21, 30, 4]
    // The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

}
{
    // Regex

    let regexOne = new RegExp('pw');
    let regexTwo = new RegExp('pw', 'gi'); // RegExp(pattern, flag)
    let regexThree = /pw/gi; // (/pattern/flag) (not in quotes)
    const stringToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based on pwcontent"

    const result = regexThree.test(stringToCheck); // returns boolean on whether the pattern in in string or not.
    // console.log(result); // Output -> true
    const anotherResult = stringToCheck.match(regexThree); // returns a array with occurences of that pattern.
    // console.log(anotherResult); // Output -> [ 'PW', 'Pw', 'pw' ]

    const oneMoreResult = stringToCheck.replace(regexThree, 'pw-'); // Replaces regex result with 2nd argument.
    // console.log(oneMoreResult); // Output -> pw- is growing at a rapid speed and recently they are working on pw-skills to create skills based on pw-content

    const url = "http://www.pwskills.com/Vaibhav%20Verma";
    const useAbleUrl = url.replace(/%\d0/, '-'); // Replaces the regex with '-' The regex is %(any digit)0
    // console.log(useAbleUrl); // Output -> http://www.pwskills.com/Vaibhav-Verma

    // Good Website for Regex -> https://regexr.com/

}
// Finished Video 6 Mar 2023


// Started Video 13 Mar 2023
{
    // Spread and Rest
    // '...' is spread as well as rest operator but depends on it implementation

    


    // Spread Operator Use Case Scenario

    const firstArray = [1,2,3,4];
    const secondArray = [5,6,7,8];

    let threeArray = [firstArray, secondArray]; // Puts the parameters passed as individual element into an array. 
    // console.log(threeArray); // Output -> [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

    threeArray = firstArray.concat(secondArray); // Below statement does the same job
    threeArray = [...firstArray, ...secondArray]; // '...' Brings out the elmenet from the array
    // console.log(threeArray); // Output -> [1, 2, 3, 4, 5, 6, 7, 8]

    let arr1 = [3, 5, 8];
    let obj1 = { ...arr1 }; // Puts element of array into an object
    // console.log(obj1); // Output -> { '0': 3, '1': 5, '2': 8 }
    
    let obj2 = {
    name: "Harry",
    company: "Company xyz",
    address: "XYZ"
    };
    // console.log({ ...obj2, name: "John", company: "ABC" }); // This will bring value from obj2 but overwrite them with the new values
    // console.log({ name: "John", company: "ABC", ...obj2 }); // This will print the obj2 object without overwriting any values




    // Rest Operator Use Case Scenario

    (() => {
        let args = Array.from(arguments); // Converts an iterateable object to an array
        args = args.map(e => e*2); // Doubles each number got from the arguments in the array
        // console.log(args); // Output -> [2, 4, 6]
    })(1,2,3);

    ((...args) => { // Converts individual arguments into a single array
        args = args.map(e => e * 3); // Triples each number got from the arguments in the array
        // console.log(args); // Output -> [ 3, 6, 9 ]
    })(1,2,3);
    



    // Examples

    const names = ["superman", "flash"];
    const newNames = ["Batman", ...names, "thor"]; // Spread
    // console.log(newNames); // Output -> [ 'Batman', 'superman', 'flash', 'thor' ]

    const sitename = "pwskills"; // Spread
    // console.log([...sitename]); // Output -> ['p', 'w', 's', 'k', 'i', 'l', 'l', 's']

    ((...values) => { // Rest
        // console.log(values); // Output -> [ 'superman', 'flash' ]
    })("superman", "flash");

}
{
    // Destructuring

    let arr = [3, 5, 8, 9, 12, 14];
    // No need to do this:
    let a__ = arr[0];
    let b__ = arr[1];

    let [a_, b_] = arr; // Grabs first and second element and store into a_ and b_
    // console.log(aa, bb); // Output -> 3 5

    let [a, b, c, d, ...rest] = arr; // Grabs first, second, third, forth and stores in a, b, c, d and rest of them in variable rest
    // console.log(a, b, c, d, rest); // Output -> 3 5 8 9 [ 12, 14 ]

    let [aa, , bb, ...rest_] = arr; // Stores first, second, third in aa, nothing, bb and rest of them in variable rest_. Comma with no variable after it means that the corresponding value will not be stored.
    // console.log(aa, bb, rest_); // Output -> 3 8 [ 9, 12, 14 ]

    let { aaa, bbb } = { aaa: 1, bbbb: 5 }; // Stores value of key in its corresponding variable with same name as the key
    // console.log(aaa, bbb) // Output -> 1 undefined 

    let { aaa_, bbb_="Default_Value" } = { aaa_: 1, bbbb_: 5 }; // Default value can be assigned in case if the variable may be undefined.
    // console.log(aaa_, bbb_) // Output -> 1 Default_Value 

}
{
    // Sets

    let emptySet = new Set(); // Stores unique values of any data type
    // console.log(emptySet.size); // Output -> 0

    let myArray = [1,2,3,4];
    let newSet = new Set(myArray);
    // console.log(newSet); // Output -> Set(4) { 1, 2, 3, 4 }

    newSet.add(2); // Doesn't add because 2 was already in the set, set stores unique values
    newSet.add(9); // Adds 9 to the set
    // console.log(newSet); // Output -> Set(5) { 1, 2, 3, 4, 9 }
    // console.log(newSet.has(4)); // Output -> true

    newSet.clear(); // Clears the set
    // console.log(newSet); // Output -> Set(0) {}

    let set1 = new Set([1,2,3,4,5]);
    let set2 = new Set([5,6,7,8,9]);
    let intersection = new Set([...set1].filter(element => set2.has(element)));
    // console.log(intersection); // Output -> Set(1) { 5 }

}
{
    // Maps

    let map = new Map();
    // console.log(map.size); // Output -> 0

    let arr=[
        [1, "Mithun"],
        [2, "Alka"],
        [3, "Prabir"],
        [4, "Shivam"],
        [5, "Vinay"]
    ];
    arr.map(element => map.set(element[0], element[1]));
    // console.log(map); // Output -> Map(5) {1 => 'Mithun', 2 => 'Alka', 3 => 'Prabir', 4 => 'Shivam', 5 => 'Vinay'}

}
// Finished Video 13 Mar 2023


// Started Video 20 Mar 2023
{
    // Try, Catch and Finally.
    try{
        let x = undefined;
        console.log(x[0]); // TyperError
    } catch(error) {
        // This block of code gets executed when there is an error in try block.
        // console.log("Error is: ", error);
    } finally {
        // This block of code always gets executed after try and catch.
        // console.log("This always gets exectued");
    }
    // console.log("End");

}
{
    // Class and its Instaniation
    class Student{
        // Properties -> Variables -> Data Members
        name;
        class; // No need of keyword let, var or const
        age;

        // Behaviours -> Functions -> Member Functions
        display(){
            // No need of keyword function
            console.log("Called Display Function");
        }
    }
    let obj = new Student();
    // console.log(obj); // Output -> Student { name: undefined, class: undefined, age: undefined }
    // obj.display(); // Output -> Called Display Function 

}
{
    // Class Constructors
    class Product{
        constructor(name, price, rating){ // This function will always be called when a new object is created.
            this.name = name; 
            this.price = price;
            this.rating = rating;
            // 'this' refers to the object that called the function(calling context)
            
            return this;
            return 10; // Doesn't return primitive data types. Current object (aka 'this') is returned and ends the constructor.
            return {x:4, y:2}; // Can return objects. This object will be returned to obj variable. Output of log(obj) will be { x: 4, y: 2 }
        }
        
        // constructor(){ // Multiple constructor not allowed }
        
        display(){
            console.log("'This' refers to:", this, "Name:", this.name, "Price:", this.price, "Rating:", this.rating); 
            // 'this' refers to the object that called the function(calling context)
        }
    }
    let obj = new Product("iPhone", 100000, 5); // new -> creates an empty plain object
    // console.log(obj); // Output -> Product { name: 'iPhone', price: 100000, rating: 5 }
    // console.log(obj.name); // Output -> iPhone
    // obj.display(); // Output -> 'This' refers to: Product { name: 'iPhone', price: 100000, rating: 5 } Name: iPhone Price: 100000 Rating: 5
    
    
    
    // Functional Constructors
    function Product_(name, price, rating){
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
    Product_.prototype.sampleFunction = function() {
        console.log("Function constructor's member function is called.");
        // To declare a member function in a functional constructor, use prototype.
    }
    let obj_ = new Product_("MacBook", 150000, 5); // The function will only be regarded as functional constructor, when new keyword is used during the declaration and initialization of the object.
    // console.log(obj_); // Output -> Product_ { name: 'MacBook', price: 150000, rating: 5 }
    // obj_.sampleFunction(); // Output -> Function constructor's member function is called.
    


    let x = {func: Product_};
    // console.log(x); // Output -> { func: [Function: Product_] }
    x.func("iPods", 8000, 5);
    // console.log(x); // Output -> { func: [Function: Product_], name: 'iPods', price: 8000, rating: 5 }
    
    
    
    let Product__ = function(name, price, rating) {
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
    let obj__ = new Product__("MacBook", 150000, 5);
    // console.log(obj__); // Output -> Product__ { name: 'MacBook', price: 150000, rating: 5 }
    // Same thing with function expression and anonymous function expression


    let object = {
        x: 10,
        fun() {
            console.log(this.x);
        }
    }
    // object.fun() // Output -> 10
    
    
    
    // SPECIAL CASE: Arrow functional constructors
    let Product___ = (name, price, rating) => {
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
    // let obj___ = new Product___("MacBook", 150000, 5); // Constructors can not be made from Arrow functions. Will throw a TypeError.



    // IMPORTANT: IN ARROW FUNCTIONS, 'THIS' VALUE DOESN'T REFER TO THE CALLING CONTEXT BUT TO THE 'THIS' OF THE PARENT SCOPE OR THE 'THIS' OUTSIDE THE FUNCTION.

    let object_ = {
        x:10,
        func: () => {
            console.log(this.x); 
            // In this case the 'this' outside the arrow function is the window or the global this. And the window doesn't have a variable 'x'
        }
    }
    // object_.func(); // Output -> undefined


    let object__ = {
        x:10,
            func() {
                console.log(this, "Outside the arrow function");
                y = {
                    gun: () => {
                        console.log(this, "Inside the Arrow Function");
                        // In this case the 'this' outside the arrow function is the 'this' refering to the calling context which is 'object__'
                        // Object 'y' doesn't have a 'this' but function 'func' has a 'this' refering to the calling context which is 'object__'

                        console.log(this.x); // The 'x' of the 'this' is the 'x' of calling context which is 10.
                    }
                }
                y.gun();
            }
    }
    // object__.func(); // Output -> 10

}
{
    // Private members and static members
    class Product{
        #rating; // To create a private variable it MUST be declared and an # must be at the starting of the variable name.

        constructor(name, price, rating){
            this.name = name; 
            this.price = price;
            this.#rating = rating; // # must be added wherever the private variable has to be accessed
        }

        static custom(){
            // Static Function
            // They are class properties
            console.log("Calling a Static Function");
        }

        display(){
            console.log("This refers to:", this, "Name:", this.name, "Price:", this.price, "Rating:", this.#rating);
        }
    }
    let obj = new Product("iPhone", 100000, 5);
    // console.log(obj); // As the variable is set to private, it is not returned in this.
    // console.log(obj.rating); // Can't access private variable outside class. Also can not overwrite it outisde the class. Output -> undefined

    // obj.custom(); // Throws TyperError, wrong way to call them, they are class properties
    // Product.custom(); // Right way to call static functions -> <Class_Name>.<Function_Name>();

    obj.name = "Samsung S23"; // Other non-private data members can be edited outside the class.
    // console.log(obj.name); // Output -> Samsung S23

    // obj.display();  // Output -> This refers to: Product { name: 'Samsung S23', price: 100000 } Name: Samsung S23 Price: 100000 Rating: 5
    // Only through display function, the private variable is revealed. The display function can access the private variable as it is inside the class where the private vaiables are accessible.
    
}
{
    // Getters and Setters
    class Product{
        #rating;

        constructor(name, price, rating){
            this.name = name; 
            this.price = price;
            this.#rating = rating;
        }

        getRating_(){
            console.log(this.#rating);
        }
        setRating_(rating){
            if(rating<0) return;
            this.#rating = rating;
        }


        get getRating(){ // JavaScript Setter
            console.log(this.#rating);
        }
        set setRating(rating){ // JavaScript Setter
            if(rating<0) return;
            this.#rating = rating;
        }

    }
    let obj = new Product("iPhone", 100000, 5);

    // obj.getRating_(); // Output -> 5
    obj.setRating_(10);
    // obj.getRating_(); // Output -> 10

    // Gets and Sets value of the rating from JavaScript in-built getter and setter.
    // obj.getRating; // Output -> 10
    obj.setRating = 20;
    // obj.getRating; // Output -> 20




    // Example for getter and setter
    class ComplexNumber{
        #real;
        #imag;
        constructor(real,imag) {
            this.#real = real;
            this.#imag = imag;
        }
        get real(){return this.#real;}
        get imag(){return this.#imag;}
        display() {
            console.log(this.#real+" + i"+this.#imag);
        }
        addComplexNumber(c){
            c1.#real += c.real;
            c1.#imag += c.imag;
        }
    }
    let c1 = new ComplexNumber(2,3);
    // c1.display(); // Output -> 2 + i3
    let c2 = new ComplexNumber(4,5);
    // c2.display(); // Output -> 4 + i5
    c1.addComplexNumber(c2);
    // c1.display(); // Output -> 6 + i8

}
{
    // Prototypes and Inheritence



    // Prototypes

    // Everything in JavaScript is object. If any property or behavior is injected in object using prototype, it will be automatically injected in array, object, string, etc as they have just inherited some properties and behavior from object. And as now we have added a new property or behavior to object, then it will also be available in array, object, string, etc.

    let myHeros = ["Thor", "Spiderman"];
    let dcHeros = ["batman", "flash", "superman"];

    let heropower ={
        thor: "hammers",
        spiderman: "sling",

        getSpidermanPower: function(){
            console.log(`Spidy power is ${this.spiderman}.`);
        }
    }
    // heropower.getSpidermanPower(); // Output -> Spidy power is sling.

    Object.prototype.vaibhav = function(){
        console.log("Vaibhav is all object.");
    }
    // heropower.vaibhav(); // Output -> Vaibhav is all object.
    // Injected a user made function into objects.

    // myHeros.vaibhav(); // Output -> Vaibhav is all object.
    // Since we have injected this function in object and array are made up from objects, therefore we can access the function from the array.


    Array.prototype.vaibhavTwo = function() {
        console.log("Vaibhav in all arrays.");
    }
    // myHeros.vaibhavTwo(); // Output -> Vaibhav in all arrays.
    // heropower.vaibhavTwo(); // Output -> TyperError
    // Since the vaibhavTwo function was injected for array, we get error if try to call the function from object as it is not declared there.


    

    // Inheritance
    let User = {
        name: "Top Name",
        email: "top@gmail.com"
    }
    let Teacher = {
        makeVideos: true
    }
    let TeachingSupport = {
        isAvailable: false
    }
    let TAAssistant = {
        makeAssignment: "Js Assignment",
        fulltime: true,
        __proto__: TeachingSupport // Inheriting TeachingSupport object to TAAssistant object.
    }
    TAAssistant.__proto__ = TeachingSupport; // Same way to do above statement but outside the object.
    // console.log(TAAssistant.isAvailable); // Output -> false
    
    Object.setPrototypeOf(Teacher, User); // Morden and better way to inherite second argument object to first argument object.
    // console.log(Teacher.name); // Output -> Top Name




    // Example for prototype implementation
    String.prototype.realLength = function(){
        return this.trim().length;
    }
    // console.log("Vaibhav        ".realLength()); // Output -> 7
    // console.log("Vaibhav".realLength()); // Output -> 7

}
// Finished Video 20 Mar 2023


// Started Video 27 Mar 2023
{
    // Callbacks

    // The function which is sent to a higher order function as an argument is known as callback.
    function exec(square){
        console.log(`Squared value is ${square}`);
    }
    function squarerAndPasser(number, func){
        func(number*number);
    }
    // squarerAndPasser(10, exec); // Output -> 100

    function callback(){
        console.log("Start");
        setTimeout(()=>{
            console.log("Timer Done");
        }, 3000)
        // for(let i=0; i<10000000000; i++);
        console.log("End");
        // First Start is printed then End is printed then Timer Done is printed because set timeout is a asynchronous piece of code and doesn't block normal function of code. If same is done using for loops, it will pause the execution as its a synchronous code. 
        // setTimeout tells nodejs/runtime to execute a callback once the timer has run out and then nodejs/runtime proceeds to execute the next line of code.
        // Even if the timer is for 0 seconds, if the for loop is being executed then it will not be interrupted and Timer Done will be printed once the for loop execution has finished.

    }
    // callback();
}
{
    // Promises

    function promises() {
        function createPromise() {
            return new Promise(function executor(resolve, reject) {
                // The 2 parameters resolve and reject are callbacks. The function that are passed to them are used to update the promise status. The name can be also for example res and rej. It can be any other name, but then those will do their tasks respectively. Like the first one will update promise to 'fulfilled' and the second will update promise to 'rejected'.
                setTimeout(function() {
                    resolve("Accepted"); // Output -> Then Block, Value: Accepted
                    reject("Declined"); //  Output -> Catch Block, Value: Declined
                    // Only the first resolve or reject is considered as promise is updated from 'pending' to 'fulfilled' or 'rejected' and once updated can not be undone.
                    console.log("3 Sec timer done");
                    // The reason resolve or reject doesn't end the execution of code after it is because a function ends when function has no further line or has reached a return statement. So to make it work like that we must use return resolve("Accepted").
                }, 3000);
                // Value during promise being 'pending' is undefined
            });
        }

        console.log("Start");
        let x = createPromise();
        console.log("Got Promise");

        x.then(function(value) {
            // This block of code gets executed when Promise is moved from 'pending' to 'fulfilled'. This is done using resolve keyword. The value that is passed in resolve can be accepted as a parameter for a callback in the 'then' part.
            console.log("Then Block, Value:", value); // Output -> Then Block, Value: Accepted
        }).catch(function(value) {
            // This block of code gets executed when Promise is moved from 'pending' to 'rejected'. This is done using rejeced keyword. The value that is passed in rejected can be accepted as a parameter for a callback in the 'then' part.
            console.log("Catch Block, Value:", value); // Output -> Catch Block, Value: Declined
        }).finally(function() {
            // Always(Either resolve or rejected has to be called) executed. Like try and catch statements.
            console.log("Finally Block");
        });
        // Key Point: x.then() also returns a Promise therefore we can do x.then().then() i.e. putting a .then() on x.then()

        console.log("End");
    }
    // promises(); 
    /* Output -> 
        Start
        Got Promise
        End
        3 Sec timer done
        Then Block, Value: Accepted
        Finally Block
    */
}
{
    // Async, Await and Fetch

    function async() {
        function consume_normal() {
            return 10;
        }
        async function consume_async() {
            return 10;
        }
        console.log(consume_normal()); // Output -> 10
        console.log(consume_async()); // Output -> Promise {10}
        // This shows that async functions return a Promise with the return value inside it.
    }
    // async();

    function await() {
        function createPromise_accept() {
            return new Promise(function executor(resolve, reject) {
                setTimeout(function() {
                    resolve(5);
                    console.log("5 Sec timer done");
                }, 5000);
            });
        }
        function createPromise_reject() {
            return new Promise(function executor(resolve, reject) {
                setTimeout(function() {
                    reject("Error from rejecting the promise. This message is from inside the reject keyword.");
                    console.log("5 Sec timer done");
                }, 5000);
            });
        }

        async function consume() {
            console.log("Message from inside the function.");
            const response = await createPromise_accept();
            // When an await is hit in the async function then the main execution goes back to where it was called. As soon as the promise is done i.e. updated from 'pending' to 'fulfilled' AND the main execution current task is done THEN it returns to the line where await was called and continues. Inside an async function code is executed line by line.
            const response1 = createPromise_accept();
            // If await is not used in an async function then it works as a normal and doesn't wait for the promise to be 'fulfilled', doesn't stop execution and moves on to the next line, unlike when await is used in an async function.
            console.log("Response is " + response);
            // The value passed in resolve(value) can be recieved from storing the promise to a variable. If the promise is 'pending' at the time of initialization of the variable then it will have the promise object and if it is 'fulfilled' at the time of initialization then it will have the value that was passed from resolve
            console.log("Response1 is " + response1);

            try{
                const promise = await createPromise_reject();
                // If a promise can be rejected then try and catch should be used to handle the rejection.
            } catch(err){
                // The value passed from reject keyword is captured in err as an parameter.
                console.log("Error got from the reject keyword:", err);
            }
        }
        
        console.log("Start");
        consume();
        console.log("End");
    }
    // await();
    /* Output ->
        Start
        Message from inside the function.
        End
        5 Sec timer done
        Response is 5
        Response1 is [object Promise]
        5 Sec timer done
        5 Sec timer done
        Error got from the reject keyword:  Error from rejecting the promise
    */

    async function fetching() {
        fetch("http://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        }).then(function(value) {
            // .json() function returns a promise. Therefore, .then() is used to handle the promise.
            console.log(value);
        });
        
        const response = await fetch("http://type.fit/api/quotes")
        console.log(await response.json()); // .json() function returns a promise.
    }
    // fetching();
}
// Finished Video 27 Mar 2023