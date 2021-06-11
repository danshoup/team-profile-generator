// Modules and dependencies:
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Array to hold team members as they are added:
let fullTeam = [];


// Team cards template, to add cards with new data for the mainHTML
let cardDeck = `<!-- New cards added here-->

`;


// Need questions for inquirer:

//Choices for adding a new team member:
const nextMember = [
  {
    type: "list",
    name: "next",
    message: "Would you like to add another team member? Choose which role to add, or choose 'NONE' to exit:",
    choices: [
      "Engineer",
      "Intern",
      "Manager",
      "NONE...I'm done creating my team, thank you!"
    ]
  }
];

//Questions for Manager:
const managerData = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your team's manager?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your manager's employee ID number?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your manager's email address?"
  },
  {
    type: "input", 
    name: "phone", 
    message: "What is your manager's office phone number? (Use the format: xxx-xxx-xxxx):"
  }
];

//Questions for Engineer:
const engineerData = [
  {
    type: "input",
    name: "name",
    message: "What is this engineer's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is this engineer's employee ID number?"
  },
  {
    type: "input",
    name: "email",
    message: "What is this engineer's email address?"
  },
  {
    type: "input", 
    name: "github", 
    message: "What is this engineer's GitHub username?"
  }
];

//Questions for Intern: 
const internData = [
  {
    type: "input",
    name: "name",
    message: "What is this intern's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is this intern's employee ID number?"
  },
  {
    type: "input",
    name: "email",
    message: "What is this intern's email address?"
  },
  {
    type: "input", 
    name: "school", 
    message: "What is the name of the school this intern joined the team from?"
  }
];



//Now build the functions to make it happen:

// Init function to start with the manager prompts:
function init() {
  getManagerInfo();
};

function addMember() {
  inquirer.prompt(nextMember).then((answers) => {
    if (answers.next === "Engineer") {
      console.log("Engineer")
      getEngineerInfo();
    } else if (answers.next === "Intern") {
      console.log("Intern");
      getInternInfo();
    } else if (answers.next === "Manager") {
      console.log("Manager");
      getManagerInfo();
    } else if (answers.next === "NONE...I'm done creating my team, thank you!") {
      writeHTML();
    };
  });
};

function getManagerInfo() {
  inquirer.prompt(managerData).then((answers) => {
    let newManager = new Manager(answers.name, answers.id, answers.email, answers.phone);
    let managerHTML = `
          <div class="card w-25 bg-light m-3 shadow rounded">
            <div class="card-header text-light">
              <h2 class="name">${newManager.name}</h2>
              <h3 class="title"><i class="fas fa-mug-hot mr-1"></i>${newManager.role}</h3>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush border">
                <li class="list-group-item">ID: ${newManager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${newManager.email}">${newManager.email}</a></li>
                <li class="list-group-item">Office Phone: ${newManager.phone}</li>
              </ul>
            </div>
          </div>            
`;
    fullTeam.push(newManager);
    cardDeck += managerHTML;
    addMember();
  }); 
};

function getEngineerInfo() {
  inquirer.prompt(engineerData).then((answers) => {
    let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    let engineerHTML = `
          <div class="card w-25 bg-light m-3 shadow rounded">
            <div class="card-header text-light">
              <h2 class="name">$${newEngineer.name}</h2>
              <h3 class="title"><i class="fas fa-glasses mr-1"></i>${newEngineer.role}</h3>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush border">
                <li class="list-group-item">ID: ${newEngineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${newEngineer.email}">$${newEngineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${newEngineer.github}">${newEngineer.github}</a></li>
              </ul>
            </div>
          </div>        
`;

    fullTeam.push(newEngineer);
    cardDeck += engineerHTML;
    addMember();
  }); 
};

function getInternInfo() {
  inquirer.prompt(internData).then((answers) => {
    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
    let internHTML = `
          <div class="card w-25 bg-light m-3 shadow rounded">
            <div class="card-header text-light">
              <h2 class="name">${newIntern.name}</h2>
              <h3 class="title"><i class="fas fa-user-graduate mr-1"></i>${newIntern.role}</h3>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush border">
                <li class="list-group-item">ID: ${newIntern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${newIntern.email}">${newIntern.email}</a></li>
                <li class="list-group-item">School: ${newIntern.school}</li>
              </ul>
            </div>
          </div> 
`;

    fullTeam.push(newIntern);
    cardDeck += internHTML;
    addMember();
  }); 
};


// Function to return HTML
function writeHTML() {
  // Template Literal for HTML
  let mainHTML =`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Team Profile</title>
      <!-- Latest compiled and minified CSS & JS -->
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">    
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="./style.css" />

    </head>

    <body>

        <!-- Jumbotron with TEAM header. -->
      <div class="jumbotron jumbotron-fluid" id="jumbo">
          <div class="container">
            <h1 class="display-4 text-center text-light">My Amazing Team</h1>
          </div>
        </div>

      <!-- Card Deck for team members -->
        <div class="container">
          <div class="row">
            <div class="team-cards col-12 d-flex flex-row flex-wrap justify-content-center">
  
            ${cardDeck}

            </div>
          </div>
        </div>

    </body>
  </html>`;

// Write the file to the 'dist' foler in the repository.
  fs.writeFile('./dist/team.html', mainHTML, (err) => 
    err ? console.log(err) : console.log('You have successfully created your Amazing Team "team.html" file!')
    );
};


init();

