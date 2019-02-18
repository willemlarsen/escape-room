const formNode = document.getElementById('user-form');

formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(formNode);
    const userInfo = {
        name: formData.get('name')
    };

    const json = JSON.stringify(userInfo);
    window.localStorage.setItem('userInfo', json);
    window.location = '../pages/choose-quest.html';
});