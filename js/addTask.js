document.addEventListener('DOMContentLoaded', () => {
    
    const date = new Date();
    const year = date.getFullYear();
    const month =  String(date.getMonth() + 1).padStart(2, '0');
    const day =  String(date.getDate()).padStart(2, '0');

    const taskForm = document.getElementById('taskForm');
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskData = {
            taskName: document.getElementById('taskName').value, 
            taskPriority: document.getElementById('taskPriority').value, 
            createdAt: `${year}-${month}-${day}`,
        };

        const result = taskManager.saveTask(taskData);

        if(result.success) {
            alert('Berhasil di simpan');
            return window.location.href = 'https://aditya250400.github.io/taskia/';
        } else {
            console.log('Proses simpan data gagal');
            alert('Proses simpan data gagal');
        }

    });




});