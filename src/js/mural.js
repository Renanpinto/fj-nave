; (function () {


    let contador = document.querySelectorAll('.cartao').length;

    const listaCartao =[]

    function criarCartao({conteudo, cor}) {
        listaCartao.push({conteudo, cor})
        contador++;
        const $mural = $('.mural');
        const $tpl = document.createElement('tpl');
        const $cartao = $(`<article style="background-color:${cor}" id="cartao_${contador}" class="cartao" tabindex="0">
        <div class="opcoesDoCartao ">
          <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg>
              <use xlink:href="#iconeRemover"></use>
            </svg>
          </button>
  
          <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" ${cor ? '' : 'checked'}>
          <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
          </label>
  
          <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
          <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
          </label>
  
          <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
          <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
          </label>
  
          <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
          <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
          </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
      </article>`);

        //   $cartao = $tpl.querySelector(".cartao")
        $cartao.on('focusin', function () {
            $cartao.addClass('cartao--focado');
        })

        $cartao.on('focusout', function () {
            $cartao.removeClass('cartao--focado');
        })

        //Delegate:
        $cartao.on('change', '.opcoesDoCartao-radioTipo', function (event) {
            const $elementoAtual = $(event.target);
            const novaCor = $elementoAtual.val();


            $cartao.css('background', novaCor);
        })

        $cartao.on('keypress', function (event) {
            const $elementoAtual = $(event.target);
            const isLabel = $elementoAtual.hasClass("opcoesDoCartao-opcao");
            if (isLabel && (event.key === 'Enter' || event.key === ' ')) {
                $elementoAtual.click();
            }
        })

        $cartao.on('click', function (event) {
            const $elementoAtual = $(event.target);
            const isRemove = $elementoAtual.hasClass("opcoesDoCartao-remove");
            if (isRemove) {
                $cartao.addClass("cartao--somePeixinho");
                $cartao.on("transitionend", function () {
                    $cartao.remove();
                })
            }
        })
        $mural.prepend($cartao);

    }
    window.criarCartao = criarCartao;
    window.listaCartao = listaCartao;
    const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://ceep.herokuapp.com/cartoes/carregar/?usuario=renan");

        //Assíncrono
        xhr.send();

        xhr.responseType = "json";

        xhr.addEventListener("load", function(){
            const ajudas = xhr.response.cartoes;
            ajudas.reverse().forEach(ajuda => criarCartao(ajuda))

        })
})();