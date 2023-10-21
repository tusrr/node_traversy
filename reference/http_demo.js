const http= require('http')

//create server object
http.createServer((req,res)=>{
    //write response
    res.write('Hello World');
    res.end();

})
.listen(9000,()=>console.log('Server Running...'))

//to stop server from running, do ctrl+c in terminal