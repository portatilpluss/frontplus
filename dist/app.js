import express from 'express';
import { config } from 'dotenv';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';
import ejs from 'ejs';
import { fileURLToPath } from 'url';
import path from 'path';
config();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express["static"](path.join(__dirname, "public")));
app.use(cookieParser());
// Routes
app.use("/", routes);
app.use("/", function (req, res) {
  res.render("view.error.ejs");
});
app.set('port', process.env.PORT);
export default app;