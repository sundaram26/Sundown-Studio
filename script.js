const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


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

