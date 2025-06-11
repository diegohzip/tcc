document.addEventListener("DOMContentLoaded", () => {
  const areaUsuario = document.getElementById("areaUsuario");
  const usuarioLogado = localStorage.getItem("usuarioLogado") === "true";

  if (usuarioLogado) {
    areaUsuario.innerHTML = `<span>👤 Meu Perfil</span>`;
  } else {
    areaUsuario.innerHTML = `
      <a href="login/login.html">Login</a>
      <a href="login/login.html">Cadastro</a>
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

  // Rolagem automática do carrossel de benefícios
  const carousel = document.querySelector(".carousel-container");
  let scrollDirection = 1;

  setInterval(() => {
    if (!carousel) return;
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      scrollDirection = -1;
    } else if (carousel.scrollLeft <= 0) {
      scrollDirection = 1;
    }
    carousel.scrollBy({ left: 1 * scrollDirection, behavior: "smooth" });
  }, 30);
});
