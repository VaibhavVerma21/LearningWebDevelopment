fetch("https://jsonplaceholder.typicode.com/todos/1").then(async function(value) {
    console.log(await value.json());
}).catch(function(err) {
    console.log(err);
});


(async function () {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log(await response.json());
    } catch (err) {
        console.log(err);
    }
})();