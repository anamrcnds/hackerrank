function camelcase(s) {
    if(s.length < 1 || s.length > 100000) return;
    
    let characters = '[A-Z]';
    let words = 1;

    for(let letra of s){
        if(letra.match(characters)){
            words++;
        }
    }

    console.log(words)
}

camelcase('wordondeWordtwoWordthree')
