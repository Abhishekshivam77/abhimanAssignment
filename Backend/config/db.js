const Sequelize=require("sequelize")
require("dotenv").config()

// creating connection
const connection=new Sequelize(process.env.dataBaseName,process.env.user_name,process.env.mySqlPassword,{
    host:process.env.host,
    dialect:"mysql",
    port:process.env.mySqlPort
})
connection.authenticate()
.then(()=>console.log("connected to MySql database successfull"))
.catch((error)=>console.log(error.message))
// exporting connection
module.exports={connection}