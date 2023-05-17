const $getStartedBtn = document.getElementById('getStartedBtn');
$getStartedBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  location.href = `/signup`;
});
