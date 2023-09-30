//navbar
const navbar = document.querySelector('.navbar-btn');

document.querySelector('.material-symbols-outlined').onclick = () => {
  navbar.classList.toggle('active');
};

const hamburger = document.querySelector('.material-symbols-outlined');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active');
  }
});

//smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
