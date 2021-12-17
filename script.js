const scrollBtn = document.querySelector('.top');

const refreshBtnVisibility = () => {
    if(document.documentElement.scrollTop <= 50) {
        scrollBtn.style.display='none';
    }else{
        scrollBtn.style.display = 'block';
    }
};

refreshBtnVisibility();

scrollBtn.addEventListener('click',  () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener('scroll', (e) => {
    refreshBtnVisibility();
});
