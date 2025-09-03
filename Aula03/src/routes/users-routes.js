import { Router } from "express";
import {
  mostraListaUsuarios,
  mostrarCriacaoUsuario,
  postCriarUsuario,
} from "../controller/users-controller.js";

const usersRouter = Router();

const respostaPadrao = (req, res) => {
  res.send("FUNCIONA");
};

usersRouter.get("/lista", mostraListaUsuarios);

usersRouter.get("/criar", mostrarCriacaoUsuario);
usersRouter.post("/criar", postCriarUsuario);

usersRouter.get("/edit", respostaPadrao);
usersRouter.post("/edit", respostaPadrao);

usersRouter.get("/delete", respostaPadrao);

export { usersRouter };
