//>>>>>>> main
let sports = ["arg","bra","fra","ita","zer","por","cro","moro","aus","arg","arg"];
let i = 0;
for(; i<sports.length;i++){
    if (sports[i]== "arg"){
       console.log(sports[i]);
    }
}

// >>>>>>> mabrur
let s = ["apple","orange","lichi"];
console.log(s);

let animals = ["dog", "cow", "horse", "monkey"];
animals.forEach(animal =>{
    //console.log(animal);
    let persons = ["akib", "nakib", "sakib", "rakibh"]
    persons.forEach(heGets =>{
        console.log(heGets + ' gets ' + animal + '\n');
    })
});