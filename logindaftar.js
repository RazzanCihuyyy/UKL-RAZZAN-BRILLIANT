
function togglePassword(element) {
    const passwordInput = element.parentElement.querySelector('input');
    const toggleIcon = element;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}


document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    
    if (username.trim() === '' || password.trim() === '') {
        alert('Username dan password harus diisi!');
        return;
    }

    
    console.log('Login dengan:', { username, password, remember });
    window.location.href = 'index.html'; // Redirect ke dashboard
});


document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const nis = document.getElementById('nis').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    
    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok!');
        return;
    }

    if (password.length < 6) {
        alert('Password minimal 6 karakter!');
        return;
    }

    
    if (!/^\d+$/.test(nis)) {
        alert('NIS harus berupa angka!');
        return;
    }

    
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Format email tidak valid!');
        return;
    }

    
    console.log('Register dengan:', { fullname, nis, email, password });
    alert('Registrasi berhasil! Silakan login.');
    window.location.href = 'login.html';
});


document.querySelectorAll('.auth-button').forEach(button => {
    button.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        setTimeout(() => {
            this.innerHTML = this.getAttribute('data-original-text') || 'Submit';
        }, 2000);
    });
});