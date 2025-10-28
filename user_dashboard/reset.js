const newPasswordInput = document.getElementById('new-password');
const strengthIndicator = document.querySelector('progress');
const passwordRequirements = document.querySelectorAll('ul li');
const form = document.getElementById('reset-form');
const confirmationMessage = document.getElementById('confirmation-message');

newPasswordInput.addEventListener('input', () => {
  let score = 0;
  const value = newPasswordInput.value;

  if (value.length >= 8) {
    score += 25;
    passwordRequirements[0].style.color = '#ffde59';
  } else passwordRequirements[0].style.color = '';

  if (/[A-Z]/.test(value)) {
    score += 25;
    passwordRequirements[1].style.color = '#ffde59';
  } else passwordRequirements[1].style.color = '';

  if (/[a-z]/.test(value)) score += 25;
  if (/\d/.test(value)) {
    score += 25;
    passwordRequirements[2].style.color = '#ffde59';
  } else passwordRequirements[2].style.color = '';

  strengthIndicator.value = score;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.style.display = 'none';
  confirmationMessage.style.display = 'block';
});
