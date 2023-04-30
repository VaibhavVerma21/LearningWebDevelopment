function filterbyCategory(products){
    return function (type){
        let result = [];
        for(let i=0; i<products.length; i++){
            if(products[i].category == type){   
                result.push(products[i]);
            }
        }
        return result;
    }
}


let products = [
    { name: "Shirt", category: "Clothing"},
    { name: "Pants", category: "Clothing"},
    { name: "Hat", category: "Accessories"},
    { name: "Sunglasses", category: "Accessories"}
];
let clothingProducts = filterbyCategory(products)("Clothing");
console.log(clothingProducts);