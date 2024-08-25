import dotenv from "dotenv";
import dbConnection from './db/db.js';
import {app} from './App.js';


dotenv.config({path:'./.env'});

dbConnection()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is listening on ${process.env.PORT}`);});
})
.catch((err)=>{
    console.log('NOt connected',err.message);
})