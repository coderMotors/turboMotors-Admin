/* Parte de Cadastro */

var minhaDIV = document.querySelector('.meuFormulario');

function liberarCadastro() {
    const btnAdicionar = document.getElementById('btnAdicionar');
    const botaoOutro = document.getElementById('botaoOutro');
    const formulario = document.querySelector('.meuFormulario');
    const input1 = formulario.querySelector('input');
  
    minhaDIV.style.pointerEvents = 'auto'; // Libera o formulário
    input1.focus(); // Foca no primeiro input
    botaoOutro.style.display = 'block'; // Exibe o botão "Outro Botão"
    btnAdicionar.style.display = 'none';
  }
  
  // Adicione um evento de clique para o botão "Outro Botão"
  const botaoOutro = document.getElementById('botaoOutro');
  botaoOutro.addEventListener('click', function() {
    alert('Botão "Outro Botão" clicado'); // Exibe o alerta
    // Adicione aqui qualquer outra ação que você deseja executar
  
    // Bloqueia novamente o formulário e oculta o botão "Outro Botão"
    const formulario = document.querySelector('.meuFormulario');
    const botaoOutro = document.getElementById('botaoOutro');
  
    formulario.style.pointerEvents = 'none'; // Bloqueia o formulário
    botaoOutro.style.display = 'none'; // Oculta o botão "Outro Botão"]
    btnAdicionar.style.display = 'block'
  });
  
  



/**********************/