; (function () {
    const $btn = $("#btnSync");
    $btn.removeClass("botaoSync--sincronizado")
    
    $btn.click(function () {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://ceep.herokuapp.com/cartoes/salvar/")
        xhr.setRequestHeader("Content-Type", "application/json");
        const objeto = {
            usuario: "Renan",
            cartoes: listaCartao
        }
        xhr.send(JSON.stringify(objeto));
        $btn.addClass("botaoSync--esperando")

        xhr.addEventListener("load", function () {
            const response = JSON.parse(xhr.response)
            $btn.removeClass("botaoSync--esperando")
            $btn.removeClass("botaoSync--deuRuim")                        
            $btn.addClass("botaoSync--sincronizado")
        })
        xhr.addEventListener("error", function () {
            $btn.removeClass("botaoSync--esperando")
            $btn.removeClass("botaoSync--sincronizado")            
            $btn.addClass("botaoSync--deuRuim")
        })
    })


    $btn.removeClass('no-js');
})();