//Module wrapper function

// (function (exports,require,module,__filename,__dirname){

// })

// console.log(__dirname)
// console.log(__filename)


// ---------------------------------------
//console.log('Hello from Node JS...')

// const person = require('./person')
// console.log(person)

// import Person from './person' (react not in js yet)
// const Person = require('./person')

// const person1 = new Person('Sumit',25)
// person1.greeting()


// (displaced to logger.js)

// const Logger = require('./logger')
// const logger = new Logger();
// logger.on('message', data =>
//     console.log('called listener :', data))


//     logger.log('Hello world')
//     logger.log('Hello')
//     logger.log('Hi')


const http = require('http')
const path = require('path')
const fs = require('fs');


const server = http.createServer((req,res)=>{
    // console.log(req.url)

            if(req.url === '/api/users'){
               const users = 
              [ { name: 'Bobby', age:22},
               {name: 'sekya', age:27}
    
            ]
                res.writeHead(200,{'Content-Type':'application/json'}) //status code is 200 -- everything is okay
                res.end(JSON.stringify(users))
   
        }

        // if(req.url === '/'){
        //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
        //         if(err) throw err;
        
        //         res.writeHead(200,{'Content-Type':'text/html'})
        //         res.end(content) 
        //     })
        // }

            //Build file path dynamic

    let filePath = path.join(__dirname,'public',req.url ==='/' ?'index.html': req.url)

    // console.log(filePath);
    // res.end();

    //extension of the file
    let extname = path.extname(filePath);

    //initial content type

    let contentType = 'text/html'

    //check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;

    }

    //Read File

    fs.readFile(filePath,(err,content)=>{
        if(err){
                 if(err.code=='ENOENT'){
                //PAGE NOT FOUND
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.end(content,'utf8')
                })
                 }else{
                    //some server error
                    res.writeHead(500);
                    res.end(`server error : ${err.code}`)

                }
        }else{
                //success
                res.writeHead(200,{'Content-Type':contentType})
                res.end(content,'utf8')
            }
            
        }
    )



})


 

const PORT =process.env.PORT|| 5000;

server.listen(PORT,()=>console.log(`Server running on port : ${PORT}`))
