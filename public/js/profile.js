console.log('profile.js loaded');


const $deleteUserBtn = document.getElementById('deleteUserBtn');

$deleteUserBtn.addEventListener('click', async (event) => {
    deleteUser(event);
    }
    );

async function deleteUser(event) {
    event.preventDefault();
    alert('Are you sure you want to delete your account? That is lame.');
    try {
        const response = await fetch('/api/users', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            location.href = '/';
        } else {
            alert('Failed to delete user shiiittttt');
        }
    } catch (error) {
        console.log(error);
    }
};

const $createBtn = document.getElementById('createBtn');
//create New review
  $createBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const title = document.getElementById('review-title').value;
    const comment = document.getElementById('review-body').value;
    const rating = document.getElementById('review-rating').value;

    if (title && comment && rating) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ title, comment, rating }),

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