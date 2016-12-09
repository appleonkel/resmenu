function menuClick() {
    var menu = document.getElementById('resmenu');
    if (menu.className === 'resmenu') {
        menu.className += ' open';
    } else {
        menu.className = 'resmenu';
    }
}
