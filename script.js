// Login Area 
document.getElementById('loginBtn').addEventListener('click', function() {
    const userEmail = document.getElementById('userEmail');
    const email = userEmail.value;
    const userPassword = document.getElementById('userPassword');
    const password = userPassword.value;
    // check password 
    if (email == 'shakil@gmail.com' && password == 'asdf') {
        window.location.href = 'bank.html';

    }
})

//bank.html file  deposite option

document.getElementById('depositeBtn').addEventListener('click', function() {
    console.log('sss');
})