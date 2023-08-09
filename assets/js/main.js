// 마우스 커서 
const cursor = document.querySelector('.cursor'); 

// 커서 이동
document.addEventListener('mousemove',(e) => { 
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
    cursor.animate({
        top : `${e.clientY}px`, left : `${e.clientX}px`
    },1000)
});
// 마우스 클릭
document.addEventListener('mousedown',()=>{ 
    cursor.classList.add('clicked'); 
});
document.addEventListener('mouseup',()=>{ 
    cursor.classList.remove('clicked'); 
});
// 링크 hover
let links = document.querySelectorAll('a');
links.forEach(i=>{
    i.addEventListener('mouseover',()=>{ 
        cursor.classList.add('pointer'); 
    });
    i.addEventListener('mouseout',()=>{ 
        cursor.classList.remove('pointer'); 
    });
})
// 버튼 hover
let btns = document.querySelectorAll('button');
btns.forEach(i=>{
    i.addEventListener('mouseover',()=>{ 
        cursor.classList.add('pointer'); 
    });
    i.addEventListener('mouseout',()=>{ 
        cursor.classList.remove('pointer'); 
    });
})


// 메뉴 열고 닫기 
$('#gnbToggle').click(()=>{
    $('#gnbToggle').toggleClass('open');
    $('#gnbToggle').toggleClass('close');
    $('.header').toggleClass('open');
    $('.gnb-wrapper').toggleClass('open');
    $('body').toggleClass('dimmed');
})

// 메뉴 링크 클릭시 닫기 
$('.nav').click((e)=>{
    $('#gnbToggle').toggleClass('open');
    $('#gnbToggle').toggleClass('close');
    $('.header').toggleClass('open');
    $('.gnb-wrapper').toggleClass('open');
    $('body').toggleClass('dimmed');
})

// 인트로 
const intro = gsap.timeline();
intro
    .from(".sc-intro ",{backgroundColor:"#000", delay:0.5, duration:0.6})
    .addLabel('a')
    .from(".sc-intro .sub-text",{autoAlpha:0, x:200, duration:0.5},'a')
    .from(".sc-intro .main-text",{autoAlpha:0, x:-200, duration:0.5},'a')
    .from(".sc-intro .mini-text",{autoAlpha:0, y:50, rotate:10, delay:0.5,duration:0.4},'a')
    .from(".sc-intro .img-box",{autoAlpha:0, y:50,duration:0.2},)
    .from(".sc-intro .line",{opacity:0, y:-50})
ScrollTrigger.create({
    animation: intro,
    trigger: ".sc-intro",
    start: "top 20%",
    scrub: false,
    pin: false,
    markers: false
});

// 그레인 애니메이션
var options = {
    animate: true,
    patternWidth: 200,
    patternHeight: 200,
    grainOpacity: 0.04,
    grainDensity: 2,
    grainWidth: 3,
    grainHeight: 3
  };

grained("#home", options);

// 로켓 패럴랙스 효과
const rocket = gsap.timeline();
rocket
    .fromTo(".sc-intro .img-box img",{yPercent:10},{yPercent:-10});

ScrollTrigger.create({
    animation: rocket,
    trigger: ".sc-intro .img-box",
    start: "-30% 50%",
    end:"+=700",
    scrub: true,
    pin: false,
    markers: false,
});
// 틸트 효과
$('.mini-text').tilt({
    glare: false,
    maxTilt: 20,
    perspective: 1500, 
    scale: 1,   
    speed: 400,  
    disableAxis: null,  
    reset: true, 
});



// body theme 변경
ScrollTrigger.create({
    trigger: ".sc-about",
    start: "top 60%",
    onEnter:()=>{
        $('body').addClass('dark');
        $('.header').addClass('white');
    },
    onLeaveBack:()=>{
        $('body').removeClass('dark');
        $('.header').removeClass('white');
    }
});

$('.code').tilt({
    glare: true,
    maxGlare: .2,
    maxTilt: 20,
    perspective: 1500, 
    scale: 1,   
    speed: 400,  
    disableAxis: null,  
    reset: true, 
});



// 커서 이동시 이미지박스 함께 이동
document.addEventListener('mousemove',(e) => { 
    cursorImgBox.style.top = `${e.clientY}px`
    cursorImgBox.style.left = `${e.clientX}px`
    cursorImgBox.animate({
        top : `${e.clientY}px`, left : `${e.clientX}px`
    },2000)
});

// 프로젝트 호버시 마우스 이미지 변경
let cursorImgBox = document.querySelector('.cursor .img-box');
let workLinks = document.querySelectorAll('.work-item a:first-child');

workLinks.forEach(i=>{
    imageUrl = $(i).attr('data-img');
    let cursorImg = document.querySelector(`${imageUrl}`);

    i.addEventListener('mouseover',()=>{ 
        cursorImgBox.classList.add('on');
        cursorImg.classList.add('on');

        // cursorImg.style.backgroundImage = "url("+imageUrl+")"
    });
    i.addEventListener('mouseout',()=>{ 
        cursorImgBox.classList.remove('on');
        cursorImg.classList.remove('on');
    });
})


grained("#grain-bg", options);


// contact
const contact = gsap.timeline();
contact
    .to(".sc-contact .group-display",{autoAlpha:1})
ScrollTrigger.create({
    animation:contact,
    trigger: ".sc-contact",
    start: "top 100%",
    end:"top top",
    scrub:true,
});