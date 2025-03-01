document.getElementById('hamburger-menu').addEventListener('click', function() {
    // Toggle the 'active' class on the hamburger menu and the navigation links
    this.classList.toggle('active');
    document.querySelector('.navbar ul').classList.toggle('active');
});
