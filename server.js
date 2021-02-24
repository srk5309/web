import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';//this add the header to every request
//that are useful for security purpose , specially when deployed online

//App Config
const app = express();//that creates our instance
const port =  process.env.PORT || 8001 //APP listens on this port
const connection_url = 'mongodb+srv://admin:r5NtqPLaBIiCPv6n@cluster0.etvfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//Middlewares

app.use(express.json());
app.use(Cors());
//DB congig
mongoose.connect(connection_url,{
    //below are 3 parameters responsible to make connction smooth
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
});

//API Endpoints

app.get('/',(req,res)=> res.status(200).send('Hello world'));

app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)//500 - internal server error
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards',(req,res)=>{
    const dbCard = req.body;

    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)//500 - internal server error
        }else{
            res.status(200).send(data)
        }
    })
})


//Listeners

app.listen(port,()=>console.log(`listining on localhost: ${port}`));





















