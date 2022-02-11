document.getElementById('login-button').addEventListener('click', function(){
    // user email
    const userEmail = document.getElementById('user-email').value;
    // user password
    const userPassword = document.getElementById('user-password').value;
    // check login
    if(userEmail == 'sontan@gmail.com' && userPassword == 'secret'){
        window.location.href = 'banking-page.html'
    }
});
