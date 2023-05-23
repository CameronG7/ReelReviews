console.log('profile.js loaded');



const $deleteUserBtn = document.getElementById('deleteUserBtn');

// $deleteUserBtn.addEventListener('click', async (event) => {
//     deleteUser(event);
//     }
//     );

async function deleteUser(event) {
    event.preventDefault();
    confirm('Are you sure you want to delete your account? That is lame.');
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
    console.log(title, comment, rating);

    if (title && comment && rating) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ title, comment, rating }),

        headers: {
          'Content-Type': 'application/json',
        },
      });
      document.querySelector('.new-review-form').reset();
      } else  {
        alert('Failed to create review');
      }
    });

const $deleteReview = document.getElementById('deleteBtn');
  
$deleteReview.addEventListener('click', event =>{

  const delButtonHandler = async (event) => {
    event.preventDefault();
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete review');
      }
    }
  }); 

  


const $updateBtn = document.getElementById('updateBtn');

$updateBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const title = document.querySelector('.card-title').textContent;
    const comment = document.querySelector('.card-text').textContent;
    const rating = document.querySelector('.card-rating').textContent;
    console.log(title, comment, rating);
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (title && comment && rating) {

        const response = await fetch(`/api/reviews`, {
            method: 'PUT',
            body: JSON.stringify({ title, comment, rating }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        document.querySelector('.new-review-form').reset();
       } else {
        alert('Failed to update review');
    }
});


