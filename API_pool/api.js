

function hello(){
    console.log("hellooo in another js");
}

let req = new XMLHttpRequest();
req.open("GET","https://catfact.ninja/fact");
req.send();
req.onload = () =>{
 console.log(req);
}
