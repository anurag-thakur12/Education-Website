function open(){
    let a = document.getElementsByClassName('nav');
    if(a.className==='nav'){
        a.className +=' responsive'
    }
}

// banner js.................................................

let slideIndex = 0;
slide(slideIndex);

// function sClick(n){
//     slide(slideIndex +=n);
// }

function slide(){
    let i;
    let slides = document.getElementsByClassName('slide');
    for(i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = 'block';
    setTimeout(slide,2000);
}

// review js...............................................

function animate(obj,initVal, lastVal, duration){
    let startTime = null;

    const step = (currentTime) =>{
        if (!startTime){
            startTime = currentTime;
        }

        const progress = Math.min((currentTime - startTime)/duration,1);

        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        if(progress < 1){
            window.requestAnimationFrame(step);
        }else{
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }

    };

    window.requestAnimationFrame(step);
}

let text1 = document.getElementById('partner');
let text2 = document.getElementById('courses');
let text3 = document.getElementById('client');
let text4 = document.getElementById('achievement');

const load = () =>{
    animate(text1, 0, 11, 7000);
    animate(text2, 0, 20, 7000);
    animate(text3, 0, 1000, 7000);
    animate(text4, 0, 15, 7000);
}

// top button....................................................................

let button = document.getElementById('top');

window.onscroll  = function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        button.style.display = 'block';
    }
    else{
        button.style.display = 'none';
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}