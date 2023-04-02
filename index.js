const btnInfo = document.getElementById('btn-info');

btnInfo.addEventListener('click', function () {
    alert('Este formulário é para cadastro de candidatos interessados em vagas de emprego. Por favor, preencha todos os campos obrigatórios e forneça informações precisas e atualizadas. Obrigado!');
});

const formulario = document.querySelector('#formulario');
const tableCadastrosBody = document.querySelector('#table-cadastros-body');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    // Verificar se todos os campos foram preenchidos
    const nome = formulario.elements['nome'].value;
    const sobrenome = formulario.elements['sobrenome'].value;
    const sexo = formulario.elements['sexo'].value;
    const areaInteresse = formulario.elements['area-interesse'].selectedOptions;
    const motivacao = formulario.elements['motivacao'].value;

    if (nome === '' || sobrenome === '' || sexo === '' || areaInteresse.length === 0 || motivacao === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Exibir um alerta de confirmação
    if (confirm('Você preencheu tudo corretamente e é sua última resposta?')) {
        // Criar um novo elemento de lista com as informações do cadastro
        const novoCadastro = document.createElement('tr');
        novoCadastro.innerHTML = 
            `<td>${nome}</td>
            <td>${sobrenome}</td>
            <td>${sexo}</td>
            <td>${Array.from(areaInteresse).map(opcao => opcao.value).join(', ')}</td>
            <td>${motivacao}</td>`;

        // Adicionar o novo elemento à lista de cadastros
        tableCadastrosBody.appendChild(novoCadastro);

        // Limpar o formulário
        formulario.reset();
    }
});