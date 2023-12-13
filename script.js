const background = 
document.querySelector('.background');

function createBlur(){
    const blur = document.createElement('div');
    blur.classList.add('blur');
    const size = Math.random() * 50 + 10;
    blur.style.width = '${size}px';
    blur.style.height = '${size}px';
    blur.style.background = 'rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})';
    blur.style.opacity = Math.random() * 0.5 + 0.3;
    blur.style.borderRadius = '50%';
    blur.style.position = 'absolute';
    blur.style.top = '${Math.random() * 100}%';
    blur.style.left = '${Math.random() * 100}%';
    background.appendChild(blur);

    setTimeout (() => {
        blur.remove();
}, 3000);
}

setInterval(createBlur, 500);