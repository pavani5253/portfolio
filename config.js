function updateParticlesForTheme() {
    // Check if the body has the "dark-mode" class
    let isDarkMode = document.body.classList.contains("dark-mode");

    // Initialize the particlesJS library with settings
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: isDarkMode ? "#00ffff" : "#ff6600" // Cyan in dark mode, Orange in light mode
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.6,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                }
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                }
            }
        }
    });
}

// Ensure particles are updated based on the current theme when the page loads
document.addEventListener("DOMContentLoaded", updateParticlesForTheme);
