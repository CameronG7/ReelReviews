console.log('profile.js loaded');


const $dashBoardBtn = document.getElementById('dashBoardBtn');

$dashBoardBtn.addEventListener('click', async (event) => {
    loadDashBoard(event);
    }
    );

function loadDashBoard(event) {
    event.preventDefault();
    location.href = `/dashboard`;
}

const $deleteUserBtn = document.getElementById('deleteUserBtn');

$deleteUserBtn.addEventListener('click', async (event) => {
    deleteUser(event);
    }
    );

function deleteUser(event) {
    event.preventDefault();
    try {
        const response = fetch(`/api/users/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            location.href = '/';
        } else {
            alert('Failed to delete user');
        }
    } catch (error) {
        console.log(error);
    }
};

  
//   deleteReview.addEventListener('submit', event =>{

//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/reviews/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/dashboard');
//       } else {
//         alert('Failed to delete review');
//       }
//     }
//   }
// });