const $getStartedBtn = document.getElementById('getStartedBtn');

$getStartedBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  location.href = `/signup`;
});

// const $footerElement = document.querySelector('footer');
// $footerElement.classList.add('fixed-bottom');
