const { json } = require('express');
const express = require('express');
const app = express();




app.listen(3000, () => {
    console.log("SERVER IS RUNNING ON PORT 3000");
});

app.get('/',(req,res) =>{
    res.send('Welcome to our server!!');
});

function addition(n1, n2) {
    return n1 + n2;
}
function subtraction(n1, n2) {
    return n1 - n2;
}
function multiplication(n1, n2) {
    return n1 * n2;
}
function division(n1, n2) {
    return n1/n2;
}

function validateInput(n) {

}

app.get('/', (req,res) => {
    try{
        console.log(req.query.n1);
        const n1 = parseFloat(req.query.n1);
        console.log(n1);
    }
    catch (error) {
        console.log( error);
    }
    res.json(users);
});

app.get('/addition', (req,res) => {
    try {
        

        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        console.log(n1,' and ',n2);

        if(isNaN(n1)) {
            res.status(400).send(`ERROR: VALUE OF N1 ${req.query.n1} NOT A NUMBER`);
            throw new Error("WRONG VALUE");
            
        }

        console.log(`VALID NUMBERS :  ${n1} , ${n2}!\n`);

        const result = addition(n1,n2);
        
        res.status(200).send(`ADDITION OF ${n1} AND ${n2} = ${result}`);
    }

    catch(error) {
        res.status(500).send(`SERVER ERROR! Error: ${error}`);
        console.log(`SERVER ERROR! : ${error}`);
    }
});

app.get('/SUBTRACTION', (req,res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        console.log(n1,' AND ',n2);

        if(isNaN(n1)) {
            res.status(400).send(`ERROR: VALUE OF N1 ${req.query.n1} NOT A NUMBER`);
            throw new Error("WRONG VALUE");
        }

        console.log(`VALID NUMBERS : ${n1} AND ${n2}!\n`);

        const result = subtraction(n1,n2);
        res.status(200).send(`SUBTRACTION OF ${n1} and ${n2} = ${result}`);
    }

    catch(error) {
        res.status(500).send(`SERVER ERROR! Error: ${error}`);
        console.log(`SERVER ERROR!: ${error}`);
    }
});

app.get('/MULTIPLICATION', (req,res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        console.log(n1,' & ',n2);

        if(isNaN(n1)) {
            res.status(400).send(`ERROR: VALUE OF N1 ${req.query.n1} NOT A NUMBER`);
            throw new Error("WRONG VALUE!");
        }

        console.log(`VALID NUMBERS : ${n1} and ${n2}!\n`);

        const result = multiplication(n1,n2);
        res.status(200).send(`MULTIPLICATION OF ${n1} AND ${n2} = ${result}`);
    }

    catch(error) {
        res.status(500).send(`SERVER ERROR! Error: ${error}`);
        console.log(`SERVER ERROR!: ${error}`);
    }
});

app.get('/DIVISION', (req,res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        console.log(n1,' & ',n2);

        if(isNaN(n1)) {
            res.status(400).send(`ERROR: VALUE OF N1 ${req.query.n1} NOT A NUMBER`);
            throw new Error("WRONG VALUE!");
        }

        console.log(`VALID NUMBERS : ${n1} and ${n2}!\n`);

        const result = division(n1,n2);
        res.status(200).send(`DIVISION OF  ${n1} AND ${n2} = ${result}`);
    }

    catch(error) {
        res.status(500).send(`SERVER ERROR! Error: ${error}`);
        console.log(`SERVER ERROR! Error: ${error}`);
    }
});