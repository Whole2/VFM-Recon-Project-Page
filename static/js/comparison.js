// Image comparison slider for all cmp-container elements
const cmpContainers = document.querySelectorAll('.cmp-container');
cmpContainers.forEach(container => {
    const slider = container.querySelector('.cmp-slider');
    let active = false;
    container.addEventListener('mouseenter', function(){
        active = true;
        slider.classList.add('sliding');
    });
    container.addEventListener('mouseleave', function(){
        active = false;
        slider.classList.remove('sliding');
    });
    container.addEventListener('mousemove', function(e){
        if(active){
            x = e.clientX - container.getBoundingClientRect().left;
            move(x);
        }
    });
    
    function move(x){
        x = Math.max(0, Math.min(x, container.offsetWidth));
        container.querySelector('.top').style.width = x + 'px';
        slider.style.left = x - 15 + 'px';
    }
});

function preloadImage(src) {
    const img = new Image();
    img.src = src;
    img.onload = () => console.log(`${src} loaded successfully`);
    img.onerror = () => {
        console.error(`Failed to load ${src}, retrying...`);
        setTimeout(() => preloadImage(src), 1000);
    };
}

function changeImages(event, cmpId, imgSrc1, imgSrc2) {
    const cmpContainer = document.getElementById(cmpId);
    if (!cmpContainer) return;
    
    const topImg = cmpContainer.querySelector('.top img');
    const bottomImg = cmpContainer.querySelector('.bottom img');
    if (!topImg || !bottomImg) return;
    topImg.src = imgSrc1;
    bottomImg.src = imgSrc2;
    
    const buttonContainer = event.target.parentElement;
    const buttons = buttonContainer.querySelectorAll('.cmp-button');
    buttons.forEach(button => {
        button.classList.remove('cmp-btn-checked');
    });
    event.target.classList.add('cmp-btn-checked');
}
