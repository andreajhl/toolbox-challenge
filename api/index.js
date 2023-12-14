import express from "express";
import cors from "cors";
import { PORT } from "./src/constants/index.js";

// Routers
import filesRouter from "./src/routes/index.js";

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// MOUNT ROUTERS
app.use('/files', filesRouter);

// MIDDLEWARES ERRORS
app.use((_, res) => {
  res.status(404).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app };
