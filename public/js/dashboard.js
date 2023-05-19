
const name = document.querySelector('#review-title').value.trim();
const description = document.querySelector('#review-body').value.trim();
const newreview = document.querySelector('createBtn')
const deleteReview = document.querySelector('deleteBtn')
const deleteUsers = document.querySelector('deleteUserBtn')
const updateReview = document.querySelector('updateBtn')

function hideCreateNew(){
  newReview.hidden= true;
}

//if they want to create new review
function buttonNewReview(event) {
  event.preventDefault();
  newReview.hidden = false;
  deleteReview.hidden = true;
}
//create New review
newReview.addEventListener('submit', async (event) => {
  const title = document.querySelector('input[name="review-title"]').value;
  const body = document.querySelector('input[name="review-body"]').value;
  
  if (title && body) {
    const response = await fetch(`/api/reviews/login`, {
      method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      } else  {
        alert('Failed to create review');
      }
    });

      
//if they want to delete review
deleteReview.addEventListener('submit', event =>{
    
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete review');
      }
    }
  }
});

deleteUsers.addEventListener('submit', event =>{
  const deleteUserHandler = async (event) => {
    if (event.target.hasAttribute('user-id')) {
      const id = event.target.getAttribute('user-id');
      
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete user thank god!');
      }
    }
  }
});

 updateReview.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = document.querySelector('input[name="review-title"]').value;
  const body = document.querySelector('input[name="review-body"]').value;
  const id = document.querySelector('input[name="review-id"]').value;
  
  const response = await fetch(`/api/reviews/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, body }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
});


  

  