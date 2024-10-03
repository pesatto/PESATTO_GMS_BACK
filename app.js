const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require("./db/connection")
const cors = require('cors')
const secured = require("./routes/util")
const indexRouter = require('./routes/units');
const userRouter = require('./routes/users');

const { units } = require("./db/units");

const { Server } = require("socket.io");

(async () => {
  console.log("Starting App")
  try {

    await connectDB();
    console.log("Connected to Mongo")

    require("./socket")

    process.env.TZ = "America/Mexico_City";

    const app = express();
    app.use(logger('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors())

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
        methods: ["GET", "POST"]
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
      console.log("Change on id " + change.documentKey._id)
      io.to("PESROOM" + change.documentKey._id).emit("update", { _id: change.documentKey._id, data: change.updateDescription.updatedFields })
    })

  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
})();