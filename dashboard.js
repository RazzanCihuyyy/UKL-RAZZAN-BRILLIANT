document.addEventListener('DOMContentLoaded', function() {
    const sidebarMenu = document.querySelectorAll('.sidebar-menu li');
    const dashboardSections = document.querySelectorAll('.dashboard-section');

    sidebarMenu.forEach(item => {
        item.addEventListener('click', function() {
            sidebarMenu.forEach(i => i.classList.remove('active'));
            
            this.classList.add('active');
            
            dashboardSections.forEach(section => {
                section.classList.remove('active');
            });
            
            const sectionId = this.getAttribute('data-section') + '-section';
            document.getElementById(sectionId).classList.add('active');
            
            
            loadSectionData(this.getAttribute('data-section'));
        });
    });

    
    function loadSectionData(section) {
        switch(section) {
            case 'subjects':
                loadSubjects();
                break;
            case 'schedule':
                loadSchedule();
                break;
            case 'grades':
                loadGrades();
                break;
            case 'attendance':
                loadAttendance();
                break;
            case 'profile':
                loadProfile();
                break;
        }
    }

    
    function loadSubjects() {
        const subjects = [
            { name: 'Matematika', teacher: 'Budi Santoso', progress: 75 },
            { name: 'Bahasa Indonesia', teacher: 'Siti Rahayu', progress: 60 },
            { name: 'Fisika', teacher: 'Ahmad Rifai', progress: 85 },
            { name: 'Kimia', teacher: 'Dra. Endang', progress: 70 },
            { name: 'Biologi', teacher: 'Dr. Rini Susanti', progress: 65 },
            { name: 'Sejarah', teacher: 'Pak Hendra', progress: 55 }
        ];

        const subjectsList = document.getElementById('subjects-list');
        subjectsList.innerHTML = subjects.map(subject => `
            <div class="subject-card">
                <h3>${subject.name}</h3>
                <p>Guru: ${subject.teacher}</p>
                <div class="subject-progress">
                    <div class="progress-bar" style="width: ${subject.progress}%;"></div>
                </div>
                <span>${subject.progress}% Selesai</span>
            </div>
        `).join('');
    }

    
    function loadSchedule() {
        const schedule = [
            { day: 'Senin', subjects: ['Matematika', 'Fisika', 'Kimia'] },
            { day: 'Selasa', subjects: ['Bahasa Indonesia', 'Sejarah', 'Biologi'] },
            { day: 'Rabu', subjects: ['Matematika', 'Bahasa Inggris', 'Fisika'] },
            { day: 'Kamis', subjects: ['Kimia', 'Sejarah', 'Matematika'] },
            { day: 'Jumat', subjects: ['Biologi', 'Bahasa Indonesia', 'Olahraga'] }
        ];

        const scheduleContent = document.getElementById('schedule-content');
        scheduleContent.innerHTML = `
            <table class="schedule-table">
                <thead>
                    <tr>
                        <th>Hari</th>
                        <th>Mata Pelajaran</th>
                    </tr>
                </thead>
                <tbody>
                    ${schedule.map(day => `
                        <tr>
                            <td>${day.day}</td>
                            <td>${day.subjects.join(', ')}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    
    function loadGrades() {
        const grades = [
            { subject: 'Matematika', grade: 90, status: 'A' },
            { subject: 'Bahasa Indonesia', grade: 85, status: 'B+' },
            { subject: 'Fisika', grade: 88, status: 'A-' },
            { subject: 'Kimia', grade: 82, status: 'B' },
            { subject: 'Biologi', grade: 87, status: 'A-' },
            { subject: 'Sejarah', grade: 80, status: 'B' }
        ];

        const gradesContent = document.getElementById('grades-content');
        gradesContent.innerHTML = `
            <table class="grades-table">
                <thead>
                    <tr>
                        <th>Mata Pelajaran</th>
                        <th>Nilai</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${grades.map(item => `
                        <tr>
                            <td>${item.subject}</td>
                            <td>${item.grade}</td>
                            <td>${item.status}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="grades-summary">
                <p>Indeks Prestasi Kumulatif (IPK): 4.5</p>
            </div>
        `;
    }

    
    function loadAttendance() {
        const attendance = [
            { month: 'Januari', present: 26, total: 28 },
            { month: 'Februari', present: 25, total: 28 },
            { month: 'Maret', present: 27, total: 28 }
        ];

        const attendanceContent = document.getElementById('attendance-content');
        attendanceContent.innerHTML = `
            <table class="attendance-table">
                <thead>
                    <tr>
                        <th>Bulan</th>
                        <th>Hadir</th>
                        <th>Total Hari</th>
                        <th>Persentase</th>
                    </tr>
                </thead>
                <tbody>
                    ${attendance.map(item => `
                        <tr>
                            <td>${item.month}</td>
                            <td>${item.present}</td>
                            <td>${item.total}</td>
                            <td>${((item.present / item.total) * 100).toFixed(2)}%</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="attendance-summary">
                <p>Total Kehadiran: 95.24%</p>
            </div>
        `;
    }

    
    function loadProfile() {
        const profileContent = document.getElementById('profile-content');
        profileContent.innerHTML = `
            <div class="profile-header">
                <div class="profile-avatar">
                    <img src="fotoganteng.jpg" alt="Profil Siswa">
                </div>
                <div class="profile-basic-info">
                    <h3>Razzan Brilliant Nafis</h3>
                    <p>NISN: 1234567890</p>
                    <p>Kelas: 10 SIJA 1</p>
                </div>
            </div>
            <div class="profile-details">
                <h4>Informasi Pribadi</h4>
                <table>
                    <tr>
                        <td>Tempat, Tanggal Lahir</td>
                        <td>Sidoarjo, 17 April 2005</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>Laki-laki</td>
                    </tr>
                    <tr>
                        <td>Agama</td>
                        <td>Islam</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>Jl. Raya Sidoarjo No. 123, Sidoarjo, Jawa Timur</td>
                    </tr>
                </table>
                <h4>Kontak</h4>
                <table>
                    <tr>
                        <td>Email</td>
                        <td>razzan.brilliant@zann-edu.com</td>
                    </tr>
                    <tr>
                        <td>No. Telepon</td>
                        <td>+62 855-5550-1985</td>
                    </tr>
                </table>
            </div>
        `;
    }

    
    function updateGreeting() {
        const username = document.getElementById('username');
        const hour = new Date().getHours();
        const greetingText = document.createElement('span');
        
        if (hour < 12) {
            greetingText.textContent = 'Selamat Pagi, ';
        } else if (hour < 15) {
            greetingText.textContent = 'Selamat Siang, ';
        } else if (hour < 18) {
            greetingText.textContent = 'Selamat Sore, ';
        } else {
            greetingText.textContent = 'Selamat Malam, ';
        }
        
        username.parentNode.insertBefore(greetingText, username);
    }

    function updateDateTime() {
        const dateTimeElement = document.createElement('div');
        dateTimeElement.classList.add('date-time');
        
        function updateTime() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            dateTimeElement.textContent = now.toLocaleString('id-ID', options);
        }

        updateTime();
        setInterval(updateTime, 1000);
        
        document.querySelector('.dashboard-header').appendChild(dateTimeElement);
    }

    
    updateGreeting();
    updateDateTime();
    loadSubjects(); 
});