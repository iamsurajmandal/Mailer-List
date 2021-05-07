const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
var allowedOrigins = ['https://localhost:3000'];
app.use(bodyParser.json())
app.use(cors(
    //     {
    //     origin: function(origin, callback){
    //       // allow requests with no origin 
    //       // (like mobile apps or curl requests)
    //       if(!origin) return callback(null, true);
    //       if(allowedOrigins.indexOf(origin) === -1){
    //         var msg = 'The CORS policy for this site does not ' +
    //                   'allow access from the specified Origin.';
    //         return callback(new Error(msg), false);
    //       }
    //       return callback(null, true);
    //     },
    //     methods:['GET','POST','PUT', 'DELETE'],
    //     allowedHeaders:['Content-Type', 'Authorization']
    // }
));
if(process.env.NODE_ENV==='production'){
    app.use(express.static('../frontend/ui/build'))
}
require('./routers/index')(app)
app.listen(port, () => {
    console.log('server is running', port)
})