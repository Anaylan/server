const express = require("express");
const config = require("config");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes/index");

// dotenv.config();
const app = express();

const PORT = config.get("port") || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
	console.log("started in", PORT);
});
