function updateParticlesForTheme() {
    // Destroy existing instance before re-initializing
    if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
    }

    let isDarkMode = document.body.classList.contains("dark-mode");

    particlesJS("particles-js", {
        particles: {
            number: { value: isDarkMode ? 100 : 110, density: { enable: true, value_area: 1000 } },
            color: { value: isDarkMode ? "#0ea5e9" : "#6b7280" },
            shape: { type: "circle" },
            opacity: { value: isDarkMode ? 0.55 : 0.5, random: true },
            size: { value: isDarkMode ? 2.6 : 2.6, random: true },
            move: { enable: true, speed: isDarkMode ? 2.2 : 2.0 },
            line_linked: { enable: true, distance: 140, color: isDarkMode ? "#67e8f9" : "#94a3b8", opacity: isDarkMode ? 0.25 : 0.35, width: 1 }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 120, duration: 0.35 } }
        }
    });
}

document.addEventListener("DOMContentLoaded", updateParticlesForTheme);
