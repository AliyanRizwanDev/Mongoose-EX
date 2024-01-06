const mongoose = require("mongoose")

// const addresSchema = new mongoose.Schema({
//     street: String,
//     city : String
// })

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// })

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    // For setting min and max
    // age: {
    //     type : Number,
    //     min : 1,
    //     max : 25
    // },

    // For giving custom function in this case check even
    // age: {
    //     type : Number,
    //     validate : {
    //           validator : v => v % 2 === 0,
    //           message: props => `${props.value} is not an even`
    //      }
    // },
   
    email: String,
    // For to must fill the email or lowercase or both
    // email: {
    //     type : String,
    //     required : true,
    //     lowercase : true
    //      minLength: 10, (Minimum Length of email)
    //      maxLength: 20 (Maximum Length of email)

    // },
    createdAt: Date,
    //    This will save the newest date every time run
    // createdAt: {
    //     type: Date,
    //     default:() => Date.now()
    // },
    updatedAt: Date,
    //    This will save the newest date every time run
    // updatedAt: {
    //     type: Date,
    //     default:() => Date.now()
    //     immutable: true (This will never let you change it)
    // },
    bestfriend: mongoose.Schema.Types.ObjectId,
    // To Populate in Update section we use ref
    // bestfriend: {
        
    //     type : mongoose.Schema.Types.ObjectId
    //     ref:"User"
    // },
    hobbies:[String],
    address:{
        street:String,
        city:String
    }
    // address: addresSchema (this is also a way)


});



// Advance Schema Methods Result in Script file

// Any Name can be there instead of sayHi like sayNo etc
userSchema.methods.sayHi = function() {
    console.log(`Hi my name is ${this.name}`)
};

userSchema.static.FindName = function(name) {
    return this.find({ name: new RegExp(name,"i")})
};

userSchema.virtual("namedEmail").get(function(name) {return `${this.name} <${this.email}>`});



// Middleware pre,post,save check it out





module.exports =  mongoose.model("User", userSchema)