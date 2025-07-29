import { Router } from "express";
import { log } from "node:console";

const router = Router();

router.get("/", (req, res) => {
  const ip = req.ip
  console.log("Page d'accueil requested from: " + ip)
  res.send("bienvenue sur mon site");

});

router.get("/categories", (req, res) => {
  console.log("Page des catégories requested by a user");
  res.send("Page des catégories");
})


router.get("/:categoryId/recipes", (req, res) => {
  console.log(`Page recette de la catégorie ${req.params.categoryId} requested by a user`);
  res.send("Page des recettes");
})

router.get("/recipes/:id", (req, res) => {
  console.log(`Page de la recette ${req.params.id} requested by a user`);
  res.send("Page de la recette");
})

router.get("/recipes/:recipeName", (req, res) => {
  console.log(`Page de la recette ${req.params.recipeName} requested by a user`);
  res.send("Page de la recette demandée");
})


export default router;

