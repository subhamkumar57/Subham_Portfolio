const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '78px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px';
  nav.style.background = 'rgba(6,16,31,.97)';
  nav.style.borderBottom = '1px solid rgba(130,174,220,.18)';
});

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => { if (window.innerWidth <= 950) nav.style.display = ''; });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
