async function request() {
    var todo = await (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();
    var post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    
    var object = {
        todo: todo,
        post: post
    }

    return object;
}
request().then(function (response) {
    console.log(response);
});