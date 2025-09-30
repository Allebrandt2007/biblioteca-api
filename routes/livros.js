import { Router } from "express";
import { listarLivros, buscarLivro, criarLivro, atualizarLivro, removerLivro } from "../controllers/livrosController.js";

const router = Router();

router.get("/", listarLivros);
router.get("/:id", buscarLivro);
router.post("/", criarLivro);
router.put("/:id", atualizarLivro);
router.delete("/:id", removerLivro);

export default router;
