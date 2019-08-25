function hotPotato(nameList, num) {
    
    let eliminated = '';
    while (nameList.length > 1) {

        for (let i = 0; i < num; i++) {
            enqueue = nameList.push(nameList.shift());
        }
        eliminated = nameList.shift();
        console.log(eliminated);
        console.log(`${eliminated} + was eliminated from the hot potato game.`);
    }
    return nameList.shift();
    
}

let nameList = ['q', 'w', 'e', 'f', 'j', 'k']
hotPotato(nameList, 7)