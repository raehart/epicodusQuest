var testGreeting = new String("Hello");
var newGreeting = "Hola";

function Dog(name, colors, age) {
    this.name = name;
    this.colors = colors;
    this.age = age;
}

var myPuppy = new Dog("Ernie", ["brown", "black"], 3);
var falcor = new Dog("Falcor", ["black"], 4);
var nola = new Dog("Nola", ["white", "black"], 6);
var patsy = new Dog("Patsy", ["brown"], 7);


console.log(myPuppy.name);
console.log(myPuppy.colors);
console.log(myPuppy.age);

console.log(falcor);
console.log(nola);
console.log(patsy);

Dog.prototype.speak = function() {
    console.log("Woof!");
};

Dog.prototype.humanYears = function() {
    console.log(this.age * 7);
    return this.age * 7;
};

//New prototype on strings- demostrating below that all strings have access to new method.
String.prototype.addExcitement = function() {
    return this + "!!!!!!!!!!!!!!!!!!!"
};

testGreeting.addExcitement();

console.log(testGreeting);
console.log(testGreeting.toUpperCase());
console.log(testGreeting.addExcitement());
console.log(newGreeting.addExcitement());


//Not grouped with other vars to demonstrate the new instances of obj still have access to pre-defined prototypes
var newPuppy = new Dog("Goliath", ["gray"], 2);

myPuppy.speak();
myPuppy.humanYears();

newPuppy.speak();
newPuppy.humanYears();

