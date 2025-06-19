document.addEventListener("DOMContentLoaded", () => {
  fetch("/usuarios")
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#tabelaUsuarios tbody");
      data.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${user.id}</td>
          <td>${user.nome}</td>
          <td>${user.email}</td>
          <td>
            <button class="visualizar" onclick='visualizar(${JSON.stringify(user)})'>Visualizar</button>
            <button class="editar" onclick="editarUsuario(${user.id})">Editar</button>
            <button class="deletar" onclick="deletarUsuario(${user.id})">Deletar</button>
          </td>
`;

        tbody.appendChild(tr);
      });
    })
    .catch(err => {
      console.error("Erro ao buscar usuários:", err);
    });
});

function visualizar(user) {
  document.getElementById("detalheNome").textContent = user.nome;
  document.getElementById("detalheEmail").textContent = user.email;
  document.getElementById("detalheTelefone").textContent = user.telefone;
  document.getElementById("detalheGenero").textContent = user.genero;
  document.getElementById("modalVisualizar").style.display = "block";
}

function fecharModal() {
  document.getElementById("modalVisualizar").style.display = "none";
}

function editarUsuario(id) {
  const novoNome = prompt("Digite o novo nome:");
  if (novoNome) {
    fetch(`/usuarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome: novoNome })
    })
    .then(res => {
      if (!res.ok) throw new Error('Erro ao editar usuário');
      location.reload();
    })
    .catch(err => alert(err));
  }
}

function deletarUsuario(id) {
  if (confirm("Deseja excluir este usuário?")) {
    fetch(`/usuarios/${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) throw new Error('Erro ao deletar usuário');
      location.reload();
    })
    .catch(err => alert(err));
  }
}

// autenticacao

if (sessionStorage.getItem("autenticado") !== "true") {
    window.location.href = "../seguranca.html";
  }