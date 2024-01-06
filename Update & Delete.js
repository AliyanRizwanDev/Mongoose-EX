// ADD THIS IN SCRIPT FILE JUST TO NOT MIX UP WRITING HERE

const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://127.0.0.1:27017/testdb")

async function run(){


    try {
        // const user = await User.findById("6599c7abe5f085433cc862da")
        // const user = await User.find({name : "Aliyan"})
        const user = await User.findOne({name : "Aliyan"})
        // const user = await User.deleteOne({name : "Aliyan"})
        // many more


        // Better Way (where)
        
        // const user = await User.where("name").equals("Aliyan")
        
        // const user = await User.where("age").gt(12) // gt = greater than
        
        // const user = await User.where("age").lt(12) // gt = Less than
        
        // const user = await User.where("name").equals("Aliyan").limit(2) // Only 2 results 
        
        // const user = await User.where("name").select("age") // Only age will be shown 
       
        // The Below will check all
        // const user = await User.where("age").gt(12).where("name").equals("Aliyan")
       
        // This will save the empty best friend field of the 0 mean first person data with an id
        // user[0].bestfriend = "6599cbf6c9f517d805183b31"
        // await user[0].save()
        

        // This add all the data of the bestfriend in the data insead of just an id so its word like a join
        // const user = await User.where("age").gt(12).where("name").equals("Aliyan").populate("bestfriend")
       
        
        console.log(user);
       
    }
    catch(e){
        console.log(e.message)
    }

}
run()