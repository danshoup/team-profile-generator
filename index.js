// Modules and dependencies:
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Template Literal for HTML
const html =`<!DOCTYPE html>
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

            <!-- Manager card -->
            <div class="card w-25 bg-light m-3 shadow rounded">
              <div class="card-header text-light">
                <h2 class="name">Sonya</h2>
                <h3 class="title"><i class="fas fa-mug-hot mr-1"></i>Manager</h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush border">
                  <li class="list-group-item">ID: 42</li>
                  <li class="list-group-item">Email: <a href="mailto:person@someplace.com">person@sompeplace.com</a></li>
                  <li class="list-group-item">Office Phone: 231-867-5309</li>
                </ul>
              </div>
            </div>    
            
        
            <!-- Engineer Card -->
            <div class="card w-25 bg-light m-3 shadow rounded">
              <div class="card-header text-light">
                <h2 class="name">Digger</h2>
                <h3 class="title"><i class="fas fa-glasses mr-1"></i> Engineer</h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush border">
                  <li class="list-group-item">ID: 37</li>
                  <li class="list-group-item">Email: <a href="mailto:person@someplace.com">person@sompeplace.com</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/username">gitUserName</a></li>
                </ul>
              </div>
            </div>        

            <!-- Engineer Card -->
            <div class="card w-25 bg-light m-3 shadow rounded">
              <div class="card-header text-light">
                <h2 class="name">Maren</h2>
                <h3 class="title"><i class="fas fa-glasses mr-1"></i> Engineer</h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush border">
                  <li class="list-group-item">ID: 53</li>
                  <li class="list-group-item">Email: <a href="mailto:person@someplace.com">person@sompeplace.com</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/username">gitUserName</a></li>
                </ul>
              </div>
            </div>        

            <!-- Engineer Card -->
            <div class="card w-25 bg-light m-3 shadow rounded">
              <div class="card-header text-light">
                <h2 class="name">Talia</h2>
                <h3 class="title"><i class="fas fa-glasses mr-1"></i> Engineer</h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush border">
                  <li class="list-group-item">ID: 82</li>
                  <li class="list-group-item">Email: <a href="mailto:person@someplace.com">person@sompeplace.com</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/username">gitUserName</a></li>
                </ul>
              </div>
            </div>        


            <!-- Intern Card -->
            <div class="card w-25 bg-light m-3 shadow rounded">
              <div class="card-header text-light">
                <h2 class="name">Joshua</h2>
                <h3 class="title"><i class="fas fa-user-graduate mr-1"></i> Intern</h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush border">
                  <li class="list-group-item">ID: 1</li>
                  <li class="list-group-item">Email: <a href="mailto:person@someplace.com">person@sompeplace.com</a></li>
                  <li class="list-group-item">School: Some University</li>
                </ul>
              </div>
            </div>  

          </div>
        </div>
      </div>

  </body>
</html>`;

// Function to return HTML

function generateHTML() {
    return html;
};

// Need questions for inquirer:

//Questions for Manager:
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of your team's manager?"
    },
    {
        type: "input"
    }
]

