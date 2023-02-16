const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


const teamMembers={
    Manager:[
        {
            type:"input",
            message:"Enter the Name of the Manager : ",
            name:"managerName"
        },
        {
            type:"input",
            message:"Enter the ID of the Manager : ",
            name:"managerId"
        },
        {
            type:"input",
            message:"Enter the email of the Manager : ",
            name:"managerEmail"
        },
        {
            type:"input",
            message:"Enter the Office Number of the Manager : ",
            name:"officeNumber"
        }

    ],

    Engineer:[
        {
            type:"input",
            message:"Enter the Name of the Engineer : ",
            name:"engineerName"
        },
        {
            type:"input",
            message:"Enter the ID of the Engineer : ",
            name:"engineerId"
        },
        {
            type:"input",
            message:"Enter the email of the Engineer : ",
            name:"engineerEmail"
        },
        {
            type:"input",
            message:"Enter Github username of the Engineer : ",
            name:"Github"
        },
    ],

    Intern:[
        {
            type:"input",
            message:"Enter the Name of the Intern : ",
            name:"internName"
        },
        {
            type:"input",
            message:"Enter the ID of the Intern : ",
            name:"internId"
        },
        {
            type:"input",
            message:"Enter the email of the Intern : ",
            name:"internEmail"
        },
        {
            type:"input",
            message:"Enter the School Name of the Intern : ",
            name:"school"
        }
    ]
}



