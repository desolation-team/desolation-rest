const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
	console.log(`Desolation REST API server is running on ${PORT}.`);
});
