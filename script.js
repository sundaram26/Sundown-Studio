// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


//on hover div appearing

document.addEventListener('DOMContentLoaded', ()=>{
    const imgArray = ["./images/01image.jpg",  "./images/02image.jpg", "./images/03image.jpg", "./images/06image.jpg"];
    const elem = document.querySelectorAll('.elem');
    const imageContainerImg = document.querySelector('.image-container-img');
    const image = imageContainerImg.querySelector('img');

    elem.forEach(el => {
        el.addEventListener('mouseover', ()=>{
            const img = el.getAttribute('img');
            if(imgArray[img]){
                imageContainerImg.style.display = 'block';
                
                image.style.display = 'block';
                image.src = imgArray[img];
            }
        })
        el.addEventListener('mouseout', ()=>{
            const img = el.getAttribute('img');
            if(imgArray[img]){
                imageContainerImg.style.display = 'none';
                image.style.display = 'none';
                image.src != imgArray[img]
            }
        })
    })
    const videoArray = ["./images/04video-container.mp4", "./images/05video-container.mp4", "./images/07video-container.mp4"]
    const imageContainerVideo = document.querySelector('.image-container-video');
    const video = imageContainerVideo.querySelector('video');
    elem.forEach(el => {
        el.addEventListener('mouseover', ()=>{
            const vid = el.getAttribute('vid');
            if(videoArray[vid]){
                imageContainerVideo.style.display = 'block';
                video.style.display= 'block';
                video.src = videoArray[vid];
            }
        })
        el.addEventListener('mouseout', ()=>{
            const vid = el.getAttribute('vid');
            if(imgArray[vid]){
                imageContainerVideo.style.display = 'none';
                video.style.display = 'none';
                video.src != videoArray[vid]
            }
        })
    })

})



//black-box features
const colorFont = document.querySelector('.headings')
const colorFontHeadings = colorFont.querySelectorAll('h1')
const line = document.querySelector('.line')
const linePart = document.querySelector('.line-part')
const rightBlackBox = document.querySelector('.right-black-box')
const rightBlackBoxImg = rightBlackBox.querySelector('img')
const leftBlackBoxPara = document.querySelector('.bottom-left').querySelector('p')

function colorChange(element){
    
    colorFontHeadings.forEach(el =>{
        el.style.color = "#8a7e6e"
    })
    element.style.color = '#EFEAE3'
    const headNumber = element.getAttribute('head')
    console.log(headNumber)
    if(headNumber == 0){
        line.style.alignItems = 'start'
        // console.log("hello")
        rightBlackBoxImg.src = "./images/01black-box.jpg"
        leftBlackBoxPara.textContent = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    }
    else if(headNumber == 1){
        line.style.alignItems = 'center'
        rightBlackBoxImg.src = "./images/02black-box.jpg"
        leftBlackBoxPara.textContent = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    }
    else{
        line.style.alignItems = 'end'
        rightBlackBoxImg.src = "./images/03black-box.jpg"
        leftBlackBoxPara.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    }
}
colorFontHeadings.forEach(ele =>{
    ele.addEventListener('click', ()=>{
        colorChange(ele)
    })
})



function swiperAnimation(){
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
}

swiperAnimation()


// const cursorStyle = document.querySelector('.swiper-box')
// console.log(cursorStyle)
document.addEventListener('DOMContentLoaded', function() {
    let cursor = document.querySelector('.cursor');
  
    document.addEventListener('mousemove', function(e) {
        cursor.style.top = (e.clientY - cursor.offsetHeight / 2) + 'px';
        cursor.style.left = (e.clientX - cursor.offsetWidth / 2) + 'px';
    });
  
    const cursorStyle = document.querySelector('.swiper-container');
  
    cursorStyle.addEventListener('mouseenter', function() {
        cursor.style.opacity = 1;
    });
  
    cursorStyle.addEventListener('mouseleave', function() {
        cursor.style.opacity = 0;
    });
});