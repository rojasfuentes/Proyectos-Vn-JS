const smallCups = document.querySelectorAll('.cup-small')
const litros = document.getElementById('litros')
const porcentaje = document.getElementById('porcentaje')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=> highlightCups(idx))
})

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallCups.forEach((cup, idx2) =>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups= smallCups.length

    if(fullCups == 0){
        porcentaje.style.visibility = 'hidden'
        porcentaje.style.height = '0'
    }else{
        porcentaje.style.visibility = 'visible'
        porcentaje.style.height = `${fullCups / totalCups * 330}px`
        porcentaje.innerText= `${fullCups/ totalCups * 100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility= 'hidden'
        remained.style.height= 0
    }else{
        remained.style.visibility= 'visible'
        litros.innerText= `${2- (250 * fullCups /1000)} L`
    }
}