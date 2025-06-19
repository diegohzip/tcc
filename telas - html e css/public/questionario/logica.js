const perguntas = [
  "genero",
  "experiencia",
  "condicao",
  "lesao",
  "dias",
  "academia"
];

const totalPerguntas = perguntas.length;
const progressBar = document.getElementById("progressBar");
const formulario = document.getElementById("formulario");
const resultadoDiv = document.getElementById("resultado");

// Atualiza a barra de progresso
function atualizarProgresso(atual) {
  const percentual = (atual / totalPerguntas) * 100;
  progressBar.style.width = percentual + "%";
}

// Mostra a próxima pergunta
function mostrarPergunta(index) {
  if (index < totalPerguntas) {
    const proxPergunta = document.getElementById(`pergunta${index + 1}`);
    if (proxPergunta) {
      proxPergunta.style.display = "block";
    }
  } else {
    document.getElementById("submitBtn").style.display = "block";
  }
}

// Oculta todas as perguntas exceto a primeira
for (let i = 2; i <= totalPerguntas; i++) {
  const p = document.getElementById(`pergunta${i}`);
  if (p) p.style.display = "none";
}
document.getElementById("submitBtn").style.display = "none";
atualizarProgresso(0);

// Eventos de mudança nos selects
perguntas.forEach((id, idx) => {
  const select = document.getElementById(id);
  select.addEventListener("change", () => {
    if (id === "lesao" && select.value === "sim") {
      resultadoDiv.innerHTML = `
        <h2>Aviso Importante</h2>
        <p style="color: red; font-weight: bold;">
          Não é possível gerar uma ficha de treino personalizada em caso de lesão.
          Recomendamos que você procure um profissional da saúde ou um educador físico.
        </p>
      `;
      for (let i = idx + 1; i < totalPerguntas; i++) {
        const p = document.getElementById(`pergunta${i + 1}`);
        if (p) p.style.display = "none";
      }
      document.getElementById("submitBtn").style.display = "none";
      atualizarProgresso(idx + 1);
      return;
    } else {
      if (id === "lesao") resultadoDiv.innerHTML = "";
    }

    let respondidas = 0;
    for (let i = 0; i < totalPerguntas; i++) {
      const val = document.getElementById(perguntas[i]).value;
      if (val !== "") respondidas++;
    }
    atualizarProgresso(respondidas);

    if (select.value !== "") {
      mostrarPergunta(idx + 1);
    } else {
      for (let i = idx + 1; i < totalPerguntas; i++) {
        const p = document.getElementById(`pergunta${i + 1}`);
        if (p) p.style.display = "none";
      }
      document.getElementById("submitBtn").style.display = "none";
      atualizarProgresso(idx);
    }
  });
});

// Submit do formulário
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const genero = document.getElementById("genero").value;
  const experiencia = document.getElementById("experiencia").value;
  const condicao = document.getElementById("condicao").value;
  const lesao = document.getElementById("lesao").value;
  const dias = document.getElementById("dias").value;
  const academia = document.getElementById("academia").value;

  if (lesao === "sim") {
    resultadoDiv.innerHTML = `
      <h2>Aviso Importante</h2>
      <p style="color: red; font-weight: bold;">
        Não é possível gerar uma ficha de treino personalizada em caso de lesão.
        Recomendamos que você procure um profissional da saúde ou um educador físico.
      </p>
    `;
    return;
  }

  const chave = `${genero}-${experiencia}-${condicao}-${dias}-${academia}`;
  const ficha = fichas[chave];

  if (!ficha) {
    resultadoDiv.innerHTML = `
      <h2>Erro</h2>
      <p>Não foi possível encontrar uma ficha para essa combinação. Tente novamente.</p>
    `;
    return;
  }

  let html = `<h2>Ficha de Treino - ${dias} dias/semana</h2>`;
  const fichaCards = document.getElementById("ficha-cards");
  fichaCards.innerHTML = "";

  ficha.forEach((dia, index) => {
    const card = document.createElement("div");
    card.classList.add("ficha-card");
    card.innerHTML = `<h3>Dia ${index + 1}</h3>`;

    const ul = document.createElement("ul");
    dia.forEach(exercicio => {
      const li = document.createElement("li");
      li.innerHTML = 
        `<span class="exercicio-nome">${exercicio}</span>
        <img class="flecha-direita" src="imagens/flecha.png" alt="→" />`
      ;
      li.style.cursor = "pointer";
      li.addEventListener("click", () => {
        mostrarDescricaoExercicio(exercicio);
      });
      ul.appendChild(li);
    });

    card.appendChild(ul);
    fichaCards.appendChild(card);
  });

  resultadoDiv.innerHTML = html;
});

// Pop-up da descrição
const popup = document.getElementById("popupDescricao");
const descricaoTexto = document.getElementById("descricaoTexto");
const fecharPopup = document.getElementById("fecharPopup");

