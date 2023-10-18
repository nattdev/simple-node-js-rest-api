// Module import
const http = require('http');
const url = require('url');
const {parse}  = require('querystring');

// Database simulation
const tasks = [];

// Create HTTP server
const server = http.createServer((req, res) => {
	const {pathname, query} = url.parse(req.url, true);
});
