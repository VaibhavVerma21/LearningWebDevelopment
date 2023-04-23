function count(string){
    let blacklist = [',', '.'];
    blacklist.map(blackListedItem => string = string.replaceAll(blackListedItem, ''))

    let map = new Map();
    string.split(' ').map(element => {
        if(map.has(element)){
            map.set(element, map.get(element)+1);
        }
        else{
            map.set(element, 1)
        }
    })
    return map;
}

let string = "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG. THE QUICK BROWN FOX WAS VERY FAST, BUT THE LAZY DOG DIDN'T CARE. THE QUICK BROWN FOX AND THE LAZY DOG LIVED HAPPILY EVER AFTER."
console.log(count(string));