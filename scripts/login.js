let token

document.querySelector("#loginBtn").addEventListener("click", async function(){
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    login(username,password)

})
async function login(username, password) {
    document.querySelector("#errorMsg").innerHTML = "";
 
    const response = await fetch("https://principled-complete-clownfish.glitch.me/api/auth", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    });
 
    if (response.ok) {
       const tokenResponse = await response.json();

       console.log(tokenResponse)
       
       localStorage.setItem("token", tokenResponse.token);
       localStorage.setItem("username", tokenResponse.username);
       localStorage.setItem("isLoggedIn", "true")
       localStorage.setItem("userID",tokenResponse.userID)
       window.location.href = "/index.html"
     
    }
    else {
       document.querySelector("#errorMsg").innerHTML = "Bad username/password.";
    }
 }