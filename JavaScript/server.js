// Started Video 13 Feb 2023
{
    // This is a comment

    // Normal Print Statment
    console.log("Vaibhav Verma"); 
    console.log(this)

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
    console.log(cost);
    cost = 2000;
    console.log(cost);

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
        console.log("Red => Stop");
    else if(signal=="yellow")
        console.log("Yellow => Go Slow");
    else if(signal=="green")
        console.log("Green => Go Fast");
    else
        console.log("Invalid signal");

    // Ternary Operator
    console.log(false?true:false);

    // Switch Case
    let user = "admin";
    switch(user){
        case "admin":
            console.log("Admin");
            break;
        case "vaibhav":
            console.log("Vaibhav Verma");
            break;
        case "user":
            console.log("User");
            break;
        default:
            console.log("Guest");
    }
    
    // For Loop
    for(let i=0; i<5;i++){
        console.log(i);
    }

    // While Loop
    let while_ = 0;
    while(while_ < 5){
        console.log(while_);
        while_++;
    }

    // Do While Loop
    let do_ = 0;
    do{ // Execute Loop atleast once
        console.log(do_);
        do_++;
    } while(do_ == 0)
}
// Finished Video 14 Feb 2023