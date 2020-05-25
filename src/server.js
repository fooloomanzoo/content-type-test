import express from 'express';
import http from 'http';
import * as sapper from '@sapper/server';

const { PORT } = process.env;

const app = express();

let blobContentType = 'application/octet-stream';

function setHeaders(res, path) {
	if (path.match(/(png|jpe?g|webp|gif|pdf)$/)) {
		res.setHeader('Content-Type', blobContentType);
		res.setHeader('Cache-Control', 'no-store');
	}
}

app.use(express.json());

app.use(express.static('static', { setHeaders }));

app.post('/contentType', (req, res, next) => {
	blobContentType = req.body.type;
	res.sendStatus(200);
});

app.use(sapper.middleware());

const server = http.createServer(app)
	
server.listen(PORT, err => {
	if (err) {
		console.error('error', err);
	}
})