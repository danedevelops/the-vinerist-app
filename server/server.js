const express = require("express");
const app = express();
const wineriesRoutes = require("./routes/wineries");
const vintagesRoutes = require("./routes/vintages");
const reviewsRoutes = require("./routes/reviews");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const fs = require("fs");
const path = require("path");
const session = require("express-session");
const ora = require("ora");
const passport = require("passport");
require("dotenv").config();
const PORT = process.env.PORT;

//server route
const userSetup = require("./routes/users");

//middleware
app.use(cors());
app.use(express.json());
app.use("/static", express.static("./uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//homepage of api
app.get("/", (req, res) => {
  res.send("<h2>Welcome to The Vinerist</h2>");
});

//Routes
app.use("/users", userSetup);
app.use("/wineries", wineriesRoutes);
app.use("/vintages", vintagesRoutes);
app.use("/reviews", reviewsRoutes);

app.post("/uploadFile", upload.single("avatar"), (req, res) => {
  console.log(req);
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = req.file.filename + "." + fileType;

  fs.rename(
    `./uploads/${req.file.filename}`,
    `./uploads/${newFileName}`,
    function () {
      console.log("callback");
      res.status(200).json({ fileName: newFileName });
    }
  );
});

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/*", (req, res) => {
  res.send(
    "<h1>You've stumbled into the wrong vines.  This is not the vineyard you are looking for.</h1>"
  );
});

app.listen(PORT, () => {
  ora(`Server running on port ${PORT}`).start();
});
