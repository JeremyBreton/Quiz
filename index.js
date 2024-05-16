require('dotenv').config({ override: true });
const debug = require('debug')('quiz:httpserver');

const http = require('http');
const app = require('./app/index.app');


const PORT = process.env.PORT ?? 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server ready on http://localhost:${PORT}`);
  debug(`Server ready on http://localhost:${PORT}`);
});
