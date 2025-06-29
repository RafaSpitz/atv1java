// Aguarda o documento HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos da página
    const btnIniciar = document.getElementById('btnIniciar');
    const btnCalcular = document.getElementById('btnCalcular');
    const inputQuantidade = document.getElementById('quantidade');
    const divCamposNumeros = document.getElementById('campos-numeros');
    const h2Resultado = document.getElementById('resultado');

    // Adiciona o evento de clique ao botão "Iniciar Jogo"
    btnIniciar.addEventListener('click', () => {
        const quantidade = parseInt(inputQuantidade.value);

        // Limpa campos e resultados anteriores
        divCamposNumeros.innerHTML = '';
        h2Resultado.textContent = '';

        // Validação: verifica se a quantidade é um número válido e maior que zero
        if (isNaN(quantidade) || quantidade <= 0) {
            alert('Por favor, digite uma quantidade válida!');
            return;
        }

        // Cria os campos para o usuário digitar os números
        for (let i = 1; i <= quantidade; i++) {
            const novoCampo = document.createElement('div');
            novoCampo.classList.add('input-group-dinamico');
            novoCampo.innerHTML = `
                <label for="numero${i}">Número ${i}:</label>
                <input type="number" id="numero${i}" class="numero-input" placeholder="Digite o ${i}º número">
            `;
            divCamposNumeros.appendChild(novoCampo);
        }

        // Mostra o botão de calcular
        if (quantidade > 0) {
            btnCalcular.classList.remove('hidden');
        } else {
            btnCalcular.classList.add('hidden');
        }
    });

    // Adiciona o evento de clique ao botão "Calcular Média"
    btnCalcular.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.numero-input');
        let soma = 0;
        let totalNumerosValidos = 0;

        // Itera sobre cada campo de número
        inputs.forEach(input => {
            const valor = parseFloat(input.value);
            // Verifica se o valor digitado é um número
            if (!isNaN(valor)) {
                soma += valor;
                totalNumerosValidos++;
            }
        });
        
        // Verifica se todos os campos foram preenchidos
        if (totalNumerosValidos < inputs.length) {
            alert('Por favor, preencha todos os campos com números válidos.');
            return;
        }

        // Calcula a média
        const media = soma / totalNumerosValidos;

        // Exibe o resultado na tela
        h2Resultado.textContent = `A média é: ${media.toFixed(2)}`;
    });
});
