const resposta = document.querySelector("#resposta");
const pergunta = document.querySelector("#inputPergunta");
const botao = document.querySelector('#meuBotao')

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
  ]

  const gerarResposta = () =>{
    let numeroAleatorio = Math.floor(Math.random() * respostas.length);
    if(!pergunta.value){
        alert('Faça uma pergunta!!!');
        return
    }
    botao.setAttribute('disabled', true);
    const p = `<div> ${pergunta.value} </div>`;


    resposta.innerHTML = p + respostas[numeroAleatorio];
    resposta.style.opacity = 1;
    setTimeout(() =>{
        resposta.style.opacity = 0;
        botao.removeAttribute('disabled');
    }, 3000)
  }