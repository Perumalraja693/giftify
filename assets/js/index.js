// Toggle button icon swap 
const button = document.getElementById('toggleButton');
const buttonIcon = document.getElementById('buttonIcon');
const sidebarDrawer = document.getElementById('sidebarDrawer');

sidebarDrawer.addEventListener('shown.bs.offcanvas', () => {
    buttonIcon.classList.remove('fa-bars');
    buttonIcon.classList.add('fa-times');
});

sidebarDrawer.addEventListener('hidden.bs.offcanvas', () => {
    buttonIcon.classList.remove('fa-times');
    buttonIcon.classList.add('fa-bars');
});
   

