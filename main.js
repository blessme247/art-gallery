let audio = document.querySelector('.bg-music')
let soundText = document.querySelector('.sound__text')
// soundText.innerHTML = audio.paused ? 'SOUND ON' : 'SOUND OFF';
audio.volume = 0.2
// audio.pause()

// soundText.addEventListener('click', () => {
//   soundText.innerHTML = soundText.innerHTML === 'SOUND OFF' ? 'SOUND ON' : 'SOUND OFF';
  
// });

soundText.addEventListener('click', () => {
  if (audio.paused) {
    soundText.innerHTML = 'SOUND OFF';
    audio.play(); // Start playing the audio
  } else {
    soundText.innerHTML = 'SOUND ON';
    audio.pause(); // Pause the audio
  }
});



const animatePreloader = ()=>{
  let tl = gsap.timeline()
  tl.to(".header > h1",2, {
    top: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2
    }

  })
.to(".pre-loader-btn", 1, {
  opacity: 1,
  ease: "power2.inOut"
},+2.5)  
  .to(".pre-loader",1,{
    opacity: 0
  },+4.5)
  .set(".pre-loader", { display: 'none' })
  
  .to(".mainOverlay", {
    width: "0%",
    ease: "power2.inOut",
    duration: 1.2
  })
  .fromTo(".intro-grid__img", {
    scale: 1.2
  },
  {
    scale: 1
  }, "-=0.5"
  )
  .fromTo(".sound__text", {
    y: -5,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1
  }
  )
  .fromTo([".frame__title-main", ".frame__demos"],{
    y: 5,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1
  }
  )

}

animatePreloader()








