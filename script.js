// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Animate skill bars on scroll
function animateSkillBars() {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.transition = 'width 1.2s cubic-bezier(.4,2,.6,1)';
      bar.style.width = bar.getAttribute('style').split('width:')[1];
    }
  });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Prevent form submission (demo)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! (Form submission is a demo.)');
});

// Typing effect for hero subtitle (typewriter)
const heroTypewriter = document.querySelector('.hero-typewriter');
if (heroTypewriter) {
  const phrases = [
    "Web Developer & AI Enthusiast",
    "Full-Stack Creator",
    "Open Source Contributor",
    "Mentor & Blogger"
  ];
  let phraseIndex = 0, charIndex = 0, typing = true;

  function typeEffect() {
    if (typing) {
      if (charIndex < phrases[phraseIndex].length) {
        heroTypewriter.textContent = phrases[phraseIndex].slice(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 80);
      } else {
        typing = false;
        setTimeout(typeEffect, 1200);
      }
    } else {
      if (charIndex > 0) {
        heroTypewriter.textContent = phrases[phraseIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 30);
      } else {
        typing = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 400);
      }
    }
  }
  typeEffect();
}

// Reveal sections on scroll
const revealSections = document.querySelectorAll('section');
function revealOnScroll() {
  revealSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  revealSections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.8s cubic-bezier(.4,2,.6,1), transform 0.8s cubic-bezier(.4,2,.6,1)';
  });
  revealOnScroll();
});

// Particle background for hero section
function createParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'hero-particles';
  canvas.style.position = 'absolute';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = 0;
  hero.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function resize() {
    w = hero.offsetWidth;
    h = hero.offsetHeight;
    canvas.width = w;
    canvas.height = h;
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? 'rgba(56,189,248,0.7)' : 'rgba(255,255,255,0.7)'
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    });
    requestAnimationFrame(animate);
  }

  resize();
  initParticles();
  animate();
  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });
}
window.addEventListener('DOMContentLoaded', createParticles);

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.style.transform = 'translateY(0)';
    return;
  }
  
  if (currentScroll > lastScroll) {
    // Scrolling down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});
