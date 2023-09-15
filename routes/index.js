import { Router } from "express";
const router = Router();

//endpoints
router.get("/index", (req, res) =>
  res.render("index", { titulo: "Informacion" })
); // lo renderizo y le mando el nombre del archivo (ejs)

router.get("/publicacion", (req, res) =>
  res.render("publicacion", { titulo: "Lee novedades aqui" })
);

router.get("/contacto", (req, res) =>
  res.render("contacto", { titulo: "Encuentrame Aqui" })
);
//---------------------------------------------------------------

export default router;
