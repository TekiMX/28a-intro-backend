const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', (req, res) =>{
    console.log('you execute a GET to /');
    res.status(200).send('Hi thereeee');
});

app.get('/empleados', (req , res) =>{
    console.log('ruta de empleados');
    res.status(201).json({message:'This is employees path in json' ,
otraSarasa:'este seria el segundo item'});
});

app.listen(3000, () =>{
    console.log('server running')
});