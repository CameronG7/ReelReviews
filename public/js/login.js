console.log("login.js loaded")

document.querySelector('button').addEventListener('click', async (event)=>{
    event.preventDefault();
    const userObj = {
    name: document.querySelector("input[name=name]").value.trim(),
    email: document.querySelector("input[name=email]").value.trim(),
    password: document.querySelector("input[name=password]").value.trim(),
    }
    console.log(userObj)
    await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {"Content-Type": "application/json"}
        
}).then((response)=>{
    console.log(response)
    if(response.ok){
        document.location.replace("/dashboard")
    }else{
        alert("Login failed")
    }
})
});
