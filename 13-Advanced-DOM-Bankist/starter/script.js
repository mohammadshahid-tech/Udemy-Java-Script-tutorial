'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




///////////////////////////////////////////
//learn more scroll smooth
//Button Scrolling
btnScrollTo.addEventListener('click',function(e){
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  // console.log('Current Scroll (X/Y)',window.scrollX,scrollY);

  // console.log('Height/Width viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);

  // window.scrollTo(s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY)

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth"
  // })

  section1.scrollIntoView({behavior:'smooth',block:'start'})
})

///////////////////////////////////////////
///////////////////////////////////////////

//Page Navigation
 document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click',function(e){
    e.preventDefault();
    const id = this.getAttribute('href')
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  })
 })
///////////////////////////////////////////

 /////////////////////////////////////////////////////////////////////////////////////
//Tabbed Component

const tabs=document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');
//Guard Clause
if (!clicked) return
console.log(clicked);

//Active tab
tabs.forEach(t=>t.classList.remove('operations__tab--active'));
tabsContent.forEach(c=>c.classList.remove('operations__content--active'))
//Active tab
clicked.classList.add('operations__tab--active')

//Activate Content Area
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

 /////////////////////////////////////////////////////////////
 // 
 //Menu Fade Animation
const nav = document.querySelector('.nav');

const handleHover = function(e){
 if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    })
    logo.style.opacity=this
  }
}

//passing "argument" into handler

nav.addEventListener('mouseover',handleHover.bind(0.5))
nav.addEventListener('mouseout',handleHover.bind(1))

// const nav = document.querySelector('.nav');

// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img')

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 0.5;
//     })
//     logo.style.opacity=0.5
//   }
// })

// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img')

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     })
//     logo.style.opacity=1
//   }
// })
 ////////////////////////
//Sticky Navigation
const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
window.addEventListener('scroll',function(){
 

  if(this.window.scrollY>initialCoords.top){
    nav.classList.add('sticky')
  }else{
    nav.classList.remove('sticky')

  }
})
////////////////////////////////////////
//Sticky navigation :Intersecting Observer API

// const obsCallback=function(entries,observer){
//   entries.forEach(entry=>{
//     console.log(entry);
//   })
// }

// const obsOptions={
//   root:null,
//   threshold:0.1
// }

// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section1)
const header = document.querySelector('.header')
const stickyNav = function(entries){
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting)nav.classList.add('sticky');
  else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
   rootMargin:'-90px'
})
headerObserver.observe(header)
////////////////////////////////////////
// Reveal Section


const allSections=document.querySelectorAll('.section');
const revealSection =function(entries,observer){
// const [entry] =entries;
entries.forEach(entry=>{
if(!entry.isIntersecting)return;
entry.target.classList.remove('section--hidden')
observer.unobserve(entry.target)
})

}

const sectionObserver =new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,

})

allSections.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
})
//////////////////////////////////////
//Lazy Loading Image
const imgTargets=document.querySelectorAll('img[data-src]');

const loadImg=function(entries,observer){
  const [entry]=entries;
  console.log(entry);
  if(!entry.isIntersecting)return;
  // replace src with data-src
  entry.target.src=entry.target.dataset.src

  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target)
}
const imgObserver =new IntersectionObserver(loadImg,{
root:null,
threshold:1.0,
rootMargin:'200px'
})

imgTargets.forEach(img=>imgObserver.observe(img))

//-------------------------------------------------------------------------

// const imageBlurrAll = document.querySelectorAll('.features__img');

//  const imgObserver=new IntersectionObserver(function(entries,observer){
// entries.forEach(entry=>{
//   if(!entry.isIntersecting)return;
// entry.target.src=entry.target.dataset.src

//     entry.target.addEventListener('load',function(){
//     entry.target.classList.remove('lazy-img')
//   })
//   observer.unobserve(entry.target)
// })
//  },{
// root:null,
//   threshold:1.0,
//  })

// imageBlurrAll.forEach(img=>{
  
//   img.classList.add('lazy-img')
//     imgObserver.observe(img);
// })
//////////////////////////////////////////////////

//Slider
const slides=document.querySelectorAll('.slide')
const slider=document.querySelectorAll('.slider')

const btnLeft=document.querySelector('.slider__btn--left')
const btnRight=document.querySelector('.slider__btn--right')

let curSlide = 0;


slides.forEach((s,i)=>(s.style.transform=`translateX(${100*i}%)`))
btnRight.addEventListener('click',function(){
  curSlide++
})

///////////////////////////////////
//determine what element originated the event
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   e.preventDefault();
//   //matching strategy
//   if(e.target.classList.contains('nav__link')){
//     const id=e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior:'smooth'
//     })
//   }
// })
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allsections = document.querySelectorAll('.section')
console.log(allsections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and Inserting elements
//.insertAdjecentHtml

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message)
// header.append(message)
// header.append(message.cloneNode(true))
// header.before(message)
// header.after(message)

//Delete Element
document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  // message.remove();
  message.parentElement.removeChild(message)
})

//Styles
message.style.backgroundColor='#37383d'
message.style.width = '120%'
console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =Number.parseFloat(getComputedStyle(message).height,10) +30+'px';

console.log(message.style.height);

// document.documentElement.style.setProperty('--color-primary','orangered')


//ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt);
console.log(logo.classList);
console.log(logo.id);
logo.alt = 'Beautiful Minimalist logo'
//Non standard
// console.log(logo.designer);
console.log(logo.getAttribute('designer'))
logo.setAttribute('company','Bamkist')

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link =document.querySelector('.twitter-link')
console.log(link.href);
console.log(link.getAttribute('href'));

logo.classList.add('a','v')
 logo.classList.remove('a')
 console.log(logo.classList.contains('v')); 
 logo.classList.toggle('v')

console.log(logo);

 */
/*

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click',function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y)',window.scrollX,scrollY);

  // console.log('Height/Width viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);

  // window.scrollTo(s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY)

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth"
  // })

  section1.scrollIntoView({behavior:'smooth',block:'start'})
})

// Catching and Bubbling 

const randomInt=(min,max)=> Math.floor(Math.random()*(max - min + 1) + min);
const randomColor=()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`

document.querySelector('.nav__link').addEventListener('click',function(e){
this.style.backgroundColor = randomColor();
console.log(e.currentTarget===this);
  console.log('Nav link',e.target,e.currentTarget);
//stop propagation
// e.stopPropagation()
})
document.querySelector('.nav__links').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor();
  console.log('Container',e.target,e.currentTarget);
})
document.querySelector('.nav').addEventListener('click',function(e){
this.style.backgroundColor = randomColor();
  console.log('Nav',e.target,e.currentTarget);
}
,false)
 */


