document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.hero__menu-btn');
    const menuList = document.querySelector('.menu__list');
    const heroContent = document.querySelector('.hero__content');

    const menuBtnIcon = menuBtn.querySelector('.fas');

    function closeMenu() {
        menuList.classList.remove('menu__list--active');
        heroContent.classList.remove('hero__content--hidden');

        document.body.style.overflow = '';
        
   
        menuBtnIcon.classList.remove('fa-rotate-270');
        menuBtnIcon.classList.add('fa-rotate-90');
        console.log(menuBtnIcon)
    }

    function toggleMenu() {
        const isMenuActive = menuList.classList.toggle('menu__list--active');
        heroContent.classList.toggle('hero__content--hidden');


    
        if (isMenuActive) {

            menuBtnIcon.classList.remove('fa-rotate-90');
            menuBtnIcon.classList.add('fa-rotate-270');
            document.body.style.overflow = 'hidden';
        } else {
      
            menuBtnIcon.classList.remove('fa-rotate-270');
            menuBtnIcon.classList.add('fa-rotate-90');
            document.body.style.overflow = '';
        }
    }


    menuBtn.addEventListener('click', function(event) {
        event.stopPropagation(); 
        toggleMenu();
    });


    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });


    const allButtons = document.querySelectorAll('button, .button, [type="button"], [type="submit"]');
    allButtons.forEach(button => {
        button.addEventListener('click', closeMenu);
    });


    window.addEventListener('resize', function () {
        if (window.innerWidth >= 640) {
            closeMenu();
        }
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menuList.contains(event.target);
        const isClickOnMenuBtn = menuBtn.contains(event.target);
        
        if (menuList.classList.contains('menu__list--active') &&
            !isClickInsideMenu &&
            !isClickOnMenuBtn) {
            closeMenu();
        }
    });


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menuList.classList.contains('menu__list--active')) {
            closeMenu();
        }
    });
});