const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const routes = require('./routes');
// const helpers = require('./utils/');


const hbs = exphbs.create({
  
});

const app = express();

const PORT = process.env.PORT || 3001;

// setup express to use handlebars as our template engine

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sessionConfig = {
  secret: 'Super secret secret', // normally this would be an environment variable
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 10 * 60 * 1000
  },
}

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig)); 
                                 


app.use(routes)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});
