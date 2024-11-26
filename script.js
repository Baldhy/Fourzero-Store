const garisTiga = document.getElementById('garisTiga');
const navList = document.querySelector('.nav-list');

garisTiga.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle class 'active' pada nav-list
});

