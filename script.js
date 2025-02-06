function showMassage() {
    alert('Haloo! Monyet');
}

document.getElementById('contactForm').addEventListener('submit',
    function(e) {
        e.preventDefault();
        alert('Pesan terkirim! Terimakasih opang.');
        this.requestFullscreen();
    });

    // Smooth Scroll

    document.querySelectorAll('a[href ^="#"]').forEach(anchor => {
        anchor.addEventListener('click',
            function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')) .scrollIntoView({
                    behavior: 'smooth'
                });
            });
    });