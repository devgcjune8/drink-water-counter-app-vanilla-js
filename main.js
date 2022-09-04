const SMALL_GLASS = document.querySelectorAll('.small-glass');
const LITRO = document.querySelector('#litro');
const PCT = document.querySelector('.pct');
const REMAINS = document.querySelector('#remains');

function visualiseWaterRemaining() {
    const FULL_GLASSES = document.querySelectorAll('.small-glass.full').length

    const TOTAL_GLASSES = SMALL_GLASS.length

    if(FULL_GLASSES === 0) {
        PCT.style.visibility = 'hidden';
        PCT.style.height = 0;
    } else {
        PCT.style.visibility = 'visible'
        PCT.style.height = `${FULL_GLASSES / TOTAL_GLASSES * 300}px`;
        PCT.innerText = `${(FULL_GLASSES / TOTAL_GLASSES) * 100}%`
    } 

    if(FULL_GLASSES == TOTAL_GLASSES) {
        REMAINS.style.visibility = 'hidden';
        REMAINS.style.height = 0;
    } else {
        REMAINS.style.visibility = 'visible';
        LITRO.innerText = `${2 - (250 * FULL_GLASSES / 1000)}L`
    }

    console.log(FULL_GLASSES)
}

SMALL_GLASS.forEach((glass, num) => {
    glass.addEventListener('click', () => glassDrank(num))
})

function glassDrank(num) {
    if (SMALL_GLASS[num].classList.contains('full') && !SMALL_GLASS[num].nextElementSibling.classList.contains('full')) {
        num--
    }

    SMALL_GLASS.forEach((glass, i) => { 
        if(i <= num) {
            glass.classList.add('full')
        } else {
            glass.classList.remove('full')
        }
    })

    visualiseWaterRemaining()
}

visualiseWaterRemaining();