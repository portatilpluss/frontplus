
document.getElementById('bell').addEventListener('click', () => {
     document.querySelector('.bell__notification').classList.toggle('bell');
});

document.addEventListener('click', (event) => {
    const bell = document.getElementById('bell');
    const notificationWindow = document.querySelector('.bell__notification');
    if (!bell.contains(event.target) && !notificationWindow.contains(event.target)) {
        notificationWindow.classList.remove('bell');
    }
});


// Selecciona todos los elementos con la clase .nav__item
const navItems = document.querySelectorAll('.nav__item');

// Agrega un evento de clic a cada elemento
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remueve la clase .active de todos los elementos
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Agrega la clase .active al elemento clickeado
        item.classList.add('active');
    });
});

const urlFull = document.getElementById('url').getAttribute('data-url');
const options = {
    method: 'GET',
    header:{
        'Content-Type': 'application/json'
    },
    credentials: 'include'

}

fetch(urlFull,options)
.then(response => response.json())
.then(data => {
    //  insertar los datos en la vista
        const name = document.getElementById('name');
        name.innerHTML = `${data.resul[0][0].name}`;
        


        const email = document.getElementById('email');
        email.innerHTML = `${data.resul[0][0].email}`;

 })

const menu = document.getElementById('menu');
const header = document.getElementById('header');
const of = document.getElementById('of');

menu.addEventListener('click',()=>{
    header.classList.toggle('on');
});

of.addEventListener('click',()=>{
    header.classList.remove('on');
    
});