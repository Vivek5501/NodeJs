const express =require('express');
const app=express();
const path=require('path');

const publicPath=   path.join(__dirname,'public');

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});
app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`);
});
app.listen(4000);