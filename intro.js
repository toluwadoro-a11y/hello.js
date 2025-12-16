const express=require("express");
const app=express();

app.use(express.json());

app.use((req, res, next)=>{ 
    // Logs every request
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();//Pass to nreqext handler (required!)
});

app.get("/",(req,res)=>{
    res.send("My Week 2 API!");
});

app.post('/user',(req,res)=>{
    const{name,email}=req.body
    console.log({name, email})
    res.json({echoed: `Hello,${name}!`}); // req.body now available!
});

app.get("/user/:id",(req,res)=>{
    const id=req.params.id
    console.log(id);
    res.send(`User ${id} profile`);
});

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});