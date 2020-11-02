var inquirer = require("inquirer");
var fs = require('fs');


// array of questions for user here using inquierer
inquirer.prompt([
   {
      type: "input",
      name: "name",
      message: "What is your name?",
   }, 
    {
    type: "input" ,
    name: "role",
    message: "What is your role?",
 },

 {
    type: "input" ,
    name: "email",
    message: "what is your email",
 }
 

]).then(function(data){
    //var filename = data.name.toLowerCase().split(' ').join('');
    fs.writeFile("Readme.Md", JSON.stringify(data, null, '\t'), function(err){
        if (err) {
            return console.log(err);
        }

    console.log("See Generated ReadMe file")
    });

});