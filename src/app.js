import express from "express";
import useRouter from "./routes/users.routes";
import loginRoutes from "./routes/session.routes";
import "dotenv/config";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users", useRouter);
app.use("/login", loginRoutes);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
