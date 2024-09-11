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
                afirmacao: "A geografia é uma ciência fundamental que estuda a Terra e suas relações com os seres humanos. Ela investiga a distribuição de fenômenos naturais e humanos pelo espaço, oferecendo uma compreensão abrangente do planeta."
            },
            {
                texto: "País",
                afirmacao: "A geografia é uma ciência fundamental que estuda a Terra e suas relações com os seres humanos. Ela investiga a distribuição de fenômenos naturais e humanos pelo espaço, oferecendo uma compreensão abrangente do planeta."
            }
        ]
    },
    {
        enunciado: "Quantos continentes o planeta terra tem?",
        alternativas: [
            {
                texto: "7 Continentes",
                afirmacao: "A geografia física se concentra nos processos naturais da Terra, como clima, relevo, vegetação e hidrografia. Entender esses aspectos é essencial para o planejamento ambiental, preservação dos ecossistemas e prevenção de desastres naturais."
            },
            {
                texto: "6 Continentes",
                afirmacao: "A geografia física se concentra nos processos naturais da Terra, como clima, relevo, vegetação e hidrografia. Entender esses aspectos é essencial para o planejamento ambiental, preservação dos ecossistemas e prevenção de desastres naturais."
            }
        ]
    },
    {
        enunciado: "Qual país é considerado o país do futebol e do carnaval?",
        alternativas: [
            {
                texto: "Argentina",
                afirmacao: "A geografia humana estuda as sociedades, suas culturas, economias e como se organizam espacialmente. Ao analisar as interações entre grupos humanos e o espaço que ocupam, a geografia revela como fatores econômicos, políticos e culturais influenciam a distribuição da população, a urbanização e os movimentos migratórios."
            },
            {
                texto: "Brasil",
                afirmacao: "A geografia humana estuda as sociedades, suas culturas, economias e como se organizam espacialmente. Ao analisar as interações entre grupos humanos e o espaço que ocupam, a geografia revela como fatores econômicos, políticos e culturais influenciam a distribuição da população, a urbanização e os movimentos migratórios."
            }
        ]
    },
    {
        enunciado: "Qual é o maior país em questão territorial?",
        alternativas: [
            {
                texto: "Russia",
                afirmacao: "A geografia também tem um papel crucial na geopolítica, ajudando a entender as relações de poder entre nações e a importância estratégica de certas regiões. Ao estudar fronteiras, recursos naturais e zonas de conflito, a geografia oferece insights valiosos para a diplomacia e a solução de conflitos internacionais."
            },
            {
                texto: "Estados Unidos",
                afirmacao: "A geografia também tem um papel crucial na geopolítica, ajudando a entender as relações de poder entre nações e a importância estratégica de certas regiões. Ao estudar fronteiras, recursos naturais e zonas de conflito, a geografia oferece insights valiosos para a diplomacia e a solução de conflitos internacionais."
            }
        ]
    },
    {
        enunciado: "Qual é o maior país em questão populacional?",
        alternativas: [
            {
                texto: "China",
                afirmacao: "As aplicações da geografia são vastas, desde o uso de tecnologias de sensoriamento remoto e sistemas de informação geográfica (SIG) até o planejamento urbano e ambiental. No futuro, a geografia continuará a ser crucial para enfrentar desafios globais como as mudanças climáticas, a escassez de recursos e a sustentabilidade, ajudando a criar um mundo mais equilibrado e consciente."
            },
            {
                texto: "Índia",
                afirmacao: "As aplicações da geografia são vastas, desde o uso de tecnologias de sensoriamento remoto e sistemas de informação geográfica (SIG) até o planejamento urbano e ambiental. No futuro, a geografia continuará a ser crucial para enfrentar desafios globais como as mudanças climáticas, a escassez de recursos e a sustentabilidade, ajudando a criar um mundo mais equilibrado e consciente."
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
