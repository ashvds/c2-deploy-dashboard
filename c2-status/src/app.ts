import express = require("express");
import aws_s3_srv = require("./services/aws_s3_srv")
import slaves = require ("./utils/slaves")
import types = require ("./utils/types")


// Our Express APP config
const app = express();
app.set("port", 3300);

// API Endpoints
app.get("/", (req, res) => {
    res.send("Hi, would be nice to have docs here...");
});

app.get("/states", (req, res) => {
    let s3ObjectList : Array<string>= new Array() ;
    aws_s3_srv.listOfObjects().then((objectList:Array<string>) =>{
        s3ObjectList = objectList;
        console.log(`log 1 ${s3ObjectList}`);
        let slaveNamesLocations  = slaves.fromKeys (s3ObjectList);
        console.log(`before send ${JSON.stringify(slaveNamesLocations)}`);
        
    })
    .catch((err) => console.log(err))
    .finally(() => {

        console.log('completed');
    });
    aws_s3_srv.s3ReadJSON();
    
});
// app.get("/states", (req, res) => {
//     let s3ObjectList : Array<string>= new Array() ;
//     aws_s3.listObjects().then(() =>{
//         // s3ObjectList = objectList;
//         console.log(`log 1 ${s3ObjectList}`);
//     let slaveNamesLocations : Map<string, string> = slaves.fromKeys (s3ObjectList);
//     console.log(`before send ${slaveNamesLocations}`);
//     res.send(s3ObjectList);
//     })
//     .catch((err) => console.log(err));




// });

// export our app
export default app;