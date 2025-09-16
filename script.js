// Section Navigation with Smooth Transitions
function showSection(section) {
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
    });

    let target = document.getElementById(section);
    if (target) {
        target.classList.add("active");
    }

    if (section === "home") {
        document.querySelectorAll(".sub-section").forEach(sub => sub.style.display = "none");
    }

    // Update active nav state
    document.querySelectorAll("nav ul li").forEach(li => li.classList.remove("active"));
    const activeNav = document.querySelector(`nav ul li[data-section="${section}"]`);
    if (activeNav) activeNav.classList.add("active");
}

// Home Subsection Toggle
function showSubSection(sub) {
    document.querySelectorAll(".sub-section").forEach(sec => sec.style.display = "none");
    let el = document.getElementById(sub);
    if (el) {
        el.style.display = "block";
    }
}

// Internship & Workshop Details Toggle
function showDetails(id) {
    const details = {
        "intern-palo": { title: "Palo Alto Cybersecurity (Eduskills)", body: "<p>Gained practical knowledge of cybersecurity concepts, tools, and techniques.</p><a href='palo-alto.pdf' target='_blank' rel='noopener noreferrer'>View Certificate</a>" },
        "intern-juniper": { title: "Juniper Networking Cloud (Eduskills)", body: "<p>Worked on cloud networking solutions and learned the fundamentals of cloud technologies.</p><a href='juniper.pdf' target='_blank' rel='noopener noreferrer'>View Certificate</a>" },
        "intern-ai": { title: "AI Internship (Skilldizire)", body: "<p>Focused on integrating AI and IoT applications.</p><a href='ai.pdf' target='_blank' rel='noopener noreferrer'>View Certificate</a>" },
        "workshop-iot": { title: "IoT & Machine Learning (Spypro Security)", body: "<p>Focused on integrating IoT systems with machine learning applications.</p><a href='iot.pdf' target='_blank' rel='noopener noreferrer'>View Certificate</a>" },
        "project-portfolio": { title: "Personal Portfolio Website", body: "<p>Responsive personal portfolio showcasing skills, internships, and projects.</p><a href='https://github.com/pavani5253' target='_blank' rel='noopener noreferrer'>View Source</a>" },
        "project-fyp": { title: "Final Year Project", body: "<p>Capstone project currently in development. Includes research, design, and implementation phases.</p><p><em>Status:</em> In Progress</p><a href='#' target='_blank' rel='noopener noreferrer'>Project Repo (coming soon)</a>" }
    };

    let detailsContainer;
    if (id.startsWith("intern")) {
        detailsContainer = document.getElementById("internship-details");
    } else if (id.startsWith("workshop")) {
        detailsContainer = document.getElementById("workshop-details");
    } else if (id.startsWith("project")) {
        detailsContainer = document.getElementById("project-details");
    }

    if (detailsContainer) {
        const data = details[id];
        if (!data) {
            detailsContainer.innerHTML = "<p>No details available.</p>";
        } else {
            const content = `<h3 class="detail-title">${data.title}</h3>${data.body}`;
            detailsContainer.innerHTML = detailsContainer.innerHTML.includes(content) ? "" : content;
        }
    }
}

// Attach Event Listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    showSection('home');

    // Nav links (click + keyboard)
    document.querySelectorAll("nav ul li").forEach(li => {
        li.addEventListener("click", () => showSection(li.dataset.section));
        li.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                showSection(li.dataset.section);
            }
        });
    });

    // Home menu buttons
    document.querySelectorAll(".home-menu button").forEach(btn => {
        btn.addEventListener("click", () => {
            showSubSection(btn.dataset.sub);
            btn.setAttribute("aria-expanded", "true");
        });
    });

    // Generic toggle for elements with data-toggle (supports skills and education CIC)
    document.querySelectorAll("[data-toggle]").forEach(toggleEl => {
        toggleEl.addEventListener("click", () => {
            const id = toggleEl.dataset.toggle;
            const section = document.getElementById(id);
            if (section) {
                const visible = section.style.display === "block";
                section.style.display = visible ? "none" : "block";
                if (typeof toggleEl.setAttribute === "function") {
                    toggleEl.setAttribute("aria-expanded", String(!visible));
                }
            }
        });
        toggleEl.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleEl.click();
            }
        });
    });

    // Details (internships, workshops, projects) with keyboard support + selected highlighting
    document.querySelectorAll("[data-detail]").forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll('[data-detail]').forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
            showDetails(item.dataset.detail);
        });
        item.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                item.click();
            }
        });
    });

    // Project filters
    const filterButtons = document.querySelectorAll('.project-filters button');
    const projectItems = document.querySelectorAll('#projects ul li[data-category]');
    function applyFilter(category) {
        projectItems.forEach(item => {
            const show = category === 'all' || item.dataset.category === category;
            item.style.display = show ? 'list-item' : 'none';
        });
    }
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            applyFilter(btn.dataset.filter);
        });
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
    applyFilter('all');

    // Theme toggle
    document.getElementById("theme-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        updateParticlesForTheme();
        document.getElementById("theme-toggle").textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateParticlesForTheme();
    document.getElementById("theme-toggle").textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
