const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./db/connection")
const cors = require('cors')
const secured = require("./routes/util")
const indexRouter = require('./routes/units');
const userRouter = require('./routes/users');

const logger = require('./logger'); // Import the logger


const { units } = require("./db/units");

const { Server } = require("socket.io");

(async () => {
  logger.info("Starting App")
  try {

    await connectDB();
    logger.info("Connected to MongoDB")

    require("./socket")

    process.env.TZ = "America/Mexico_City";

    const app = express();
    app.use((req, res, next) => {
      const { method, url } = req;
      const start = Date.now();

      // When the response finishes, log the time taken and status code
      res.on('finish', () => {
        const duration = Date.now() - start;
        const statusCode = res.statusCode;
        logger.info(`${method} ${url} ${statusCode} - ${duration}ms`);
      });

      next();
    });
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors({
      origin: '*', 
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
      allowedHeaders: ['Content-Type', 'Authorization']
    }))

    app.use("/users", userRouter)
    app.use('/units', secured, indexRouter);


    // error handler
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.json({ error: true, message: res.locals.message });
    });

    const PORT = process.env.PORT || 3000;
    const server = app.listen(PORT, () => { });

    const io = new Server(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        path: '/socket.io',
      }
    });

    io.on('connection', (socket) => {

      // Example: Listen for a custom event from the client
      socket.on('get', (data) => {
        if (data.units) {
          data.units.forEach(info => {
            socket.join("PESROOM" + info)
          })
        }


      });

      // Add your custom event handlers here
    });


    units.watch().on('change', (change) => {
      logger.info("Change on id " + change.documentKey._id)
      io.to("PESROOM" + change.documentKey._id).emit("update", { _id: change.documentKey._id, data: change.updateDescription.updatedFields })
    })

  } catch (error) {
    logger.error("Failted to start the server:", error)
    process.exit(1);
  }
})();
