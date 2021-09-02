const mongoose =require("mongoose");
//db connection
mongoose.connect("mongodb://localhost:27017/blog",{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,
useFindAndModify:false
}).then(()=>{
  console.log("db is connected");
}).catch(()=>{
  console.log("db is not connected");
});
 
///////////////schema
const blogSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }

});

const blogModel= new mongoose.model("blogcollection",blogSchema);
module.exports = blogModel;
