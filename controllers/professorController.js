
const professores = [
    {
        id: 1,
        nome: "Felipe Matheus Vieira Tota",
        idade: 22,
        departamento: "Tecnologia",
        turmas: [
            {
                codigo: "T001",
                disciplina: "Programação",
                alunos: ["Ana", "Pedro", "Lucas"]
            }
        ]
    },
    {
        id: 2,
        nome: "Mariana Costa",
        idade: 35,
        departamento: "Matemática",
        turmas: [
            {
                codigo: "T002",
                disciplina: "Álgebra",
                alunos: ["Julia", "Rafael"]
            }
        ]
    }
];

function listarProfessores(req, res) {
    res.json(professores);
}

function buscarProfessor(req, res) {
    const id = Number(req.params.id);
    const professor = professores.find(p => p.id === id);

    if (!professor) {
        return res.status(404).json({ mensagem: "Id não existente" });
    }

    res.json(professor);
}

function listarTurmas(req, res) {
    const id = Number(req.params.id);
    const professor = professores.find(p => p.id === id);

    if (!professor) {
        return res.status(404).json({ mensagem: "Id não existente" });
    }

    res.json(professor.turmas);
}

function atualizarProfessor(req, res) {
    const id = Number(req.params.id);
    const professor = professores.find(p => p.id === id);

    if (!professor) {
        return res.status(404).json({ mensagem: "Id não existente" });
    }

    const { nome, idade, departamento } = req.body;

    if (nome !== undefined) professor.nome = nome;
    if (idade !== undefined) professor.idade = idade;
    if (departamento !== undefined) professor.departamento = departamento;

    res.json(professor);
}

function adicionarTurma(req, res) {
    const id = Number(req.params.id);
    const professor = professores.find(p => p.id === id);

    if (!professor) {
        return res.status(404).json({ mensagem: "Id não existente" });
    }

    const { codigo, disciplina, alunos } = req.body;

    if (!codigo || !disciplina || !Array.isArray(alunos)) {
        return res.status(400).json({
            mensagem: "Informe codigo, disciplina e alunos (array)"
        });
    }

    professor.turmas.push({ codigo, disciplina, alunos });

    res.status(201).json(professor);
}

function listarPorDepartamento(req, res) {
    const departamento = req.params.departamento;

    const resultado = professores.filter(
        p => p.departamento.toLowerCase() === departamento.toLowerCase()
    );

    res.json(resultado);
}

function removerProfessor(req, res) {
    const id = Number(req.params.id);
    const indice = professores.findIndex(p => p.id === id);

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Id não existente" });
    }

    professores.splice(indice, 1);

    res.json({ mensagem: "Professor removido com sucesso" });
}


module.exports = {
    professores,
    listarProfessores,
    buscarProfessor,
    listarTurmas,
    atualizarProfessor,
    adicionarTurma,
    listarPorDepartamento,
    removerProfessor
};

