// Smooth scroll + active section highlight + back-to-top
const navLinks = [...document.querySelectorAll('.nav a')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));
const toTop = document.getElementById('toTop');

function onScroll() {
  const pos = window.scrollY + 120; // offset for highlight
  let current = 0;
  sections.forEach((sec, i) => {
    if (sec.offsetTop <= pos) current = i;
  });
  navLinks.forEach((a, i) => a.classList.toggle('active', i === current));

  // show back-to-top
  if (window.scrollY > 400) toTop.classList.add('show'); else toTop.classList.remove('show');
}

window.addEventListener('scroll', onScroll);
onScroll();

navLinks.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth', block: 'start'});
    history.replaceState(null, '', id);
  });
});

toTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
