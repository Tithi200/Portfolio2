const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})

const cursorParticles = document.querySelector('.cursor-particles');

document.addEventListener('mousemove', function(e) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Set initial position to cursor
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    
    cursorParticles.appendChild(particle);

    // Animate particle with GSAP
    gsap.to(particle, {
        x: "+=" + (Math.random() * 50 - 25), // random spread
        y: "+=" + (Math.random() * 50 - 25),
        opacity: 0,
        scale: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => particle.remove() // remove element after animation
    });
});
