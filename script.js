
    // Soepele scroll naar secties
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar-effect bij scrollen
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // laat succesmelding zien als ?success=true in URL staat
    window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        const alertBox = document.getElementById('success-alert');
        alertBox.classList.add('show');

        // Verberg na 5 seconden automatisch
        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 5000);
    }
});
