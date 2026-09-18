const slides=[...document.querySelectorAll('.slide')];const pagination=document.querySelector('.slider-pagination');let current=0,timer;
slides.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',`Go to slide ${i+1}`);b.addEventListener('click',()=>go(i,true));pagination.appendChild(b)});const dots=[...pagination.children];
function go(i,user=false){slides[current].classList.remove('active');dots[current].classList.remove('active');current=(i+slides.length)%slides.length;slides[current].classList.add('active');dots[current].classList.add('active');if(user)restart()}
function restart(){clearInterval(timer);timer=setInterval(()=>go(current+1),6500)}dots[0].classList.add('active');restart();document.querySelector('.next').onclick=()=>go(current+1,true);document.querySelector('.prev').onclick=()=>go(current-1,true);
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(current+1,true);if(e.key==='ArrowLeft')go(current-1,true)});
let sx=0;const slider=document.querySelector('.hero-slider');slider.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});slider.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>45)go(current+(dx<0?1:-1),true)},{passive:true});

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.18});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
