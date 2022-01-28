const storedIds = [{
    username: 'Tommy',
    password: 'aha',
    avatar: '/Asset/img/ProfPic small.jpg'
}, {
    username: 'Budi',
    password: 'aha',
}, {
    username: 'Aldy',
    password: 'aha',
}, {
    username: 'Maria',
    password: 'aha',
    avatar: '/Asset/img/mariaSharapova.jpg'
}, {
    username: 'Luna',
    password: 'aha',
}];


document.querySelector('#signIn-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    for (let i = 0; i < storedIds.length; i++) {
        const perId = storedIds[i];
        let alert1 = document.querySelector('#alert');

        if (username === perId.username && password === perId.password) {
            localStorage.setItem('username', username);
            localStorage.setItem('avatar', perId.avatar);
            alert1.style.display = 'none';
            window.location.href = 'index.html';
            } else if (username !== perId.username && password === perId.password) {
                alert1.style.display = "inline";
                alert1.textContent = 'Incorrect username';
                
            }  else if (username === perId.username && password !== perId.password) {
                alert1.style.display = "inline";
                alert1.textContent = 'Incorrect password';
                
            }   else{
                alert1.style.display = "inline";
                alert1.textContent = 'Id is not registered. Please Sign up!';

                setTimeout(function() {
                    window.location.href = 'signUp.html';
                }, 2000);
                
            }
        }
    }
);