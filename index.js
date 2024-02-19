require('dotenv').config();
const express=require("express") ;
const app=express();
//process.env.PORT not working
const port=process.env.PORT||3000;

const template='<div style="color:blue; display: flex; justify-content: center;"><img src="https://media.istockphoto.com/id/1455658894/photo/system-hacked-warning-alert-on-notebook-cyber-attack-on-computer-network-virus-spyware.jpg?s=2048x2048&w=is&k=20&c=Np9GhBSzgUM1d3NFxOLY1E94-XkeitDFk3LCOKpg90g=" width="600" height="400"></div>';

app.get("/",(req,res)=>{
    res.send("Great learning");
    console.log("Hi I am good.");
})
app.get('/login',(req,res)=>{
    res.send(template);
})  

app.listen(port,()=>{
    console.log(`The server is running on port ${port}.`);
})