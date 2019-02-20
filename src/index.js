const formNode = document.getElementById('user-form');

// const insaneTheme = {
//     clicked: false
// };
// const bankTheme = {
//     clicked: false
// };

formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(formNode);
    const user = {
        name: formData.get('name'),
        hp: 50,
        cp: 0,
    };

    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);
    window.location = '../pages/choose-theme.html';
});