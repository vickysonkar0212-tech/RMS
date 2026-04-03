const mongoose =  require("mongoose")

mongoose.connect(process.env.DB_URL) 

const db = mongoose.connection

db.on("open" , () => {
    console.log("Db connected")
})

