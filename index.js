const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
    res.cookie('username','sumeet kumar', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
  });

  app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username;
    if (username) {
      res.send("Welcome back, ${username}!');
    } else {
      res.send('No cookie found');
    }
  })
  app.get('/check-cookie-header', (req, res) => {
    const cookieHeader = req.headers.cookie;
  
    if (cookieHeader) {
      res.send('CookieHeaderPresent: ${cookieHeader'});
    } else {
      res.send('Cookie Header Not Present');
    }
  })

  app.listen(3000,()=> {
    console.log('server is running on port 3000')
});