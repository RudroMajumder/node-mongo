const express = require('express')
const app = express()




app.get('/', (req,res)=>{
    res.send('opening node ...');
})

app.listen(3000,()=>console.log('listening to port 3000'))