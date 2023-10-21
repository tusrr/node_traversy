const fs = require('fs')
const path = require('path')

//create folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if(err) throw err;
//     console.log('folder created...')
// })

//create and write to files
// fs.writeFile(path.join(__dirname,'/test','Hello.txt'),'Hello World !    ',err=>{
//     if(err) throw err;
//     console.log('file written...')

//     fs.appendFile(path.join(__dirname,'/test','Hello.txt'),'I Love Node JS',err=>{
//         if(err) throw err;
//         console.log('file written...')
//     })
     
// })
 

//READ FILES

fs.readFile(path.join(__dirname,'/test','Hello.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})
 
//rename files

fs.rename(path.join(__dirname,'/test','Hello.txt'),path.join(__dirname,'/test','HelloNode.txt'),err=>{
    if(err) throw err;
    console.log('file renamed...')
})
 