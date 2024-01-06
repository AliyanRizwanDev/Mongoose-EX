const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://127.0.0.1:27017/testdb")


// const user = new User({
//     name : "Aliyan",
//     age:26
// })

// user.save().then(()=> console.log("Saved"))


//Better way
async function run(){

    // 1
    // const user = new User({
    //     name : "Aliyan",
    //     age:26
    // })

    // await user.save()
    
    
    // Better Way than above 1
    // const user = await User.create({
    //     name : "Aliyan",
    //     age : 23
    // })
    

    // try and catch to check if the schema matches like instead of number writen string
    try {
        const user = await User.create({
            name : "Aliyan",
            age : 23,
            hobbies : ["Music","Movies"],
            address : {
                street: "1",
                city : "Lahore"
            },
            email:"aliyanrizwandev@gmail.com"
        })
        console.log(user);
    }
    catch(e){
        console.log(e.message)
    }
    

    // user.name = "hammad";
    // await user.save();

    // Advance Schema

    // This is from the user schema so write a message 
    // try {
    //     const user = await User.findOne({name : "Aliyan"})
    //     user.sayHi() // From User.js Advance Schema
    //     console.log(user);
    // }
    // catch(e){
    //     console.log(e.message)
    // }


     // This is also a way to find anme its from the user schema to find name  
    // try {
    //     const user = await User.FindName("Aliyan")
    //     user.sayHi() // From User.js Advance Schema
    //     console.log(user);
    // }
    // catch(e){
    //     console.log(e.message)
    // }


    // Virtual  to display thing  
    // try {
    //     const user = await User.findOne({name : "Aliyan", email: "aliyanrizwandev@gmail.com"})
    //     user.sayHi() // From User.js Advance Schema
    //     console.log(user);
    //     console.log(user.namedEmail);
    // }
    // catch(e){
    //     console.log(e.message)
    // }

}
run()