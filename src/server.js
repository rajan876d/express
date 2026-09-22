import express from "express";
import config from "./config/config.js";
import multer from "multer";

import userRoutes from "./routers/user.routes.js";
import authRoutes from "./routers/auth.routes.js";
import connectDB from "./config/database.js";
import connectCloudinary from "./config/cloudinary.js";
import productRoutes from "./routers/product.routes.js";
import orderRoutes from "./routers/order.routes.js";
// import cartsRouter from "./routers/Cart.routes.js";
import logger from "./middlewares/logger.js";
connectDB();
connectCloudinary();

const app = express();

const upload =multer({storage: multer.memoryStorage()});

app.use(express.json());
app.use(logger);




app.use("/", userRoutes);
app.use("/api/users", upload.single("image"), userRoutes)
app.use("/products",upload.array("image",5), productRoutes);
app.use("/api/auth/",authRoutes);

app.use("/api/orders", orderRoutes);

app.listen(config.port,  () =>{
    console.log("Server running at port 8000......");
});




// app.get("/", (request, response) => {
// response.send("Home page");
// });

// app.get("/about",(req, res) => {
//     res.send("About page");
// })