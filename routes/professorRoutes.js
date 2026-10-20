
const express = require("express");
const router = express.Router();

const {
    listarProfessores,
    buscarProfessor,
    listarTurmas,
    atualizarProfessor,
    adicionarTurma,
    listarPorDepartamento,
    removerProfessor
} = require("../controllers/professorcontroller");

router.get("/departamento/:departamento", listarPorDepartamento);

router.get("/", listarProfessores);
router.get("/:id/turmas", listarTurmas);
router.get("/:id", buscarProfessor);
router.put("/:id", atualizarProfessor);
router.post("/:id/turmas", adicionarTurma);
router.delete("/:id", removerProfessor);

module.exports = router;
