function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio)

   if (elemento != null && elemento.localName == 'audio') {
        elemento.play()
   } else {
    console.log('Elemento não encontrado ou seletor inválido')
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

/*let contador = 0

//Estrutura de repetição while

// while = Enquanto 
while (contador < listaDeTeclas.length ) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}` // Template string

    //console.log(idAudio)

    //'#som_{instrumento}'
    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    contador = contador + 1

    //console.log(contador)
} */


// for=Para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}` // Template string

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.oncKeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onKeyup = function () {
        tecla.classList.remove('ativa')
    }
}