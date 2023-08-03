const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose')
const app = express();

mongoose.connect("mongodb+srv://ice-009:Armaan%4006@cluster0.ynzphiq.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology:true

})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
  res.send('fuckworld')
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

app.use(async(req,res,next)=>{
  const error = new Error('Not found')
  error.status=404
  next(error)
  console.log(error)
})

app.use((err,req,res,next)=>{
  res.status(err.status || 500)
  res.send({
    error:{
      message : err.message,
      status: err.status||500
    }
  })
})