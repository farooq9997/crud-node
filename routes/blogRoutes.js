const  router = require("express").Router();
const blogModel=require("../models/blogModel");


router.get("/add",(req,res)=>{
res.render("add");
});
router.post("/add",async(req,res)=>{
    const {name,email,pass}=req.body
    try {
        const User= new blogModel({
            name,email,pass
        });
        
      const saveUser= await User.save();
      //res.send(saveUser)
      console.log("new User"); 
      return res.redirect("/show")
    } catch (error) {
        console.log("Error in Creating New User");
        
    }
});
//////show user 
router.get("/show",async(req,res)=>{
   try {
      const alldata= await blogModel.find({});
      res.render("show",{alldata}) 
   } catch (error) {
       console.log("error to get data");
   }
})
///edit user 
router.get("/edit/:id",async(req,res)=>{
    const id=req.params.id
try {
    const user=await blogModel.findById({_id:id})
    res.render("edit",{user:user})
} catch (error) {
    console.log("error i editing user");
}
})

///update user
router.post("/update/:id",(req,res)=>{
    updatedata={
        name:req.body.name,
        email:req.body.email,
        pass:req.body.pass
    },
    blogModel.findByIdAndUpdate(req.params.id,updatedata,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/show");
        }
    })
});
///////delete user
router.get("/delete/:id",(req,res)=>{

    blogModel.findOneAndDelete(req.params.id,(err)=>{
     if(err){
         res.redirect("/show")
     }else{
         res.redirect("/show")
     }
    })

})
module.exports=router;