document.querySelector('.iniciar-btn').addEventListener('click', function() {
    // Esconde a tela inicial
    const telaInicial = document.querySelector('.tela-inicial');
    telaInicial.style.opacity = '0';
    telaInicial.style.pointerEvents = 'none'; // Impede interação enquanto está "desaparecendo"
    
    // Mostra a caixa de perguntas com animação
    const perguntas = document.querySelector('.caixa-perguntas');
    perguntas.style.display = 'block';
    perguntas.style.opacity = '0';
    
    // Pequeno atraso para garantir que a tela inicial desapareça antes da animação
    setTimeout(() => {
        perguntas.classList.add('fade-in'); // Adiciona a animação de fade-in
        perguntas.style.opacity = '1'; // Garante que a caixa de perguntas apareça suavemente
    }, 500); // Ajuste o tempo conforme necessário

    // Adiciona a classe para a animação de fade
    perguntas.classList.remove('fade-in'); // Remove a classe para reiniciar a animação
    void perguntas.offsetWidth; // Força a reinicialização da animação
    perguntas.classList.add('fade-in'); // Adiciona novamente para a animação começar
});
