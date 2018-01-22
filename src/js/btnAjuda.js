;(function(){
    const $btnAjuda = document.querySelector('#btnAjuda');

    $btnAjuda.addEventListener('click', () => {
        const ajudas = [{msg: 'Você pode add cartão', cor: 'lime'},
                        {msg: 'Remover cartão', cor: 'gray'},
                        {msg: 'Mudar a cor', cor: 'gray'},
                        {msg: 'Arrumar a coluna', cor: 'gray'}]

            ajudas.reverse().forEach(ajuda => criarCartao(ajuda.msg, ajuda.cor))
        
        
        })
        
        
        
    $btnAjuda.classList.remove('no-js');
})()