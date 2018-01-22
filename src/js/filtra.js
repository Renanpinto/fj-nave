(function () {
    const busca = document.querySelector("#busca");
    busca.addEventListener('input', function () {
        const cartoes = document.querySelectorAll(".cartao-conteudo");
        for (let cartao of cartoes) {
            var compara = cartao.textContent.substr(0, busca.value.length);
            if (busca.value.length !== 0) {
                if (busca.value.toUpperCase() != compara.toUpperCase()) {
                    cartao.parentNode.classList.add('some');
                } else {
                    cartao.parentNode.classList.remove('some');
                }
            } else {
                cartao.parentNode.classList.remove('some');
            }
        }

    })

    busca.classList.remove('no-js');
})();