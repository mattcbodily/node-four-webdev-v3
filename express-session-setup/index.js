const express = require('express'),
      //require express-session
      session = require('express-session'),
      app = express();

app.use(express.json());

//implement session as top level middleware
app.use(session({
    //should the session save if nothing has changed to it?
    resave: false,

    //should a new session be saved if nothing was added to it?
    saveUninitialized: true,

    //security for the cookie
    secret: 'bob ross can see the 4th dimension',
    
    //more info about the cookie, including how long the cookie should exist(maxAge) in milliseconds
    cookie: {maxAge: 1000 * 60 * 60}
}))

app.listen(4040, () => console.log('4040 happy little accidents'))