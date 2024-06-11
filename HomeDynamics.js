
const mediaQuery = window.matchMedia('(max-width: 600px)');




document.addEventListener('DOMContentLoaded', () => {
    const textPORT = document.querySelector('.text-PORT');
    const textNAME = document.querySelector('.text-NAME');
    const menu = document.querySelector('.menu');

    // Aggiungi un event listener per rilevare quando la prima animazione termina
    textPORT.addEventListener('animationend', (event) => {
        if (event.animationName === 'typing-1') {

            // function handleMediaQueryChange(event) {
            //     if (event.matches)
            //     {
            //         menu.style = "display: flex;";
            //     }
            //     else
            //     {
            //         menu.style="transition-duration: 10s; display: flex;";
            //     }
            // }

            // Aggiunge un ritardo prima di iniziare la seconda animazione
            setTimeout(() => {
                textNAME.classList.add('show-NAME');
            }, 5); // Ritardo di 1 secondo
        }
    });

    

    // Aggiungi un event listener per avviare l'animazione di digitazione della seconda riga
    textNAME.addEventListener('animationstart', () => {
        textPORT.style= 'border: none;';
        // Imposta l'animazione con il ritardo desiderato
        textNAME.style.animationDelay = '0s';
    });

});
