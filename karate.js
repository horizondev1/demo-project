console.log("good karate");

const person = {
    firstname : "noman",
    lastname : "siddique",
    fullname: function (){
        return this.firstname+ " "+this.lastname;
    }
}

person.fullname();