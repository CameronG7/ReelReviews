console.log('login.js loaded');

document.querySelector('.btn').addEventListener('click', async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const username = document.getElementById('username').value.trim();

  const password = document.getElementById('password').value.trim();

  console.log(username, password);
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log(data);
    if (data) {
      localStorage.setItem('loginStatus', true);
      location.href = '/dashboard';
    }
  } catch (err) {
    console.log(err);
  }
});
