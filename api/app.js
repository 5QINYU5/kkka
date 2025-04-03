const express=require('express')
const cors=require('cors')
const bodyParser = require('body-parser')
const app=express()
app.use(cors())
const userRouter=require('./router/user.js')
const db=require('./db/db.js')
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',userRouter)

app.listen(3000,()=>{
	console.log('api serve running at http://127.0.0.1:3000')
})