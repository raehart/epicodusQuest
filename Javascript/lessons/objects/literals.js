// Example code used var bc what is in lesson
var dog = {};
dog.name = "Bark Twain";
dog.age = 5;
dog.colors = ["brown", "black", 'white'];

dog.colors.push("gray");
dog.age + 10;
dog.name = "Rex";


dog.howl = function() {
    console.log("Aaaaaaaaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrrrrrrrrrrroooooooooooooooooooooooooooo!");
};

dog.humanYears = function() {
    console.log(this.age * 7);
    return this.age * 7
};


dog.howl();
dog.humanYears();


console.log(dog);


//Additional pratice- used let bc of modern js
let flower  = {
    name: 'Jasmine',
    color: 'White',
    height: 8
};


flower.color = 'pink';
flower['height'] = 3;
flower.pollinators = ["bees", "butterflies"];
flower.pollinators.push("humans");

flower.grow = function () {
    let newHeight = this.height + 3;
    console.log(newHeight);
    return newHeight;
};

flower.grow();
console.log(flower);



