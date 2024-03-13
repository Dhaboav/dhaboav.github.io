// Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')
    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger menu
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Kirim kontak form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyTjHurWK7HAxE9B3O_uVIsi1RNA82N8AxVDUf04XYOencQQaQfgoI38CXbLjhLSKuJ/exec';
const form = document.forms['contacts-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const alertNotif = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    // Ketika tombol kirim diklik
    // Tampilkan tombol loading hilangkan tombol kirim
    btnLoading.classList.toggle('hidden');
    btnKirim.classList.toggle('hidden');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Tampilkan tombol kirim hilangkan tombol loading
            btnLoading.classList.toggle('hidden');
            btnKirim.classList.toggle('hidden');

            // tampilkan alert
            alertNotif.classList.remove('hidden');
            alertNotif.classList.add('flex')

            // Reset form
            form.reset();

            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message));
});

// Close button  alert
const closeButton = document.querySelector('#alert-3 button[data-dismiss-target="#alert-3"]');
if (closeButton) {
    closeButton.addEventListener('click', function() {
        // Sembunyikan alert ketika tombol "Close" diklik
        alertNotif.classList.add('hidden');
    });
}