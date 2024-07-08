const express=require('express');
const dbConnect=require('./dbConnect');
const app=express();

app.use(express.json())

app.get('/', async (req,res)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    res.send(data);
    console.log(data);
}).listen(5000);

app.post('/',async (req,res)=>{
    let data=await dbConnect();
    let resp=await data.insertOne(req.body);
    console.log(req.body);

})