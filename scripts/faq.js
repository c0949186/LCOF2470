document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
      question.addEventListener('click', () => {
          const answer = question.nextElementSibling;

          // Close other answers
          document.querySelectorAll('.faq-answer').forEach(ans => {
              if (ans !== answer) {
                  ans.style.display = 'none';
              }
          });

          // Toggle current answer
          if (answer.style.display === 'block') {
              answer.style.display = 'none';
          } else {
              answer.style.display = 'block';
          }
      });
  });
});
