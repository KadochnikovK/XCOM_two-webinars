function setUniformTimeCellWidth() {
    const timeCells = document.querySelectorAll('.schedule__cell--time');
    if (timeCells.length === 0) return;

    timeCells.forEach(cell => {
        cell.style.width = '';
        cell.style.minWidth = '';
    });


    let maxWidth = 0;
    timeCells.forEach(cell => {
        const rect = cell.getBoundingClientRect();
        const width = rect.width;
        if (width > maxWidth) {
            maxWidth = width;
        }
    });

    timeCells.forEach(cell => {
        cell.style.minWidth = `${maxWidth}px`;
    });
}


let resizeTimer;
function optimizeResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setUniformTimeCellWidth, 100);
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setUniformTimeCellWidth);
} else {
    setUniformTimeCellWidth();
}

window.addEventListener('load', setUniformTimeCellWidth);
window.addEventListener('resize', optimizeResize);


const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
            const hasTimeCells = Array.from(mutation.addedNodes).some(node => {
                if (node.nodeType === 1) {
                    return node.matches('.schedule__cell--time') ||
                        node.querySelector('.schedule__cell--time');
                }
                return false;
            });
            if (hasTimeCells) {
                setTimeout(setUniformTimeCellWidth, 50);
            }
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});