const express=require("express");
const dotenv=require("dotenv");
const {chats} = require("./data/data")
const connectDB=require("./config/db");
const colors=require('colors');
const userRoutes=require('./Routes/userRoutes')
dotenv.config();
connectDB();
const app=express()
app.use(express.json())
const port=process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("Hello world");
}
)
app.get('/api/chat',(req,res)=>{
    res.send(chats);
});
app.get('/api/chat/:id',(req,res)=>{
    const chat=chats.find((c)=>c._id===req.params.id);
    res.send(chat); 
})
app.use('/api/user',userRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`.yellow.bold);
}
)
