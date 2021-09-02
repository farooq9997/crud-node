const express= require("express");
const app = express();
const port = 3000;
const blogRoutes=require("./routes/blogRoutes")
const path=require("path");




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(blogRoutes);

app.listen(port,(req,res)=>{
    console.log(`server is running on port :${port}`);
});
