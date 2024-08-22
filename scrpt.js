function toggleMenu() { 
    const menu = document.querySelector('.list'); 
    const menuBtn = document.querySelector('.menu-btn'); 
    menu.classList.toggle('active'); // تبديل إظهار وإخفاء القائمة 
    menuBtn.classList.toggle('active'); // تبديل حالة زر القائمة 
} 
