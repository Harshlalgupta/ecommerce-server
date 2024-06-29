import  express  from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import orderRoute from "./routes/order.js";
import { config } from "dotenv";
import morgan from "morgan";
import Stripe from "stripe";

import userRoute from './routes/user.js'
import productRoute from './routes/products.js'
import paymentRoute from './routes/payment.js'
import dashboardRoute from './routes/stats.js'
import cors from "cors";




config({
    path:"./.env",
});

const port=process.env.PORT || 3000;
const mongo=process.env.MONGO_URI || "";
const stripekey=process.env.STRIPE_KEY || "";

connectDB(mongo);

export const stripe =new Stripe(stripekey);
export const myCache=new NodeCache();

const app=express();

app.use(express.json());               //challenge , it should be above all the routes
app.use(morgan("dev"));
app.use(
    cors({
      origin: "ecommerce-frontend-new-gold.vercel.app",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

//const PORT=3000;


app.get('/',(req,res)=>{
    return res.json("yesss, get request received");
})

app.use("/api/v1/user",userRoute);
app.use("/api/v1/product",productRoute);
app.use("/api/v1/order",orderRoute);
app.use("/api/v1/payment",paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);

app.use("/uploads",express.static("uploads"));

app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`hello from the localhost://${port} server`);
})

