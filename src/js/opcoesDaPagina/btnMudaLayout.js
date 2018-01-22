(function () {
    const btn = document.querySelector("#btnMudaLayout");
    const mural = document.querySelector('.mural');

    function mudaTexto() {
        if (this.textContent == 'Blocos') {
            this.textContent = 'Linhas';
        } else {
            this.textContent = 'Blocos';
        }
    }
    btn.addEventListener('click', mudaTexto);


    function mudaLayout() {
        mural.classList.toggle("mural--linha");
    }

    btn.addEventListener('click', mudaLayout);

    // Progressive Enhancement = Carregamento Progressivo (Oferecer quando tem disponível)
    btn.classList.remove('no-js');
})()


