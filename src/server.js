import express from 'express';
import http from 'http';
import * as sapper from '@sapper/server';

const { PORT } = process.env;

let blobContentType = 'application/octet-stream';

function setHeaders(res, path) {
  if (path.match(/(png|jpe?g|webp|gif|pdf)$/)) {
    res.setHeader('Content-Type', blobContentType);
    res.setHeader('Cache-Control', 'no-store');
  }
}

const app = express();

app.use(express.json());

app.use(express.static('static', { setHeaders }));

app.post('/contentType', (req, res, next) => {
  blobContentType = req.body.type;
  res.sendStatus(200);
});

app.use(sapper.middleware());

http.createServer(app).listen(PORT, err => {
  if (err) {
    console.error('error', err);
  }
});
