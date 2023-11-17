function greeting(name) {
    return new Promise(function(resolve, reject) {
        resolve(`Hello ${name}`);
    });
}

greeting('Vaibhav').then(function(value) {
    console.log(value);
});
