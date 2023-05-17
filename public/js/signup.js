console.log("signup.js loaded")

document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("input[name=name]").value.trim();
    const email = document.querySelector("input[name=email]").value.trim();
    const password = document.querySelector("input[name=password]").value.trim();

    if(!name || !email || !password) {
        alert("You must fill out all fields to sign up!")
        return;
    }
    try {
    const response = await fetch("/api/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, email, password})
})
    if(response.ok) {
        document.location.replace("/dashboard")
    } else{
        alert(response.statusText)
    }
} catch (err) {
    console.log(err);   
};
});

