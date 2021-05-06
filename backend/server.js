const express = require('express')
const app = express();
const port = 1800;
require('./routers/index')(app)
app.listen(1800,()=>{
    console.log('server is running', port )
})