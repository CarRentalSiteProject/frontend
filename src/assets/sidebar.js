
window.addEventListener('scroll', function () {
    var sidebar = document.getElementById('sidebar');
    var footer = document.querySelector('footer');
    var sidebarBottom = sidebar.getBoundingClientRect().bottom;
    var footerTop = footer.getBoundingClientRect().top;

    if (sidebarBottom > footerTop) {
      sidebar.style.position = 'absolute';
      sidebar.style.bottom = '150px'; /* Adjust this value according to your footer height */
    } else {
      sidebar.style.position = 'sticky';
      sidebar.style.bottom = 'auto';
    }
});