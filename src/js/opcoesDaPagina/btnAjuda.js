;(function(){
    const $btnAjuda = document.querySelector('#btnAjuda');

    $btnAjuda.addEventListener('click', () => {
        // const ajudas = [{msg: 'Você pode add cartão', cor: 'lime'},
        //                 {msg: 'Remover cartão', cor: 'gray'},
        //                 {msg: 'Mudar a cor', cor: 'gray'},
        //                 {msg: 'Arrumar a coluna', cor: 'gray'}]

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://ceep.herokuapp.com/cartoes/instrucoes");

        //Assíncrono
        xhr.send();

        xhr.responseType = "json";

        xhr.addEventListener("load", function(){
            const ajudas = xhr.response.instrucoes;
            ajudas.reverse().forEach(ajuda => criarCartao(ajuda))

        })

        
        
        })
        
        
        
    $btnAjuda.classList.remove('no-js');
})()