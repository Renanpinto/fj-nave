(function () {
    const formulario = document.querySelector(".formNovoCartao");

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const $campoDeConteudo = document.querySelector('.formNovoCartao-conteudo');
        const conteudo = $campoDeConteudo.value.trim();


        if (!conteudo) {
            const $msgErro = document.createElement('div');
            
            $msgErro.classList.add('formNovoCartao-msg');
            $msgErro.textContent = 'Formulário inválido. Não digite vários nada!!!!';

            document.querySelector('.formNovoCartao-salvar').insertAdjacentElement('beforebegin', $msgErro);
            $msgErro.addEventListener('animationend', function () {
                $msgErro.remove()
            })
        } else {
            criarCartao(conteudo);
        }
        $campoDeConteudo.value = ''

    })
    formulario.classList.remove('no-js');
})()