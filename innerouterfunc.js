function outer(){
    let name="tamil";
    function inner(){
        console.log("hello"+name);
    }   return inner;
}let abc=outer();
abc();