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

const $createBtn = document.getElementById('createBtn');
//create New review
  $createBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const title = document.querySelector('input[name="review-title"]').value;
    const comment = document.querySelector('input[name="review-body"]').value;
    const rating = document.querySelector('input[name="review-rating"]').value;

    if (title && body) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ title, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      } else  {
        alert('Failed to create review');
      }
    });

  
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