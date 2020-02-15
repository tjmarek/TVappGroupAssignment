// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var TV = require("./tv");

// Create a new TV object
var tv = new TV();

let select;
let name;
if (process.argv.length<4){
    console.log("invalid number of parameters")
}
else if(process.argv[2] === "show" || process.argv[2] === "actor"){
    console.log("")
    name = process.argv.slice(3).join(" ");
    select = process.argv[2];
         if(select === "show"){
             console.log("Searching for TV Show");
             tv.findShow(name);

         }
         else{
             console.log("Searching for TV Actor");
             tv.findActor(name);
         }
}
else{
    console.log("invalid parameters")
}



