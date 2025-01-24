const questions = document.querySelectorAll('.EA-faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.EA-icon');
      
      
      
      


    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      icon.textContent = '+';
    } else {
      document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
      document.querySelectorAll('.EA-icon').forEach(ic => ic.textContent = '+');

      answer.style.display = 'block';
      icon.textContent = '-';
    }
  });
});

    function toggleMenu() {
        const menu = document.querySelector('.EA-menu');
        menu.classList.toggle('active');
    }

