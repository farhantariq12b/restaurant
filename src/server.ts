import http from 'http';

import app from './routes';

const server = http.createServer(app);

const PORT: string | number = process.env.PORT || 4000

server.listen(PORT, () => {

  console.log(`API server is live at localhost:`, PORT);

});
