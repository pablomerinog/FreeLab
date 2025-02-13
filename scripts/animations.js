// Smooth scroll animations
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Hover effects for team members
  document.querySelectorAll('.member').forEach(member => {
    member.addEventListener('mouseover', () => {
      member.querySelector('.info').style.opacity = '1';
    });
    member.addEventListener('mouseout', () => {
      member.querySelector('.info').style.opacity = '0';
    });
  });

  // FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle('active');
    });
  });