const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('errorMsg');

    // Habilita o botão só quando os dois campos estiverem preenchidos
    function checkInputs() {
      submitBtn.disabled = !(usernameInput.value.trim() && passwordInput.value.trim());
      errorMsg.style.display = 'none'; // limpa mensagem ao digitar
    }

    usernameInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    form.addEventListener('submit', (e) => {
      submitBtn.disabled = true; // evita múltiplos envios
      errorMsg.style.display = 'none';

      // O backend responde com HTML em caso de erro — não AJAX, mas podemos melhorar futuramente
      // Caso queira AJAX, posso ajudar a implementar.

      // Se quiser, aqui pode implementar validação extra antes de enviar
    });

    // Exemplo: Se quiser mostrar erro via JS (caso backend retorne info), seria necessário ajuste no backend.