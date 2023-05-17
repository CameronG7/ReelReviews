console.log("login.js loaded")

document.querySelector('button').addEventListener('click', async (event)=>{
    event.preventDefault();
    
    const username = document.getElementById("username").value.trim()

    const password = document.getElementById("password").value.trim()

    
    console.log(username)
    try{
    const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {"Content-Type": "application/json"}
        
    })
    const data = await response.json();
    console.log(data);
    location.href = `/dashboard`;
    // create li html element

    }
    catch(err){
  
    }
})

