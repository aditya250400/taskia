document.addEventListener('DOMContentLoaded', () => {

    const taskForm = document.getElementById('taskForm');
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const date = new Date();
        const taskData = {
            taskName: document.getElementById('taskName').value, 
            taskPriority: document.getElementById('taskPriority').value, 
            createdAt: date.toLocaleDateString(),
        };

        const result = taskManager.saveTask(taskData);

        if(result.success) {
            alert('Berhasil di simpan');
            return window.location.href = '../tasks.html';
        } else {
            console.log('Proses simpan data gagal');
            alert('Proses simpan data gagal');
        }

    });




});