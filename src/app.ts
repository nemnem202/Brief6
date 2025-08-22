import express from "express";
import path from "node:path";
import router from "./routes/router.js"; // ⚠️ ajouter .js pour Node en ES module

const app = express();

// Pour Vercel, le port est fourni par process.env.PORT
const PORT = process.env.PORT || 3000;

// Configuration du moteur de vues
app.set("view engine", "ejs");

// Chemins vers les dossiers
app.set("views", path.join(process.cwd(), "src/views"));
app.use(express.static(path.join(process.cwd(), "public")));

// Middleware JSON
app.use(express.json());

// Routes
app.use(router);

// ⚠️ Pas de app.listen pour Vercel, Vercel s'occupe du serveur

export default app;
