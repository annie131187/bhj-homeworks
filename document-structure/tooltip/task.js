const tooltipLinks = [...document.querySelectorAll('.has-tooltip')];

tooltipLinks.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        removeTooltipActive();

        item.innerHTML += `
            <div class="tooltip">
                ${item.getAttribute('title')}
            </div>
        `
        let tooltip = document.querySelector('.tooltip');
        tooltip.classList.toggle('tooltip_active');
        
        let coords = item.getBoundingClientRect();
        tooltip.style.left = coords.left + 'px';
        tooltip.style.top = coords.top + item.offsetHeight + 'px';
    });
});

function removeTooltipActive() {
    let tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.classList.remove('tooltip_active');
        tooltip.remove(); 
    } else {
        return;
    }
}