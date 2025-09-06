document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  const links = document.querySelectorAll('a, button, .btn');

  let posX = 0, posY = 0;
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.top = mouseY + 'px';
    cursor.style.left = mouseX + 'px';
  });

  function animate() {
    posX += (mouseX - posX) * 0.2;
    posY += (mouseY - posY) * 0.2;
    follower.style.transform = `translate(${posX - 25}px, ${posY - 25}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  links.forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('cursor-grow'));
    el.addEventListener('mouseleave', () => follower.classList.remove('cursor-grow'));
  });
});

