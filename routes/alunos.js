const express = require("express")
const router = express.Router();

//lsitar categoria
router.get("/", async (req, res) => { 
        res.render("base", { 
            title: "Listar Alunos",
            view: "Alunos/show",
        });
});

// form edit categoria
router.get("/edit", async (req, res) => { 
    res.render("base", { 
        title: "Editar Alunos",
        view: "Alunos/edit",
    });
});

//form add categoria 
router.get("/add", async (req, res) => { 
    res.render("base", { 
        title: "Adicionar Alunos",
        view: "alunos/add",
    });
});

module.exports = router; 