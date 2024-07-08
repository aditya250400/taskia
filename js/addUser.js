document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userData = {
            username: document.getElementById('username').value,
        };

        const result = userManager.saveUser(userData);

        if(result.success) {
            alert('Proses simpan data berhasil');
            return window.location.href = '../index.html';
        } else {
            console.log('Proses simpan data gagal');
            alert('Proses simpan data gagal');
        }

    });




});