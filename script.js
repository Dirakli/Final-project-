

let navigationWraper = document.getElementById('navigationBlock');
let burger = document.getElementById('BurgerIcon');

burger.addEventListener('click',function() {
    navigationWraper.classList.toggle('active');
})