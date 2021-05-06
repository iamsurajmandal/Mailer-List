module.exports = (app) =>{
   app.post('/send-mail', (req,res)=>{
       (async()=>{
           try{
           const validation = require('../validations/validators');
           const sendMail = require('../contolllers/sendmail')
           const  sendingMail = sendMail.sendingMail();
           }
           catch(err) {
               console.log('error while sending mail', err)
               res.status(500).json({
                   message:"failed to send a mail",
                   err:err
               })
           }

       })();
   })
}