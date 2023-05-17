window.addEventListener('DOMContentLoaded', () => {

const $loginBtn = document.getElementById('loginBtn');
const $signupBtn = document.getElementById('signupBtn');
const $signupPageBtn = document.getElementById('signupBtn');
const $getStartedBtn = document.getElementById('getStartedBtn');
const $loginBtn2 = document.getElementById('loginBtn2');
const $homeBtn = document.getElementById('homeBtn');
const $logoutBtn = document.getElementById('logoutBtn');

$homeBtn.addEventListener('click', async (event) => {goHome(event)});
$loginBtn.addEventListener('click', async (event) => {loadSignin(event)});
$getStartedBtn.addEventListener('click', async (event) => {loadSignup(event)});
$signupPageBtn.addEventListener('click', async (event) => {loadSignup(event)});
$loginBtn2.addEventListener('click', async (event) => {loadSignin(event)});
$logoutBtn.addEventListener('click', (event) => { logout(event)});

});

function goHome(event) {
    event.preventDefault();
    location.href = `/home`;
}

function loadSignin(event) {
    event.preventDefault();
    location.href = `/signin`;
};

function loadSignup(event) {
    event.preventDefault();
    location.href = `/signup`;
};


async function logout (event) { // logout function
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
