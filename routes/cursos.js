const express = require("express")
const router = express.Router();

//lsitar categoria
router.get("/", async (req, res) => { 
        res.render("base", { 
            title: "Listar Cursos",
            view: "Cursos/show",
        });
});

// form edit categoria
router.get("/edit", async (req, res) => { 
    res.render("base", { 
        title: "Editar Cursos",
        view: "Cursos/edit",
    });
});

//form add categoria 
router.get("/add", async (req, res) => { 
    res.render("base", { 
        title: "Adicionar Cursos",
        view: "Cursos/add",
    });
});

module.exports = router; 