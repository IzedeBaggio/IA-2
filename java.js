document.querySelector('.iniciar-btn').addEventListener('click', function() {
    document.querySelector('.tela-inicial').style.display = 'none';
    const perguntas = document.querySelector('.caixa-perguntas');
    perguntas.style.display = 'block';
    perguntas.classList.add('fade-in'); // Animação de fade-in
});


