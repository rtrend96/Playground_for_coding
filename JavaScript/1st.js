let p = new Promise((resolve , reject) =>{
 let a= 1+2;
 if(a=2){
     resolve("done")
 }else{
     reject("error")
 }
})

p.then((message) => {
    console.log("this is the then" + message)
}).catch((message) =>{
    console.log("this is in catch"+ message)
})