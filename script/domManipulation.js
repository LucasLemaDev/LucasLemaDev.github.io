const mouseShadow = document.querySelector('.mouse-shadow')
window.addEventListener('mousemove', (event) => {
    mouseShadow.style.top = event.y -400 + 'px'
    mouseShadow.style.left = event.x -400 + 'px'
})

document.querySelector('.main').addEventListener('scroll', handleLinkAnimation)

function handleLinkAnimation (event){
    console.log(event.target.scrollTop)
    const aboutMaxArea = 706
    const experienceMaxArea = 1800
    const classArea = 'content-area'

    const aboutLink = document.querySelector('[href^="#sobre"]')
    const experienceLink = document.querySelector('[href^="#experience"]')
    const formationLink = document.querySelector('[href^="#formation"]')

    var scrollPosition = event.target.scrollTop
    if(scrollPosition < aboutMaxArea){
        aboutLink.classList.add(classArea)
        experienceLink.classList.remove(classArea)
        formationLink.classList.remove(classArea)
    }else if(scrollPosition >= aboutMaxArea && scrollPosition < experienceMaxArea){
        aboutLink.classList.remove(classArea)
        experienceLink.classList.add(classArea)
        formationLink.classList.remove(classArea)
    }else if( scrollPosition >= experienceMaxArea){
        aboutLink.classList.remove(classArea)
        experienceLink.classList.remove(classArea)
        formationLink.classList.add(classArea)
    }
}