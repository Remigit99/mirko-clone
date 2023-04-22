
const openNav = document.querySelector('.open__btn');
const closeNav = document.querySelector('.close__btn');
const menuItems = document.querySelector('.menu__links');

console.log(closeNav);

openNav.addEventListener('click', () => {
    menuItems.style.display = 'flex';
    openNav.style.display = 'none'
    closeNav.style.display = 'block'

})

closeNav.addEventListener('click', () => {
    menuItems.style.display = 'none';
    openNav.style.display = 'block'
    closeNav.style.display = 'none'
})