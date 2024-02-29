const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const SmartHttp = require('smart-http');
const correlationId = require('correlationid-middleware');

const routes = require('./routes');
// const adminAuthroutes = require('./routes/admin');
// const cutomerAuthroutes = require('./routes/customer');

const { PORT } = require('./config');

const app = express();

// const server = app.listen(PORT);
// const PORT = ;
const server = app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

/**
 * List of all middlewares used in project cors, compression, helmet
 * */
try {
  // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  app.enable('trust proxy');
  app.use(correlationId, SmartHttp());
  app.use(cors({
    exposedHeaders: [ 'x-coreplatform-paging-limit', 'x-coreplatform-total-records', 'public-id', 'image-url',
      'Content-Type', 'File-Name', 'Content-Size', 'Content-disposition', 'message', 'location' ],
  }));
  app.use(compression());
  app.use(helmet());
  app.use(express.urlencoded({
    extended: true,
  }));
  app.use(express.json());

  app.use((err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }

    const { message = 'Please upload the file lesser than 100MB' } = err;

    return res.status(400).send({
      type: 'field-validation',
      details: [ {
        message,
        name: 'file',
      } ],
    });
  });

  app.use('/', routes);
  app.all('/*', (_req, res) => res.notFound());
} catch (e) {
  server.close();
}
