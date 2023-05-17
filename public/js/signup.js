console.log("signup.js loaded")

document.getElementById("createBtn").addEventListener("click", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(!username || !email || !password) {
        alert("You must fill out all fields to sign up!")
        return;
    }
    try {
      
    const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({username, email, password}),
        headers: {"Content-Type": "application/json"},
       
})
const data = await response.json();
    console.log(data);
  location.href = `/dashboard`;
    // create li html element
    
    
} catch (err) {
    console.log(err);   
};
});

