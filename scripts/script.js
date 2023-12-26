document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const mainMenu = document.querySelector('.nav-container ul');

  if (menuIcon && mainMenu) {
      menuIcon.addEventListener('click', function () {
          mainMenu.classList.toggle('show-menu');
      });
  }
});
