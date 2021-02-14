var nav = document.getElementsByName("nav");
window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    nav.style.backgroundColor = 'white';
  })