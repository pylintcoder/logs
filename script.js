const logs = document.querySelector('.logs');
const loginLink = document.querySelector('.return');
const registerLink = document.querySelector('.signup');
const logButt = document.querySelector('.login');
const closeIcon = document.querySelector('.close');

registerLink.addEventListener('click', ()=> {
    logs.classList.add('active'); 
});

loginLink.addEventListener('click', ()=> {
    logs.classList.remove('active'); 
});

logButt.addEventListener('click', ()=> {
    logs.classList.add('active-popup'); 
});

closeIcon.addEventListener('click', ()=> {
    logs.classList.remove('active-popup'); 
});