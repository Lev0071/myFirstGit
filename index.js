const express = require("express");
const app = express();

const port = 3000;

function myFunction(p1, p2) {
  return p1 + p2;   // The function returns the product of p1 and p2
}

app.get("/",(req,res)=>{
  res.write("Hello World, Workshop 2 - 3813ICT Software Frameworks");
  res.write();
  res.write("The sum is %s",myFunction(5,10));
  res.send();
});

app.listen(port,function(){
  console.log("Hello World, Workshop 2 - 3813ICT Software Frameworks");
  console.log("The sum is %s",myFunction(5,10));
});
