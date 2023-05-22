const $createBtn = document.getElementById('createBtn');


//create New review
  $createBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const title = document.querySelector('input[name="review-title"]').value;
    const body = document.querySelector('input[name="review-body"]').value;

    if (title && body) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // check the response status
      if (response.ok) {
        window.location.replace('/dashboard');
      } else {
        alert('Failed to create review');
      }
      } else  {
        alert('Failed to create review');
      }
    });


  

  

  