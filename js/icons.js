// Load SVG icons from external file
document.addEventListener('DOMContentLoaded', function() {
    fetch('img/icons.svg')
        .then(response => response.text())
        .then(svg => {
            const div = document.createElement('div');
            div.innerHTML = svg;
            div.style.display = 'none';
            document.body.insertBefore(div, document.body.firstChild);
        })
        .catch(error => {
            console.error('Error loading SVG icons:', error);
        });
});
