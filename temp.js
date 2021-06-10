            <!-- Manager card -->
            <div class="card w-25 bg-light m-3 shadow rounded">
              <div class="card-header text-light">
                <h2 class="name">${manager.name}</h2>
                <h3 class="title"><i class="fas fa-mug-hot mr-1"></i>${manager.role}</h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush border">
                  <li class="list-group-item">ID: ${manager.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                  <li class="list-group-item">Office Phone: ${manager.phone}</li>
                </ul>
              </div>
            </div>    
            
        
            <!-- Engineer Card -->
            <div class="card w-25 bg-light m-3 shadow rounded">
              <div class="card-header text-light">
                <h2 class="name">${engineer.name}</h2>
                <h3 class="title"><i class="fas fa-glasses mr-1"></i>${engineer.role}</h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush border">
                  <li class="list-group-item">ID: ${engineer.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
              </div>
            </div>        

            <!-- Intern Card -->
            <div class="card w-25 bg-light m-3 shadow rounded">
              <div class="card-header text-light">
                <h2 class="name">${intern.name}</h2>
                <h3 class="title"><i class="fas fa-user-graduate mr-1"></i>${intern.role}</h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush border">
                  <li class="list-group-item">ID: ${intern.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                  <li class="list-group-item">School: ${intern.school}</li>
                </ul>
              </div>
            </div> 

