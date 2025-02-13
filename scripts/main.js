// Scroll-triggered animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Form validation
const form = document.querySelector('.contact form');
form.addEventListener('submit', (e) => {
  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector('textarea');

  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert('Please fill out all fields.');
  }
});