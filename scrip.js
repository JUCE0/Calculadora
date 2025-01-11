const tela = document.querySelector('.tela');
const botoes = document.querySelectorAll('.botoes button');

let expressao = "";

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.textContent;

        if (valor === 'C') {
            expressao = "";
            tela.textContent = "0";
        } else if (valor === '=') {
            try {
                expressao = eval(expressao);
                tela.textContent = expressao;
            } catch {
                tela.textContent = "Erro";
            }
        } else {
            expressao += valor;
            tela.textContent = expressao;
        }
    });
});
