// when active class is clicked, scroll on top
// navigation
document.querySelector('.active').addEventListener('click', function() {
    window.scrollTo(0, 0);
});

const contactIcons = ['tele_ic', 'gh_ic', 'strv_ic', 'link_ic'];
const iconHover = document.querySelector('#icon-hover');

for(let i = 0; i < contactIcons.length; i++) {
    var icon = document.querySelector('#' + contactIcons[i]);
    icon.addEventListener('mouseenter', function(e) {
        iconHover.textContent = 'Hovering';
    });

    icon.addEventListener('mouseout', function(e) {
        iconHover.textContent = 'Not hovering';
    });
}