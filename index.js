const quotes = [
    '“To keep the body in good health is a duty…otherwise we shall not be able to keep the mind strong and clear.” – Buddha',
    '“Physical fitness is the first requisite of happiness.” - Joseph Pilates',
    '“You can’t control what goes on outside, but you CAN control what goes on inside.” – Unknown',
    '“Health is a state of complete harmony of the body, mind and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open.” – B.K.S. Iyengar',
    '“To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.” -William Londen',
    '“The human body has been designed to resist an infinite number of changes and attacks brought about by its environment. The secret of good health lies in successful adjustment to changing stresses on the body.” – Harry J. Johnson',
    '“Good health is not something we can buy. However, it can be an extremely valuable savings account.”-Anne Wilson Schaef',
    '“The cheerful mind perseveres, and the strong mind hews its way through a thousand difficulties.” – Swami Vivekananda',
    '“It is health that is the real wealth, and not pieces of gold and silver.” – Mahatma Gandhi',
    '“Keeping your body healthy is an expression of gratitude to the whole cosmos- the trees, the clouds, everything.” – Thich Nhat Hanh',
    '“I have chosen to be happy because it is good for my health.” – Voltaire',
    '“A sad soul can be just as lethal as a germ.” – John Steinbeck',
    '“If you know the art of deep breathing, you have the strength, wisdom and courage of ten tigers.” – Chinese adage',
    '“Healthy citizens are the greatest asset any country can have.” – Winston Churchill',
];

let randomNumber = Math.floor(Math.random() * quotes.length);

document.querySelector('.quote').textContent = quotes[randomNumber];


// if (localStorage.getItem('username')) {
//     document.querySelector('#username').textContent = localStorage.getItem('username');
//     document.querySelector('#avatar').setAttribute('src', localStorage.getItem('avatar'));
// }

function render(){
    if (localStorage.getItem('username')) {
        document.querySelector('#username').textContent = localStorage.getItem('username');
        document.querySelector('#avatar').setAttribute('src', localStorage.getItem('avatar'));
    }
}
render();

document.querySelector('#log-out-button').addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.clear();
    window.location.href = 'signIn.html';

});