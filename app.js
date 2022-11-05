document.getElementById('confirm-password').addEventListener('keyup', validate_password);

function validate_password() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    while (password != confirmPassword) {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = '* Use same password';
        break;
    }
    while (password == confirmPassword) {
        document.getElementById('message').innerHTML = '';
        break;
    }
    
}


        
        