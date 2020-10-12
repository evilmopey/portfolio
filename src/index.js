import './css/style.scss'
import './css/query.scss'
import './img/cloud-mountain.jpg'
import './img/panda.jpg'
import './img/tie.jpg'
import './img/doge.jpg'
import './img/favicon.png'
import 'animate.css' 
import Glide from '@glidejs/glide'


let glide = new Glide('#showcase', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    autoplay: 2000,
    swipeThreshold: 55,

    
});
glide.mount();
var header = document.getElementById('id');
var stickpoint = header.offsetTop;
window.addEventListener('scroll',function(){
    if ((window.pageYOffset >= stickpoint)){

        header.classList.add('sticky');
    } else if ((window.pageYOffset < stickpoint)) {
        header.classList.remove('sticky');
       
    }
});

var year = new Date().getFullYear();
var date =`&copy; EtherealCoder ${year}`
document.getElementById('copyright').innerHTML = date;