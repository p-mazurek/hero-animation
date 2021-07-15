console.log('hello :)')
const navButton = document.querySelector('.nav-button')
const navOpen = document.querySelector('.nav-open')

const tl = new TimelineLite({
    paused: true,
    reversed: true
});
tl.to('.cover', 1, {
    width: '60%',
    ease: Power2.easeOut
}).to('nav', 1, {
    height: '100%',
    ease: Power2.easeOut
}, "-=0.3").fromTo('.nav-open', .5, {
    x: 50,
    opacity: 0,
    ease: Power2.easeOut
}, {
    x: 0,
    opacity: 1,
    onComplete: function () {
        navOpen.style.pointerEvents = 'auto';
    }
})
navButton.addEventListener('click', () => {
    toggleMenu(tl)

})

function toggleMenu(tl) {
    tl.reversed() ? tl.play() : tl.reverse();
}