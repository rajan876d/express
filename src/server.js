import express from "express";
import config from "./config/config.js";
import userRoutes from "./routers/user.routes.js";
import authRoutes from "./routers/auth.routes.js";
import connectDB from "./config/database.js";
import productRoutes from "./routers/product.routes.js";
// import cartsRouter from "./routers/Cart.routes.js";
import logger from "./middlewares/logger.js";
connectDB();

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (request, response) => {
response.send("Home page");
});

app.get("/about",(req, res) => {
    res.send("About page");
})
app.use("/", userRoutes);
app.use("/products", productRoutes);
app.use("/api/auth/",authRoutes);

app.listen(config.port,  () =>{
    console.log("Server running at port 8000......");
});

