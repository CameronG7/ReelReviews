console.log('profile.js loaded');



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

<<<<<<< HEAD
    if (title && body) {
=======
    const title = document.getElementById('review-title').value;
    const comment = document.getElementById('review-body').value;
    const rating = document.getElementById('review-rating').value;
    console.log(title, comment, rating);

    if (title && comment && rating) {
>>>>>>> aa3b52283465d07cbdd84d120f1da76b165c577f
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ title, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      document.querySelector('.new-review-form').reset();
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

