

function hello(){
    console.log("hellooo in another js");
}
 // using normal http request
let req = new XMLHttpRequest();
req.open("GET","https://www.boredapi.com/api/activity");
req.send();
req.onload = () =>{
 //console.log(req);
 //console.log(JSON.parse(req.response))
}

//fetch

fetch("https://www.boredapi.com/api/activity")
.then(response =>{
   // console.log(response);
    return response.json();
})

//async await 
async function helloapi(){
    let response = await fetch("https://www.boredapi.com/api/activity");
    let data = await response.json();
    return data;
}
helloapi().then(data => console.log(data))

//axios 

axios.get("https://api.ipify.org?format=json").then(response =>{
   console.log(response)  
})