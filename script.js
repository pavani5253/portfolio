// Section Navigation with Smooth Transitions
function showSection(section) {
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "none"; // Hide all sections
        sec.classList.remove("active");
    });

    let target = document.getElementById(section);
    target.style.display = "block";
    setTimeout(() => target.classList.add("active"), 100);

    // Reset home section content when "Home" is clicked
    if (section === "home") {
        document.querySelectorAll(".sub-section").forEach(sub => sub.style.display = "none");
    }
}

// Home Subsection Toggle
function showSubSection(sub) {
    document.querySelectorAll(".sub-section").forEach(sec => sec.style.display = "none");
    document.getElementById(sub).style.display = "block";
}

// Internship & Workshop Details Toggle
function showDetails(id) {
    const details = {
        "intern-palo": "<p>Gained practical knowledge of cybersecurity concepts, tools, and techniques.</p>",
        "intern-juniper": "<p>Worked on cloud networking solutions and learned the fundamentals of cloud technologies.</p>",
        "intern-ai": "<p>Focused on integrating AI and IoT applications.</p>",
        "workshop-iot": "<p>Focused on integrating IoT systems with machine learning applications.</p>"
    };

    let detailsContainer;
    if (id.startsWith("intern")) {
        detailsContainer = document.getElementById("internship-details");
    } else if (id.startsWith("workshop")) {
        detailsContainer = document.getElementById("workshop-details");
    }

    // Toggle visibility instead of clearing details every time
    if (detailsContainer.innerHTML.includes(details[id])) {
        detailsContainer.innerHTML = ""; // Hide if clicked again
    } else {
        detailsContainer.innerHTML = details[id] || "<p>No details available.</p>";
    }
}

// Dark Mode Toggle with Particle Update
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save theme preference in local storage
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");

    // Update particles when theme changes
    updateParticlesForTheme();

    // Update theme toggle button text
    document.getElementById("theme-toggle").textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Ensure the Home section is visible by default
document.addEventListener("DOMContentLoaded", () => {
    showSection('home');

    // Apply saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Ensure particles load correctly on page load
    updateParticlesForTheme();

    // Update theme toggle button text
    document.getElementById("theme-toggle").textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Toggle Skills Subsections (Technical & Soft Skills)
function toggleSkillSection(id) {
    let section = document.getElementById(id);
    section.style.display = section.style.display === "block" ? "none" : "block";
}
