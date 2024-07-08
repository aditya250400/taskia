document.addEventListener('DOMContentLoaded', () => {

    const taskForm = document.getElementById('taskForm');
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskData = {
            taskName: document.getElementById('taskName').value, 
            taskPrioriy: document.getElementById('taskPriority').value, 
        };

        const result = taskManager.saveTask(taskData);

        if(result.success) {
            alert('Berhasil di simpan');
            // return window.location.href = '../signin.html';
        } else {
            console.log('Proses simpan data gagal');
            alert('Proses simpan data gagal');
        }

    });




});