import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../openapi.json" assert {type:"json"}


dotenv.config();
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
