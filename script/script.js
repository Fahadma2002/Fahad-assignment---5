

document.getElementById("login-btn").addEventListener('click', function(){
   
    // get the username input:-
    const inputUsername = document.getElementById('input-username')
    const username = inputUsername.value;
    console.log(username)

    // get the password input:-
    const inputPassword = document.getElementById('input-password')
    const password = inputPassword.value;
    console.log(password)

    // match username & password:-
    if(username =="admin" && password == "admin123"){
        alert("login success")

        document.location.assign("/home.html")
    }
    else{
        alert("login failed")
    }
})