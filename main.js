let linkTwo = document.querySelector('.link')

linkTwo.addEventListener('mouseover', function() {
    let animInner = document.querySelector('.anim-inner')
    animInner.classList.add('anim-switch-on')
    animInner.classList.remove('anim-switch-off')
})
linkTwo.addEventListener('mouseout', function() {
    let animInner = document.querySelector('.anim-inner')
    animInner.classList.add('anim-switch-off')
    animInner.classList.remove('anim-switch-on')
})