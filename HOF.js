let a;
function greet(){
    console.log("hello");
}function add(a,callback){
    console.log(a);
    callback();
}
add(5,greet);