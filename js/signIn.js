document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;

        const result = userManager.signInUser(username);

        if(result.success) {
            localStorage.setItem('usernameLoggedIn', username);
            return window.location.href = '../tasks.html';
        } else {
            alert(result.message);
        }

    });




});