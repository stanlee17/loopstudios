const navigation = document.querySelector('.navigation')
const navigationLinks = document.querySelector('.navigation-links')
const hamburger = document.querySelector('.navigation-hamburger')

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('navigation-mobile')
  navigationLinks.classList.toggle('navigation-links-mobile')
})
