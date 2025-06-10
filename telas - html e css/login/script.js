const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Controle do pop-up dos Termos de Uso
document.getElementById("abrir-termos").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("popup-termos").style.display = "flex";
});

document.getElementById("fechar-termos").addEventListener("click", function() {
  document.getElementById("popup-termos").style.display = "none";
});
