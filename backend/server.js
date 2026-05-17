const express = require("express");
const app = express();

app.use(express.json());

// thuốc
const drugRoutes = require("./routes/drug");
app.use("/api/drugs", drugRoutes);

// bệnh nền
const diseaseRoutes = require("./routes/disease");
app.use("/api/diseases", diseaseRoutes);

// login
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Backend running OK 🚀");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});