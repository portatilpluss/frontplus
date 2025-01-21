import express from 'express';
import { config } from 'dotenv';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';
import ejs from 'ejs';
import { fileURLToPath } from 'url';
import path from 'path';
config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
// Middleware para agregar variables globales
app.use((req, res, next) => {
    res.locals.FullUrl = `${process.env.APIURL}/view`;
    next();
});
// Routes
app.use("/", routes);


app.use("/",(req, res)=>{
    res.render("view.error.ejs")
})

app.set('port', process.env.PORT);

export default app;