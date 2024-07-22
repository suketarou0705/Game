function calculateScore() {
  const username = document.getElementById('username').value;
  if (!username) {
    alert('Please enter your name');
    return;
  }

  const questions = document.querySelectorAll('.question');
  let score = 0;

  questions.forEach(question => {
    const selectedAnswer = question.querySelector('input[type="radio"]:checked');
    if (selectedAnswer) {
      score += parseInt(selectedAnswer.value, 10);
    }
  });

  alert(`Hello, ${username}. Your score is ${score}`);
}
