const $loginPageBtn = document.getElementById('loginPageBtn');

const $signupPageBtn = document.getElementById('signupPageBtn');

const $loginBtn2 = document.getElementById('loginBtn2');
const $homeBtn = document.getElementById('homeBtn');
const $logoutBtn = document.getElementById('logoutBtn');

$homeBtn.addEventListener('click', async (event) => {
  goHome(event);
});
// $loginPageBtn.addEventListener('click', async (event) => {loadLogin(event)});

// $signupPageBtn.addEventListener('click', async (event) => {loadSignup(event)});

// $logoutBtn.addEventListener('click', (event) => { logout(event)});

let loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
if ((loginStatus = true)) {
  $loginPageBtn.addEventListener('click', async (event) => {
    loadLogin(event);
  });

  $signupPageBtn.addEventListener('click', async (event) => {
    loadSignup(event);
  });
} else {
  
$logoutBtn.addEventListener('click', (event) => { logout(event)});
}

function goHome(event) {
  event.preventDefault();
  location.href = `/home`;
}

function loadLogin(event) {
  event.preventDefault();
  location.href = `/login`;
}

function loadSignup(event) {
  event.preventDefault();
  location.href = `/signup`;
}

async function logout(event) {
  // logout function
  event.preventDefault();
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST'
    });

    if (response.ok) {
      location.href = `/login`;
    }
  } catch (err) {
    console.log(err);
    alert(err);
  }
}
