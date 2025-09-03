import { select, insert } from "../config/db.js";

// UTILIZANDO UM CONTROLLER SEM CLASSES
export function mostraListaUsuarios(req, res) {
  // res.send("RESPOSTA DO CONTROLLER");
  const dados = select();
  res.render("users-lista", { dados });
  // res.render('users-lista', { dados: dados })
}

export function mostrarCriacaoUsuario(req, res) {
  res.render("criar-user");
}

export function postCriarUsuario(req, res) {
  let userData = req.body;
  insert(userData);
  const dados = select();
  res.redirect("/users/lista");
}