function mostrarDescricaoExercicio(exercicio) {
  const descricao = descricoesExercicios[exercicio] || "Descrição não disponível.";
  
  const videoLink = linksYoutube[exercicio] || "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  descricaoTexto.innerHTML = `
    <strong>${exercicio}</strong><br><br>
    ${descricao}<br><br>
    <label>Tutorial em vídeo:</label><br>
    <input type="text" class="video-link" value="${videoLink}" readonly onclick="window.open('${videoLink}', '_blank')" />
  `;

  popup.classList.add("show");
}

fecharPopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const areaUsuario = document.getElementById("areaUsuario");
  const usuarioLogado = localStorage.getItem("usuarioLogado") === "true";

  if (usuarioLogado) {
    areaUsuario.innerHTML = `<span>👤 Meu Perfil</span>`;
  } else {
    areaUsuario.innerHTML = `
      <a href="../login/login.html">Login</a>
      <a href="../login/login.html">Cadastro</a>
    `;
  }

  // Abrir pop-up do perfil
  areaUsuario.addEventListener("click", (e) => {
    if (!usuarioLogado) return;

    const popupPerfil = document.getElementById("popupPerfil");

    // Dados simulados (mock)
    const dadosMock = {
      nome: "Diego Henrique",
      email: "diegoh.ifc@gmail.com",
      idade: 17,
      genero: "Masculino"
    };

    // Preencher campos
    document.getElementById("nomeUsuario").value = dadosMock.nome;
    document.getElementById("emailUsuario").value = dadosMock.email;
    document.getElementById("idadeUsuario").value = dadosMock.idade;
    document.getElementById("generoUsuario").value = dadosMock.genero;

    // Exibir pop-up
    popupPerfil.classList.add("show");
  });

  // Fechar pop-up do perfil
  const fecharPopup = document.getElementById("fecharPopupPerfil");
  const popupPerfil = document.getElementById("popupPerfil");

  fecharPopup.addEventListener("click", () => {
    popupPerfil.classList.remove("show");
  });

  popupPerfil.addEventListener("click", (event) => {
    if (event.target === popupPerfil) {
      popupPerfil.classList.remove("show");
    }
  });

  // Botão "Alterar Dados"
  const btnEditar = document.getElementById("btnEditar");
  const btnSalvar = document.getElementById("btnSalvar");

  btnEditar.addEventListener("click", () => {
    document.querySelectorAll("#formPerfil input").forEach(input => input.disabled = false);
    btnEditar.style.display = "none";
    btnSalvar.style.display = "inline-block";
  });

  // Botão "Salvar Dados"
  const formPerfil = document.getElementById("formPerfil");

  formPerfil.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nomeUsuario").value;
    const email = document.getElementById("emailUsuario").value;
    const idade = document.getElementById("idadeUsuario").value;
    const genero = document.getElementById("generoUsuario").value;

    // Simulação de salvamento
    console.log("Dados atualizados:", { nome, email, idade, genero });

    // Desativar os campos novamente
    document.querySelectorAll("#formPerfil input").forEach(input => input.disabled = true);
    btnEditar.style.display = "inline-block";
    btnSalvar.style.display = "none";

    alert("Dados atualizados com sucesso!");
  });
});

/* Pop Up IMC */

const abrirCalculadoraIMC = document.getElementById("abrirCalculadoraIMC");
const popupIMC = document.getElementById("popupIMC");
const fecharPopupIMC = document.getElementById("fecharPopupIMC");
const calcularIMC = document.getElementById("calcularIMC");
const resultadoIMC = document.getElementById("resultadoIMC");

abrirCalculadoraIMC.addEventListener("click", () => {
  popupIMC.classList.add("show");
  resultadoIMC.textContent = "";
});

fecharPopupIMC.addEventListener("click", () => {
  popupIMC.classList.remove("show");
});

popupIMC.addEventListener("click", (e) => {
  if (e.target === popupIMC) popupIMC.classList.remove("show");
});

calcularIMC.addEventListener("click", () => {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value) / 100;

  if (isNaN(peso) || isNaN(altura) || altura === 0) {
    resultadoIMC.textContent = "Preencha os campos corretamente.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Mediana";
  else if (imc < 25) classificacao = "Boa";
  else if (imc < 30) classificacao = "Mediana";
  else classificacao = "Ruim";

  resultadoIMC.innerHTML = `Seu IMC é <strong>${imc.toFixed(1)}</strong> – ${classificacao}`;
});

// Controle do pop-up dos Termos de Uso
const abrirTermos = document.getElementById("abrir-termos");
const popupTermos = document.getElementById("popup-termos");
const fecharTermos = document.getElementById("fechar-termos");
const botaoOkTermos = document.getElementById("botao-ok-termos");

if (abrirTermos && popupTermos && fecharTermos && botaoOkTermos) {
  abrirTermos.addEventListener("click", function (event) {
    event.preventDefault();
    popupTermos.style.display = "flex";
  });

  fecharTermos.addEventListener("click", function () {
    popupTermos.style.display = "none";
  });

  botaoOkTermos.addEventListener("click", function () {
    popupTermos.style.display = "none";
  });

  popupTermos.addEventListener("click", function (event) {
    if (event.target === popupTermos) {
      popupTermos.style.display = "none";
    }
  });
};