const express = require("express");
const app = express();
app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.listen(3000, "0.0.0.0");
