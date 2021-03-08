// const express=require('express');
//writting in es6
import express from 'express' 
const app=express();

const PORT=3000;

app.get('/',(req,res)=>{
    res.json({
        msg:'Welcome to Invoice builder backend'
    })
})

app.listen(PORT,()=>{
  console.log(`server listening on port,${PORT}`);
})