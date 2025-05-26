document.addEventListener('DOMContentLoaded', function () {
    const vestingToggleBtn = document.getElementById('vestingToggleBtn');
    const vestingContent = document.getElementById('vestingContent');
    const toggleBtnText = vestingToggleBtn.querySelector('.btn-text span');
    const toggleBtnIcon = vestingToggleBtn.querySelector('svg');
    let isExpanded = false;

    vestingToggleBtn.addEventListener('click', function () {
        if (isExpanded) {
            vestingContent.style.maxHeight = '0';
            toggleBtnText.textContent = 'View more';
            toggleBtnIcon.style.transform = 'rotate(0deg)';
        } else {
            vestingContent.style.maxHeight = vestingContent.scrollHeight + 'px';
            toggleBtnText.textContent = 'Show less';
            toggleBtnIcon.style.transform = 'rotate(180deg)';
        }

        isExpanded = !isExpanded;
    });

    // Add hover effect for the button
    vestingToggleBtn.addEventListener('mouseenter', function () {
        this.querySelector('.btn-bg').style.width = '100%';
        this.style.color = 'white';
        toggleBtnIcon.querySelector('path').setAttribute('stroke', 'white');
    });

    vestingToggleBtn.addEventListener('mouseleave', function () {
        this.querySelector('.btn-bg').style.width = '0';
        this.style.color = '#703BFF';
        toggleBtnIcon.querySelector('path').setAttribute('stroke', '#703BFF');
    });
});