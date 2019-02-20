const btnUp = document.getElementById('button_up');

window.onscroll = function () {
    const scrollY = window.pageYOffset;
    const heightWindow = window.innerHeight;
    const widthWindow = window.innerWidth;
    if(widthWindow > 960 && scrollY > heightWindow){
        btnUp.classList.add('active');
    }
    else{
        btnUp.classList.remove('active');
    }
};