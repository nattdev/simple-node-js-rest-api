// Module import
const http = require('http');
const url = require('url');
const {parse}  = require('querystring');

// Database simulation
const tasks = [];

// Create HTTP server
const server = http.createServer((req, res) => {
	const {pathname, query} = url.parse(req.url, true);
	
	if (req.method == 'GET' && pathname == '/tasks') {
		res.setHeader('Content-Type', 'application/json');
		res.statusCode = 200;
		res.end(JSON.stringify({tasks}));
	}
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
