document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    function animateProgressBars(entries) {
        entries.forEach(entry => {
            const progressBar = entry.target;

            if (entry.isIntersecting) {
                // Store the original width for animation
                const targetWidth = progressBar.getAttribute('data-target-width');

                // Reset the width to 0 to ensure animation starts from 0
                progressBar.style.width = '0';

                // Trigger reflow to ensure the reset width is applied
                progressBar.offsetHeight;

                // Set the transition property
                progressBar.style.transition = 'width 3s';

                // Start the animation after a short delay
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 100);
            } else {
                // Reset width when the progress bar is out of view
                progressBar.style.width = '0';
            }
        });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(animateProgressBars, {
        threshold: 0.1 // Adjust as needed to determine when the element is considered in view
    });

    // Set data-target-width attribute and start observing
    progressBars.forEach(progressBar => {
        // Store the target width as an attribute
        progressBar.setAttribute('data-target-width', progressBar.style.width);
        // Set initial width to 0
        progressBar.style.width = '0'; 
        observer.observe(progressBar);
    });
});
