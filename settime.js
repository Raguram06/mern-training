console.log("first");
setTimeout(()=>{
    console.log("second,settime");
},5000);
console.log("end");
console.log("first");
setInterval(()=>{
    console.log("setinterval");
},2000);
console.log("end");


