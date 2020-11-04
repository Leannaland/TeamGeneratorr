const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "Myteam.html");

const render = require("./lib/htmlRenderer");


const myteam = []
const arrayid = []



//array of questions for user here using inquirer
inquirer.prompt([
   {
      type: "input",
      name: "name",
      message: "What is the name?",
   }, 
    {
    type: "input" ,
    name: "role",
    message: "What is the role?",
 },

 {
    type: "input" ,
    name: "email",
    message: "what is the email",
 },
 {
    type: "input" ,
    name: "id",
    message: "What is the employee id",
 },
 
])
