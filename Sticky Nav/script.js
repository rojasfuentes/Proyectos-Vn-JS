const _nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY > _nav.offsetHeight + 150){
        _nav.classList.add('active')
    } else{
        _nav.classList.remove('active')
    }
}