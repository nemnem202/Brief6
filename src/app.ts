import Express from "express";
import path from "node:path";
import router from "./routes/router";

const app = Express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(Express.json());

app.use(Express.static(path.join(__dirname, "public")));

app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
