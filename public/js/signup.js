console.log('signup.js loaded');

document
  .getElementById('createBtn')
  .addEventListener('click', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = _.trim(_.deburr(document.getElementById('email').value)); // lodash utilized to trim and remove accents from email for cleaner data
    const password = document.getElementById('password').value.trim();

    if (!username || !email || !password) {
      alert('You must fill out all fields to sign up!');
      return;
    }
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        localStorage.setItem('loginStatus', true);
        location.href = `/dashboard`;
      } else {
        throw new Error(JSON.stringify(data.message));
      }

      // create li html element
    } catch (err) {
      alert(err);
      document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        
      
    }
  });
