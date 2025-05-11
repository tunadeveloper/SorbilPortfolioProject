// Satışlar grafiği
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
        datasets: [{
            label: 'Aylık Satışlar',
            data: [12000, 19000, 15000, 25000, 22000, 30000],
            borderColor: '#4a90e2',
            backgroundColor: 'rgba(74, 144, 226, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return '₺' + value.toLocaleString();
                    }
                }
            }
        }
    }
});

// Kullanıcı istatistikleri grafiği
const usersCtx = document.getElementById('usersChart').getContext('2d');
const usersChart = new Chart(usersCtx, {
    type: 'doughnut',
    data: {
        labels: ['Aktif Kullanıcılar', 'Yeni Kullanıcılar', 'Pasif Kullanıcılar'],
        datasets: [{
            data: [65, 25, 10],
            backgroundColor: [
                '#4a90e2',
                '#2ecc71',
                '#e74c3c'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Mobil menü için toggle fonksiyonu
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links li');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // DOM Elementleri
    const newTaskInput = document.getElementById('newTask');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.querySelector('.task-list');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const taskStats = document.querySelector('.task-stats');

    // Görev ekleme fonksiyonu
    function addTask(taskText) {
        if (!taskText.trim()) return;

        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div class="task-check">
                <input type="checkbox" id="task${Date.now()}">
                <label for="task${Date.now()}"></label>
            </div>
            <div class="task-content">
                <h3>${taskText}</h3>
                <p>Yeni görev</p>
            </div>
            <div class="task-actions">
                <button class="important-btn"><i class="far fa-star"></i></button>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;

        taskList.appendChild(taskItem);
        newTaskInput.value = '';
        updateTaskStats();
    }

    // Görev silme fonksiyonu
    function deleteTask(taskItem) {
        taskItem.remove();
        updateTaskStats();
    }

    // Görev tamamlama fonksiyonu
    function toggleTaskComplete(checkbox) {
        const taskItem = checkbox.closest('.task-item');
        taskItem.classList.toggle('completed');
        updateTaskStats();
    }

    // Önemli görev işaretleme fonksiyonu
    function toggleImportant(btn) {
        const icon = btn.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
    }

    // Görev istatistiklerini güncelleme
    function updateTaskStats() {
        const totalTasks = document.querySelectorAll('.task-item').length;
        const completedTasks = document.querySelectorAll('.task-item.completed').length;
        const pendingTasks = totalTasks - completedTasks;

        taskStats.innerHTML = `
            <span class="completed">${completedTasks} Tamamlandı</span>
            <span class="pending">${pendingTasks} Bekliyor</span>
        `;
    }

    // Filtreleme fonksiyonu
    function filterTasks(filter) {
        const tasks = document.querySelectorAll('.task-item');
        tasks.forEach(task => {
            switch(filter) {
                case 'active':
                    task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                    break;
                default:
                    task.style.display = 'flex';
            }
        });
    }

    // Event Listeners
    addTaskBtn.addEventListener('click', () => addTask(newTaskInput.value));
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask(newTaskInput.value);
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.closest('.delete-btn')) {
            deleteTask(e.target.closest('.task-item'));
        }
        if (e.target.closest('.important-btn')) {
            toggleImportant(e.target.closest('.important-btn'));
        }
        if (e.target.closest('input[type="checkbox"]')) {
            toggleTaskComplete(e.target);
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterTasks(btn.dataset.filter);
        });
    });

    // Sayfa yüklendiğinde istatistikleri güncelle
    updateTaskStats();
}); 