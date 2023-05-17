const $password = document.getElementById('password');
const $loginBtn = document.getElementById('loginBtn');
// loginStatus = JSON.parse(localStorage.getItem('loginStatus'));

$loginBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const username = $username.value.trim();
  const password = $password.value.trim();

  if (!username || !password) {
    return alert('Please enter a username and password');
  }
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });
   if (response.ok) {
    localStorage.setItem('response', response.ok)
    loginStatus = true;
    localStorage.setItem('loginStatus', true);
    
   }else{
    alert('Failed to log in');
   }
    
  } catch (err) {
    alert(err);
  }
});
