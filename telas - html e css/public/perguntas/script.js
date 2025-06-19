document.addEventListener("DOMContentLoaded", () => {
  // Expansão das perguntas frequentes
  const perguntas = document.querySelectorAll('.faq-pergunta');

  perguntas.forEach(pergunta => {
    const resposta = pergunta.nextElementSibling;

    pergunta.addEventListener('click', () => {
      const isAtiva = pergunta.classList.toggle('ativa');

      if (isAtiva) {
        resposta.style.maxHeight = resposta.scrollHeight + "px";
      } else {
        resposta.style.maxHeight = "0";
      }
    });
  });

  // Controle de login no cabeçalho
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
  }
});
