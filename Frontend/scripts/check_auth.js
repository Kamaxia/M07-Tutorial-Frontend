function checkAuth(){
    if(!localStorage.getItem("isLoggedIn")){
        window.location.href = "/index.html"
    }
}

checkAuth()