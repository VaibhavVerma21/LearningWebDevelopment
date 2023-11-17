fetch("https://jsonplaceholder.typicode.com/posts/123456789").then((response) => {
    if(!response.ok){
        throw new Error("Error fetching")
    }
    return response.json();
}).then((data) => console.log(data))
.catch((err) => console.log(err));