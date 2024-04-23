function validaCadastro() {
    var razaoSocial = document.getElementById('input_nomeEmpresa').value;
    var email = document.getElementById('input_email').value;
    var cnpj = document.getElementById('input_cnpj').value;
    var telefone1 = document.getElementById('input_telefone1').value;
    var telefone2 = document.getElementById('input_telefone2').value;
    var senha = document.getElementById('input_senha').value;
    var confirmSenha = document.getElementById('input_confirmSenha').value;

    var contArroba = 0;

    for (var i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            contArroba++
        }
    }

    if (razaoSocial == '' || email == '' || cnpj == '' || (telefone1 == '' && telefone2 == '') || senha == '' || confirmSenha == '') {
        alert('Complete todos os campos obrigatórios')
    } else if (razaoSocial.length < 5) {
        span_nome.innerHTML = 'Nome inválido'
    } else if (contArroba > 1) {
        alert('O email só pode ter um @')
    } else if (email.indexOf(".") == -1) {
        alert('Email inválido');
    } else if (cnpj.length < 14) {
        alert('CNPJ inválido');
    } else if (senha.length < 6) {
        alert('Senha precisa ter no minímo 6 caracteres');
    } else if (senha.indexOf("!") == -1 && senha.indexOf("#") == -1 && senha.indexOf("$") == -1 && senha.indexOf('@') == -1 && senha.indexOf('%') == -1 && senha.indexOf('*') == -1) {
        alert('A senha precisa conter um caracter especial')
    } else if (confirmSenha !== senha) {
        alert('As senhas não coincidem')
    } else {
        window.open('./continuarCadastro.html')
    }
}


function validaEndereco() {
    var cep = document.getElementById('input_cep').value;
    var numero = document.getElementById('input_numero').value;
    var complemento = document.getElementById('input_complemento').value;

    if (cep.length < 8) {
        alert('CEP inválido')
    } else if (numero == '') {
        alert('Número inválido')
    } else if (complemento == '') {
        alert('Insira um complemento')
    } else {
        window.open('../tela-login/telaLogin.html')
    }
}

function validaFuncionario() {
    var nomeFuncionario = document.getElementById('input_nomeFuncionario').value;
    var email = document.getElementById('input_email').value;
    var telefone = document.getElementById('input_telefone').value;
    var senha = document.getElementById('input_senha').value;
    var confirmSenha = document.getElementById('input_confirmSenha').value;
    var contArroba = 0;

    for (var i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            contArroba++
        }
    }

    if (nomeFuncionario == '' || email == '' || telefone == '' || senha == '' || confirmSenha == '') {
        alert('Complete todos os campos obrigatórios')

    } else if (nomeFuncionario.length < 1) {
        alert('Nome Inválido')

    } else if (contArroba > 1) {
        alert('O email só pode ter um @')

    } else if (email.indexOf(".") == -1) {
        alert('Email inválido');

    } else if (senha.length < 5) {
        alert('Senha precisa ter no minímo 5 caracteres');

    } else if (senha.indexOf("!") == -1 && senha.indexOf("#") == -1 && senha.indexOf("$") == -1 && senha.indexOf('@') == -1 && senha.indexOf('%') == -1 && senha.indexOf('*') == -1) {
        alert('A senha precisa conter um caracter especial')

    } else if (confirmSenha !== senha) {
        alert('As senhas não coincidem')
        
    } else {
        window.open('../dashboard/painel.html')
    }
}