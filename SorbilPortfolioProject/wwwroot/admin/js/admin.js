// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    // Menü işlemleri
    const menuItems = document.querySelectorAll('.sidebar nav ul li a');
    const sections = document.querySelectorAll('.content-section');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Aktif menü öğesini güncelle
            menuItems.forEach(menuItem => menuItem.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
            
            // İlgili bölümü göster
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Yetenek ekleme işlemi
    const addSkillBtn = document.getElementById('addSkill');
    const skillsList = document.getElementById('skillsList');

    addSkillBtn.addEventListener('click', function() {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <input type="text" placeholder="Yeni yetenek">
            <button type="button" class="remove-skill"><i class="fas fa-times"></i></button>
        `;
        skillsList.appendChild(skillItem);
    });

    // Yetenek silme işlemi
    skillsList.addEventListener('click', function(e) {
        if (e.target.closest('.remove-skill')) {
            e.target.closest('.skill-item').remove();
        }
    });

    // Resim yükleme işlemleri
    const profileImage = document.getElementById('profileImage');
    const aboutImage = document.getElementById('aboutImage');
    const profilePreview = document.getElementById('profilePreview');
    const aboutPreview = document.getElementById('aboutPreview');
    const removeProfile = document.getElementById('removeProfile');
    const removeAbout = document.getElementById('removeAbout');

    // Profil resmi yükleme
    profileImage.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePreview.src = e.target.result;
                // Burada resmi sunucuya yükleme işlemi yapılabilir
            }
            reader.readAsDataURL(file);
        }
    });

    // Hakkımda resmi yükleme
    aboutImage.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                aboutPreview.src = e.target.result;
                // Burada resmi sunucuya yükleme işlemi yapılabilir
            }
            reader.readAsDataURL(file);
        }
    });

    // Profil resmini kaldırma
    removeProfile.addEventListener('click', function() {
        profilePreview.src = '../images/profileImage.jpg';
        profileImage.value = '';
    });

    // Hakkımda resmini kaldırma
    removeAbout.addEventListener('click', function() {
        aboutPreview.src = '../images/profileImage.jpg';
        aboutImage.value = '';
    });

    // Form gönderme işlemleri
    const homeForm = document.getElementById('homeForm');
    const aboutForm = document.getElementById('aboutForm');
    const contactForm = document.getElementById('contactForm');

    homeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Form verilerini işleme
        const formData = new FormData(this);
        // Burada form verilerini sunucuya gönderme işlemi yapılabilir
        showNotification('Anasayfa bilgileri güncellendi!');
    });

    aboutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Form verilerini işleme
        const formData = new FormData(this);
        // Burada form verilerini sunucuya gönderme işlemi yapılabilir
        showNotification('Hakkımda bilgileri güncellendi!');
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Form verilerini işleme
        const formData = new FormData(this);
        // Burada form verilerini sunucuya gönderme işlemi yapılabilir
        showNotification('İletişim bilgileri güncellendi!');
    });

    // Bildirim gösterme fonksiyonu
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animasyon için setTimeout kullanımı
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // 3 saniye sonra bildirimi kaldır
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}); 