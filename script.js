window.addEventListener('scroll', () => {
    let heroSection = document.querySelector('.hero');
    let profileImage = document.querySelector('.profile-img');

    if (window.scrollY > 50) {
        profileImage.classList.add('scrolled');
    } else {
        profileImage.classList.remove('scrolled');
    }
});
