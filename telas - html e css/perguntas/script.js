document.addEventListener("DOMContentLoaded", () => {
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

  areaUsuario.addEventListener("click", (e) => {
    if (!usuarioLogado) return;

    const popupPerfil = document.getElementById("popupPerfil");
    const dadosUsuario = document.getElementById("dadosUsuario");

    const dadosMock = {
      nome: "Diego Henrique",
      email: "diegoh.ifc@gmail.com",
      idade: 17,
      genero: "Masculino"
    };

    dadosUsuario.innerHTML = `
      <strong>Nome:</strong> ${dadosMock.nome}<br>
      <strong>Email:</strong> ${dadosMock.email}<br>
      <strong>Idade:</strong> ${dadosMock.idade}<br>
      <strong>Gênero:</strong> ${dadosMock.genero}
    `;

    popupPerfil.classList.add("show");
  });

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
});
});

