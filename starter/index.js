
// const inquirer = import('inquirer');
const inquirer=require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const jest=require("jest");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { ADDRGETNETWORKPARAMS } = require("dns");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const render=require("./lib/htmlRenderer");

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



function start()
{
    inquirer.prompt(addNew).then((answer) => {
        if(answer.addMember == "yes"){
            addRole();
        }
        else{
            fs.writeFileSync(outputPath,render(Team),"utf-8");
            process.exit(0);
        }
    })
}



const addNew={
    type:"List",
    message:"Do you want to add Another Employee?",
    name:"addMember",
    choices:["yes","no"]
}

function addRole()
{
    inquirer.prompt([{
            type:"list",
            message:"Enter the employee's Role :",
            name:"employeeChoice",
            choices:["Manager", "Engineer", "Intern"]

          }]).then((answer)=> {
            if(answer.employeeChoice === "Manager" && managerCounter<1){
                managerCounter++
                inquirer.prompt(teamMembers.Manager).then((results) =>{
                    const manager=new Manager(results.managerName,results.managerId,results.managerEmail,results.officeNumber)
                    Team.push(manager);
                    start();
                })
            }
            else if(answer.employeeChoice==="Engineer") {
                inquirer.prompt(teamMembers.Engineer).then((results)=>{
                    const engineer=new Engineer(results.engineerName,results.engineerId,results.engineerEmail,results.Github)
                    Team.push(engineer);
                    start();
                })
            }
            else if(answer.employeeChoice==="Intern") {
                inquirer.prompt(teamMembers.Intern).then((results)=>{
                    const intern=new Intern(results.internName,results.internId,results.internEmail,results.school)
                    Team.push(intern);
                    start();
                })
            }
            else{
                start();
            }

          }
          )
}