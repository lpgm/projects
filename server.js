const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});