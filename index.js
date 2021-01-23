//required files 
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const inquirer = require('inquirer');

fs = require('fs');

const promptUser = () =>{
return inquirer.prompt([

    
    {
        type: 'input',
        name: "name",
        message: "Please enter Team Manager name",
        validate: managerName =>
        {
            if(managerName){
                return true;
            }else{
                console.log("To begin, Please enter a valid Team Manager name");
                return false;
            }

        }

    },
    {
        type: 'input',
        name: "id",
        message: "Please enter Team Manager Employee ID",
        validate: managerid =>
        {
            if(managerid){
                return true;
            }else{
                console.log("To begin, Please enter a valid Employee ID");
                return false;
            }

        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter Team Manager Email.',
        validate: managerEmail =>
        {
            if(managerEmail){
                return true;
            }else{
                console.log("To begin, Please enter a valid Email Address");
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your Office Number.',
        validate: managerEmail =>
        {
            if(managerEmail || !NaN){
                return true;
            }else{
                console.log("To begin, Please enter a Office Number.");
                return false;
            }

        }

    }

])

    
            
}

const mainMenu = employeeData => {
    console.log(`
=========
Main Menu
=========`);

if (!employeeData.projects) {
    employeeData.projects = [];
  }
     
  
return inquirer.prompt([

{
   type: 'confirm',
   name: 'menuChoice',
   message: "Welcome to the Main Menu. Would you like to add another Team Member?",
   default: false  
},

{
    type: 'checkbox',
    name: 'addTeammember',
    message: 'Would you like to add a Intern, or an Engineer to your team?',
    choices: ["Intern", "Engineer"],
    when: ({menuChoice}) => menuChoice,
    

    
},
{
    type: 'input',
    name: 'Internname',
    message: "Please enter Intern's name.",
    when: (answers) => answers.addTeammember == 'Intern'

},
{
    type: 'input',
    name: 'Internid',
    message: "Please enter Intern's Employee Id",
    when: (answers) => answers.Internname

},
{
    type: 'input',
    name: "internEmail",
    message: "Please enter Intern's Email",
    when: (answers) => answers.InternEmail
},
{
    type: 'input',
    name: 'internSchool',
    message: "Please enter Intern's School.",
    when: (answers) => answers.InternEmail
},
{
    type: 'input',
    name: 'engineerName',
    message: "Please enter Engineer's name.",
    when: (answers) => answers.addTeammember == "Engineer"
},
{
    type: 'input',
    name: 'engineerId',
    message: "Please enter Engineer's Employee Id",
    when: (answers) => answers.engineerName
},
{
    type: 'input',
    name: "engineerEmail",
    message: "Please enter Engineer's Email",
    when: (answers) => answers.engineerId
},
{
    type: 'input',
    name: 'engineerGithub',
    message: "Please enter Engineer's Github profile",
    when: (answers) => answers.engineerEmail
},   
{
    type: 'confirm',
    name: 'finalize',
    message: "Would you like to enter another employee?",
    default: true
    
}
    ]).then(projectData => {
        employeeData.projects.push(projectData);
        if(projectData.finalize){
            return mainMenu(employeeData);
        
        }else{
            return employeeData;
        }

    })

}



promptUser()
.then (mainMenu)



// .then
// (answers => {

     

//     var managerName = answers.name;
//     var managerId =answers.id;
//     var managerEmail = answers.email;
//     var managerofficeNumber = answers.officeNumber;

    

//     const userManager = new Manager(managerName, managerId, managerEmail, managerofficeNumber);
   
// }).then(mainMenu()).then(answers => {
// })



    







