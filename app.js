var createError = require("http-errors");
var express = require("express");
var path = require("path");
var session = require("express-session");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var accountRouter = require("./routes/auth");
var meRouter = require("./routes/settings");
var categoryRouter = require("./routes/category");
var restApi = require("./routes/api/v1/index");
var chatRouter = require("./routes/chat");

var app = express();
app.conf = require("./config/app");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

var cooky = {
  secret: "this is secret",
  resave: true,
  expires: new Date() * 60 * 60 * 24 * 7,
  saveUninitialized: true
};


app.sessionMiddleware = session(cooky);

app.set("trust proxy", 1); 
app.use(app.sessionMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/u", usersRouter);
app.use("/account", accountRouter);
app.use("/me", meRouter);
app.use("/api", restApi);
app.use("/category", categoryRouter);
app.use("/chat", chatRouter);


// app.listen(4000, console.log('Running at 4000'))

module.exports = app;
