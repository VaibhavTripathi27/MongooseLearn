//jshint eversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, No name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    rating: 10,
    review: "Peaches are so tasty!"
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit ({
    name: "Mango",
    rating: 10,
    review: "Greatest of all time"
});

mango.save();

// const person = new Person ({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// });

Person.updateOne({name: "John"}, {favouriteFruit: mango}).then((res)=>{
        console.log("Successfull updated the document");
    }).catch((err)=>{console.log(err)});

// person.save();

const kiwi = new Fruit ({
    name: "Kiwi",
    rating: 10,
    review: "Best fruit till now"
});
const orange = new Fruit ({
    name: "Orange",
    rating: 4.5,
    review: "Okayish fruit till now"
});
const banana = new Fruit ({
    name: "Banana",
    rating: 8,
    review: "Great fruit compared to others"
});

// Fruit.insertMany([kiwi, orange, banana]);

// console.log(Fruit.find({name: "Banana"}));

// Fruit.forEach(element => {
//     console.log(element.name);
// });

// Fruit.updateOne({_id: "64e77a3d1ffeea34968217d2"}, {name: "Peach"}).then((res)=>{
//     console.log("Successfull");
// }).catch((err)=>{console.log(err)});
// Fruit.deleteMany({rating: 10}).then((res)=>{
//     console.log("Successfull deleted the fruit");
// }).catch((err)=>{console.log(err)});

// Person.deleteMany({name: "John"}).then((res)=>{
//     console.log("Successfull deleted all the document");
// }).catch((err)=>{console.log(err)});



// mongoose.connection.close();