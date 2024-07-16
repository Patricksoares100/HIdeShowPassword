

let imageIcon = document.getElementById('eyeIcon');
let password = document.getElementById('password');

imageIcon.addEventListener('click', function() {
    if (password.type === 'password') {
        password.type = 'text';
        imageIcon.src = 'images/eyeClose.png'; 
        console.log('Password is visible');
    } else {
        password.type = 'password';
        imageIcon.src = 'images/eyeOpen.png'; 
        console.log('Password is hidden');
    }
});