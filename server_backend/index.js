import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { adminRoute } from "./routes/adminRoute.js";
import { coffeeRoute } from "./routes/coffeeRoute.js";
import { userRoute } from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/coffeetoAPI", coffeeRoute);

app.listen(PORT, () => {
  console.log(`Port is running on PORT No.${PORT}`);
});

// Testing Prior APIs
// app.use("/api/admin", adminRoute);
// app.use("/api/coffee", coffeeRoute);
// app.use("/api/user", userRoute);

// Connecting to Clientside APIs
app.use("/coffeetoAPI/admin", adminRoute);
app.use("/coffeetoAPI/coffee", coffeeRoute);
app.use("/coffeetoAPI/user", userRoute);
