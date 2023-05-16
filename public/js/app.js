window.addEventListener('DOMContentLoaded', () => {

const $loginBtn = document.getElementById('loginBtn');
const $signupBtn = document.getElementById('signupBtn');
const $getStartedBtn = document.getElementById('getStartedBtn');
const $loginBtn2 = document.getElementById('loginBtn2');
const $homeBtn = document.getElementById('homeBtn');

$homeBtn.addEventListener('click', async (event) => {goHome(event)});
$loginBtn.addEventListener('click', async (event) => {loadSignin(event)});
$getStartedBtn.addEventListener('click', async (event) => {loadSignup(event)});
$signupBtn.addEventListener('click', async (event) => {loadSignup(event)});
$loginBtn2.addEventListener('click', async (event) => {loadSignin(event)});

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


function logout(event) {
    event.preventDefault();
    ;
}
