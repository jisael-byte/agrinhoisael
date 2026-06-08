// Alternar modo claro/escuro
const toggleButton = document.getElementById('toggleTheme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleButton.textContent = document.body.classList.contains('dark') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

// Mensagem interativa
const showButton = document.getElementById('showMessage');
const message = document.getElementById('message');

showButton.addEventListener('click', () => {
    const messages = [
        "Plante uma árvore hoje e veja o futuro florescer!",
        "Cada pequena ação no campo ajuda o planeta.",
        "Valorize o agricultor, ele alimenta o mundo.",
        "Sustentabilidade é o caminho para a vida.",
        "Do campo à cidade, juntos podemos transformar!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
});