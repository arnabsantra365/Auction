import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser"
import bodyParser from 'body-parser';
const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
    credentials:true,
}));
app.use(cookieParser())
app.use(express.json()); // body parser required for getting data
app.use(bodyParser.json());

import auctionRoute from "../src/routes/auction.routes.js"
app.use("/api/v1",auctionRoute);

export {app};