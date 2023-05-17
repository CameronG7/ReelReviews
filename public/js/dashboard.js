
const name = document.querySelector('#review-title').value.trim();
const description = document.querySelector('#review-body').value.trim();
const newreview = document.querySelector('#newReview')
const buttonNewReview = document.querySelector('#buttonNewReview')
const deleteReview = document.querySelector('#deleteReview')
const updateReview = document.querySelector('#updateReview')

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
  async function newReview(event) {
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
  
      if (response.ok) {
        document.location.replace('/dashbord');
      } else {
        alert('Failed to create a review');
      }
    }
  };
  
  deleteReview.addEventListener('submit', event =>{

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashobard');
      } else {
        alert('Failed to delete review');
      }
    }
  }
});
  
  document
    .querySelector('.new-review-form')
    .addEventListener('submit', buttonNewReview);
  
  document
    .querySelector('.review-list')
    .addEventListener('click', newReview);
  
    
  document
  .querySelector('.submit-review')
  .addEventListener('click', deleteReview);
  