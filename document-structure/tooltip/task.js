const tooltipLinks = [...document.querySelectorAll('.has-tooltip')];

tooltipLinks.forEach(item => {
    item.addEventListener('click', evt => {
        evt.preventDefault();
        console.log(evt.type);
        console.log(evt.currentTarget);
        removeTooltipActive();
        
        item.insertAdjacentHTML("afterend", `
            <div class="tooltip">
                ${item.getAttribute('title')}
            </div>
        `);
        let tooltip = document.querySelector('.tooltip');
        tooltip.classList.add('tooltip_active');
        tooltip.style.cssText = 'position: absolute;'
        
        let coords = getCoords(item);
        tooltip.style.left = coords.left + 'px';
        tooltip.style.top = coords.bottom + 'px';
        
    });
});

function removeTooltipActive() {
    let tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.classList.remove('tooltip_active');
        tooltip.remove(); 
    }
}

function getCoords(item) {
    let box = item.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }