// (funtion(exports,require,module,__dirname,__filename){  Node internally pass these parameters at run time
// })();

console.log("Lets Learn Node.js");

// IIFE : immediately invoked function expression
(function(name){
    console.log(name);
})('Riya');

// NPM Modules
const color = require('cli-colors');
console.log(color.bgGreen('Hello from nodejs'));
console.log(color.green('Hello from nodejs'));

// Local Modules
const auth = require('./auth');
auth.register('Steve');
auth.login('Steve','secret');

// Core Modules - inbuilt module
const path = require('path');

    console.log(__dirname); // absolute path of directory
    console.log(__filename); // absolute path of file

    //dirname
    console.log("Folder name : ", path.dirname(__filename));

    //filename
    console.log("File name : ", path.basename(__filename));

    //extention
    console.log("Ext name : " , path.extname(__filename));

    //parse - resolve (a sentence) into its component parts and describe their syntactic roles.
    console.log("Parse : " , path.parse(__filename));

    // join - concatenats the arguments
    console.log("Join : ",path.join(__dirname,'orders','app.js'));   


//File System
const fs = require('fs');

    //Make a directory
    fs.mkdir(path.join(__dirname,'test'), (err)=>{
        if(err){
            console.log(err);
            console.log('Something went wrong..');
            return
        }
        console.log('Folder Created');
    })

    // Create a file
    fs.writeFile(path.join(__dirname, 'test', 'test.txt') , 'Hello Node\n' , (err)=>{
        if(err) throw err;

        fs.appendFile(path.join(__dirname,'test','test.txt'), 'More Data\n', (err)=>{
            if(err) throw err;
            console.log("Data added...");
        })
        console.log('File created...');
    })

    // Read a file
    fs.readFile(path.join(__dirname,'test','test.txt'), 'utf-8',(err,data)=>{
        if(err) throw err;
        console.log(data);
        // console.log(data.toString()); //if we don't use utf-8 as second argument
    })
   


// Operating System module
const os = require('os');

    console.log("OS type : ", os.type());
    console.log("OS Platform : ", os.platform());
    console.log("CPU architecture : ", os.arch());
    console.log("CPU details : ", os.cpus());
    console.log("Free memory : ", os.freemem());
    console.log("Total memory : ", os.totalmem());
    console.log("Uptime : ", os.uptime()); //last restart


// Events Module
const Emitter = require('events'); //Emitter is a class
const myEmitter = new Emitter();   //Creation Object in JavaScript

    myEmitter.on('event_name',(data)=>{  //Event Listener 
        console.log(data);
    })

    myEmitter.emit('event_name',{  //Emit event
        name : 'Stark'
    })


    class Auth extends Emitter{
        register(username){
            console.log(`${username} Registered Successfully...`); 
            this.emit('registered', username);      
        }
    }

    const auth2 = new Auth();

    //Listen - we can add multiple listeners on single event

    // Verify email
    auth2.on('registered', (data) => {
        console.log(`Sending Mail to ${data}`)
    })
    // Welcome email
    auth2.on('registered', (data) => {
        console.log(`Welcome Mail send to ${data}`)
    })

    auth2.register('Xeption');
    
// HTTP Modules - For creating server in Nodejs
    const http = require('http');
    const PORT = process.env.PORT || 3000;
    const app = http.createServer((req,res)=>{
        res.end('<h1>Hello NODE</h1>');
    })
    app.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}`)
    });

