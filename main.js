function tocaSomPom(idElemento) {
    document.querySelector(idElemento).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    let tecla = listaDeTeclas[i];
    let instrumento = listaDeTeclas[i].classList[1];

    let idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSomPom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if(evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}