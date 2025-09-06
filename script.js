// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});
document.querySelectorAll('a, button, .btn').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('.section');
function checkSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < triggerBottom){
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);