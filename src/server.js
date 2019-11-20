const express = require('express')
const fs = require('fs');
const app = express()
const port = 5000

let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata);

app.get('/', (req, res) => res.send(student))
app.use(function(req, res, next) {
    res.header("access-control-allow-origin", "*");
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header( 'Content-Type', 'application/json',);
    res.header( 'Accept', '*');
    next();
});

app.post('/post', function(request, response){
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
  });

  



app.listen(port, () => console.log(`Example app listening on port ${port}!`))