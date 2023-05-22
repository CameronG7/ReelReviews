# ReelReviews

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  Link to application: https://sheltered-reef-22263.herokuapp.com/home

  ## Creators
  Cameron Gardner, Liza Smirnov, Edgar Romero and Marcus Jonas

  ## Description
  ReelReviews is a social media platform for keeping track of and sharing reviews on movies you have watched. The platform allows each user to create an account by providing their email, choosing a username, and setting a password. Once logged in, the user can navigate to a dashboard where they can see other people's movie reviews, as well as their profile where it lists their own movie reviews as well as gives the option to write a new review that will be posted to their profile, as well as to the dashboard feed. 
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage Information](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  The application was built through Node.js, and utilizes bcrypt, dotenv, express, express-handlebars, express-session, handlebars, lodash, mysql2 and sequelize dependencies. In addition to these, the program also utilizes the devDependencies eslint, eslint-config-airbnb, eslint-config-airbnb-base, eslint-config-prettier, eslint-plugin-import, eslint-plugin-prettier, nodemon and prettier. All of the aforementioned dependencies need to be downloaded before the program is run. This can easily be done by first initiating the Node.js application by running "npm init -y", followed by running "npm i" in the command line. 

  ## Usage
  The first step is to create the database. Log in to to mysql and run the schema.sql file to create the database. Thereafter, run node seeds/index.js in the command line to seed the database with some information. The server can now be started by running "nodemon server" in the command line. Once the server has started the application can be opened at http://localhost:3001/home. 

  ## License
  This project has a MIT License license. For details about its restrictions and rules, please follow the link below:  
    [MIT License](https://opensource.org/licenses/MIT)  
    

  ## Contributing
  N/A

  ## Tests
  N/A

  ## Questions
  If you have any questions, please find the repository for this application at https://github.com/CameronG7/ReelReviews. 
