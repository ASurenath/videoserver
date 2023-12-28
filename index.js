//import json library
const jsonServer=require('json-server')
const cors=require('cors')
//Create server
const videoServer=jsonServer.create()

//create middleware (json to js)
const middleware=jsonServer.defaults()

//connect to data.json using router
const router=jsonServer.router('data.json')

//connect with client app using cors
videoServer.use(cors())
videoServer.use(middleware)
videoServer.use(router)

const PORT=4000
videoServer.listen(PORT,()=>{console.log(`____Video server started at port ${PORT}___`);})