import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { adminRoute } from "./routes/adminRoute.js";
import { coffeeRoute } from "./routes/coffeeRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Port is running on PORT No.${PORT}`);
});

app.use("/api/admin", adminRoute);
app.use("/api/coffee", coffeeRoute);
