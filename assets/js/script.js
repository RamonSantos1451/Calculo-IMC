const form = document.querySelector('.form'); //Selecionando o valor do forumlário e atribuindo a variável form

form.addEventListener('submit', function(event) { //Adicionando o evento de "escutar" ao button do form e adicionando uma função de event
    event.preventDefault(); //Alterando o funcionamento padrão do button (summit) para não enviar

    const inputPeso = event.target.querySelector('#peso'); //Selecionando o valor do input Peso e atribuindo a variável inputPeso
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value); //Alterando o padrão do valor do input de String para Number e atribuindo a variável peso
    const altura = Number(inputAltura.value);

    if (!peso) { //se o valor de peso for diferente (valor de peso for true é alterado para false)
        setResultado('Peso inválido!', false); //Mostra no resultado do HTML o texto 'Peso Inválido, contendo a flag false
        return; //Return é usado para parar o código, pois nada após o return é executado
    }

    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }
    
    const imc = getIMC(peso, altura); //Cria uma função getImc para calcular o IMC e atribuir a função IMC
    const nivelIMC = getNivelIMC(imc); //Cria uma função getNivelIMC para calcular o nivel do IMC e atribuir a função nivelIMC

    const mensagem = `Seu IMC é: ${imc} (${nivelIMC})`; //Atribuindo o valor ao atributo mensagem

    setResultado(mensagem, true); ////Setando o resultado, mas agora com a flag true para colocar a atributo true (na function setResultado)
})

function getNivelIMC(imc) { //Função para verificar a classificação do IMC
    const nivel = ['Abaixo do peso', 'Peso ideal', 'Levemente acima do peso', 'Obesidade grau I', 'Obesidade grau II (severa)', 'Obesidade grau III (mórbida)']; //Array com as classificações
 
    if (imc >= 39.9) return nivel[5]; //se o imc for >= que 40 irá retornar a classificação do index 5 do array
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getIMC(peso, altura) { //Função para calcular o imc
    const imc = peso / altura ** 2; //Atribuindo o resultado do calculo para a variável imc
    return imc.toFixed(2); //retornando o resultado com 2 casa decimais a função getIMC
}

function criarParagrafo() { //Função para criar paragrafo
    const paragrafo = document.createElement('p'); //Criando a tag p e atribuindo a variável paragrafo
    return paragrafo;   //retornando o valor para a função criarParagrafo
}

function setResultado (mensagem, isValid) { //Função para mostrar o resultado na div resultado com os atriutos mensagem e isValid 
    const resultado = document.querySelector('.resultado'); //Atribuindo o valor da div resultado a variável resultado
    resultado.innerHTML = ''; //Atribuindo o valor em branco a variável resultado

    const paragrafo = criarParagrafo(); //Atribuiu o valor da função criarPararafo a variável paragrafo

    if (isValid) { //se os valores informados pelo usuário for true, irá aplicar
        paragrafo.classList.add('paragrafo-resuldado-true'); //criar uma classe para a tag p se o resuldado for verdadeiro
    } else {
        paragrafo.classList.add('paragrafo-resultado-false'); //criar uma class para a tag p se o resultado for falso
    }

    paragrafo.innerHTML = mensagem;
    resultado.appendChild(paragrafo); //Adiciona a variavel paragrafo como filha da div com class resultado
}