const express = require("express")
const router = express.Router();

//lsitar categoria
router.get("/", async (req, res) => { 
        res.render("base", { 
            title: "Listar Categorias",
            view: "categorias/show",
        });
});

// form edit categoria
router.get("/edit", async (req, res) => { 
    res.render("base", { 
        title: "Editar Categorias",
        view: "categorias/edit",
    });
});

//form add categoria 
router.get("/add", async (req, res) => { 
    res.render("base", { 
        title: "Adicionar Categorias",
        view: "categorias/add",
    });
});

module.exports = router; 