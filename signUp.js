const storedIds = [{
    username: 'Tommy',
    password: 'aha',
    avatar: '/Asset/img/ProfPic small.jpg'
}, {
    username: 'Budi',
    password: 'aha',
}, {
    username: 'Asep',
    password: 'aha',
}, {
    username: 'Maria',
    password: 'aha',
    avatar: '/Asset/img/mariaSharapova.jpg'
}, {
    username: 'Luna',
    password: 'aha',
}];

let randomNumber = Math.ceil(Math.random() * 10);

document.querySelector('#signUp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    storedIds.push({
        username: username,
        password: password
    });

    for (let i = 0; i < storedIds.length; i++) {
        const perId = storedIds[i];

        if (username === perId.username && password === perId.password) {
            localStorage.setItem('username', username);

            if (!perId.avatar) {
                localStorage.setItem('avatar', '/Asset/img/randomAvatar/' + randomNumber + '.jpg');
            } else {
                localStorage.setItem('avatar', perId.avatar);
            }

            window.location.href = 'index.html';
            // } else if (username !== perId.username && password === perId.password) {
            //     alert('Incorrect userusername');
            //     location.reload();
            // }  else if (username === perId.username && password !== perId.password) {
            //     alert('Incorrect password');
            //     location.reload();
            // }   else{
            //     alert('Id is not registered. Please Sign up!');
            //     window.location.href = 'signUp.html';
            // }
        }
    }
});