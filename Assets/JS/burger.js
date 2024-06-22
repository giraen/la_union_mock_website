const icon = document.querySelector('i');
const elementToToggle = document.querySelector('.header-links');

icon.addEventListener('click', function () {
  if (elementToToggle.style.display === 'none') {
    elementToToggle.style.display = 'block';
  } else {
    elementToToggle.style.display = 'none';
  }
});
