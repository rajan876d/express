import express from "express";
import config from "./config/config.js";
import userRoutes from "./routers/user.routes.js";
import authRoutes from "./routers/auth.routes.js";
import connectDB from "./config/database.js";
import productRoutes from "./routers/product.routes.js";
// import cartsRouter from "./routers/Cart.routes.js";

connectDB();

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
response.send("Home page");
});

app.get("/about",(req, res) => {
    res.send("About page");
})
// app.get("/about",(req,res)=>{
//     res.send("about us");
// })
// app.get("/contact",(req,res)=>{
//     res.send("contact page");
// })


// app.get("/users",(req,res)=>{
//     const id = req.params.userid;

//     const users = await fs.readfile("data/user.json","utf-8");

//     const user =JSON.parse(users).find((user) => user.id ==id);
//     res.json(firstuser) 
// })

app.use("/", userRoutes);
app.use("/", productRoutes);
// app.use("/", cartsRouter);
app.use("/api/auth/",authRoutes);

app.listen(config.port,  () =>{
    console.log("Server running at port 8000......");
});

