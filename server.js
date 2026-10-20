const express = require("express");
const app = express();

app.use(express.json());

const professorRoutes = require("./Routes/professorRoutes");
app.use("/professores", professorRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API executando em http://localhost:${PORT}`);
});
