const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/data', function(request, response){
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
  });



app.listen(port, () => console.log(`Example app listening on port ${port}!`))