document.addEventListener("DOMContentLoaded", function() {
    // Typing effect for the greeting
    var greetingOptions = {
        strings: ["Hi, I'm <strong>Haarisah</strong>."],
        typeSpeed: 100,   // Speed of typing (milliseconds per character)
        backSpeed: 50,    // Speed of erasing (milliseconds per character)
        backDelay: 1500,  // Delay before erasing text (in milliseconds)
        startDelay: 500,  // Delay before typing starts (in milliseconds)
        loop: false,      // Don't loop the typing effect
        showCursor: false, // Don't show the cursor for greeting
        contentType: 'html', // Support HTML tags (like <strong>)
    };

    // Typing effect for the greeting text
    var typedGreeting = new Typed("#greeting", greetingOptions);

    // Typing effect for the subtext
    var subtextOptions = {
        strings: ["I'm an aspiring software developer with a passion for digital and tech'."],
        typeSpeed: 80,   // Speed of typing (milliseconds per character)
        backSpeed: 50,    // Speed of erasing (milliseconds per character)
        backDelay: 1500,  // Delay before erasing text (in milliseconds)
        startDelay: 2800,  // Delay before typing starts (in milliseconds)
        loop: false,      // Don't loop the typing effect
        showCursor: false, // Don't show the cursor for greeting
        contentType: 'html', // Support HTML tags (like <strong>)
    };

    // Typing effect for the subtext
    var typedSubtext = new Typed("#subtext", subtextOptions);

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Apply show class when content-container is in view
    window.addEventListener('scroll', function() {
        const contentContainer = document.querySelector('.content-container');
        if (isElementInViewport(contentContainer)) {
            contentContainer.classList.add('show');
        }
    });
});