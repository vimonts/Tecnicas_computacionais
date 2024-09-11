const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "África é um continente ou um país?",
        alternativas: [
            {
                texto: "Continente",
                afirmacao: "Correto. "
            },
            {
                texto: "País",
                afirmacao: "Errado."
            }
        ]
    },
    {
        enunciado: "Quantos continentes o planeta terra tem?",
        alternativas: [
            {
                texto: "7 Continentes",
                afirmacao: "Errado."
            },
            {
                texto: "6 Continentes",
                afirmacao: "Correto."
            }
        ]
    },
    {
        enunciado: "Qual país é considerado o país do futebol e do carnaval?",
        alternativas: [
            {
                texto: "Argentina",
                afirmacao: "Errado."
            },
            {
                texto: "Brasil",
                afirmacao: "Correto."
            }
        ]
    },
    {
        enunciado: "Qual é o maior país em questão territorial?",
        alternativas: [
            {
                texto: "Russia",
                afirmacao: "Correto"
            },
            {
                texto: "Estados Unidos",
                afirmacao: "Errado"
            }
        ]
    },
    {
        enunciado: "Qual é o maior país em questão populacional?",
        alternativas: [
            {
                texto: "China",
                afirmacao: "Correto"
            },
            {
                texto: "Índia",
                afirmacao: "Errado"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
