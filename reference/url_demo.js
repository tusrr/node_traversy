const url = require('url')

const myUrl = new URL('https://www.codingninjas.com/studio/problems/sum-of-all-divisors_8360720?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf')

//serialized url
console.log(myUrl.href)
console.log(myUrl.toString())
//host (root domain)
console.log(myUrl.host)
//host name (doesn't get port)
console.log(myUrl.hostname)
//path name
console.log(myUrl.pathname)
//serialized query
console.log(myUrl.search)
//params object
console.log(myUrl.searchParams)
//add params
myUrl.searchParams.append('abc',"123")
console.log(myUrl.searchParams)
//loop thru params
myUrl.searchParams.forEach((value,name)=>{
    console.log(`${name}:${value}`)
})