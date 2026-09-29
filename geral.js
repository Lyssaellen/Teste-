window.onload = () => {
  lucide.createIcons();
};

// Alternar visualização da senha
function togglePasswordVisibility(inputId, iconElement) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    iconElement.setAttribute('data-lucide', 'eye-off');
  } else {
    input.type = 'password';
    iconElement.setAttribute('data-lucide', 'eye');
  }
  lucide.createIcons();
}

// Ação de Login
function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // Redireciona para o catálogo principal após autenticação
    window.location.href = './index.html';
  }
}

// Ação de Cadastro
function handleRegister(e) {
  e.preventDefault();

  const pass = document.getElementById('regPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;

  if (pass !== confirmPass) {
    alert('As senhas digitadas não coincidem!');
    return;
  }

  alert('Conta cadastrada com sucesso!');
  window.location.href = './login.html';
}

// Ação de Recuperação de Senha
function handleRecovery(e) {
  e.preventDefault();

  const email = document.getElementById('recoverEmail').value;

  if (email) {
    alert(`Enviamos um link de redefinição para o email: ${email}`);
    window.location.href = './login.html';
  }
}