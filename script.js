const projects = [
    {
        id: "PRJ-01",
        title: "ESPERA Power Solutions",
        url: "https://god844.github.io/ESPERA_POWER_SOLUTIONS/",
        visualClass: "visual-espera",
        category: "Freelance",
        accent: "#4F46E5",
        shapeHTML: `
            <div class="shape-container">
                <div class="cube">
                    <div class="face front"></div><div class="face back"></div>
                    <div class="face top"></div><div class="face bottom"></div>
                    <div class="face left"></div><div class="face right"></div>
                </div>
            </div>`
    },
    {
        id: "PRJ-02",
        title: "Aspire Electric",
        url: "https://god844.github.io/Aspire/",
        visualClass: "visual-aspire",
        category: "Freelance",
        accent: "#EC4899",
        shapeHTML: `
            <div class="shape-container">
                <div class="orbits">
                    <div class="ring ring1"></div>
                    <div class="ring ring2"></div>
                    <div class="ring ring3"></div>
                    <div class="core"></div>
                </div>
            </div>`
    },
    {
        id: "PRJ-03",
        title: "Planet Solution Work",
        url: "https://tailoring-company-production.up.railway.app/login",
        visualClass: "visual-planet",
        category: "Enterprise",
        accent: "#10B981",
        shapeHTML: `
            <div class="shape-container">
                <div class="sphere">
                    <div class="circle c1"></div>
                    <div class="circle c2"></div>
                    <div class="circle c3"></div>
                    <div class="circle c4"></div>
                </div>
            </div>`
    },
    {
        id: "PRJ-04",
        title: "FarmLink AI Detection",
        url: "https://ansonsaju.github.io/Farmlink/",
        visualClass: "visual-farmlink",
        category: "AI & IoT",
        accent: "#EAB308",
        shapeHTML: `
            <div class="shape-container">
                <div class="pyramid">
                    <div class="face-p front-p"></div>
                    <div class="face-p back-p"></div>
                    <div class="face-p left-p"></div>
                    <div class="face-p right-p"></div>
                    <div class="base-p"></div>
                </div>
            </div>`
    },
    {
        id: "PRJ-05",
        title: "Personal Portfolio v1",
        url: "https://ansonsaju.github.io/protofolio/home",
        visualClass: "visual-portfolio",
        category: "Identity",
        accent: "#64748B",
        shapeHTML: `
            <div class="shape-container">
                <div class="glass-stack">
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="layer layer3"></div>
                </div>
            </div>`
    }
];

const gridContainer = document.getElementById('project-grid');

function renderProjects() {
    projects.forEach((proj, index) => {
        // Staggered entry animation delay
        const delay = 0.15 * (index + 1);

        const card = document.createElement('a');
        card.href = proj.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.className = "project-card";

        // Setup initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.animation = `slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s forwards`;

        card.innerHTML = `
            <div class="card-visual">
                <div class="visual-content ${proj.visualClass}">
                    ${proj.shapeHTML}
                </div>
            </div>
            <div class="card-data">
                <div class="project-category" style="color: ${proj.accent}; background: ${proj.accent}15">${proj.category}</div>
                <h3 class="project-title">${proj.title}</h3>
                <div class="project-link">
                    View Project
                    <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
            </div>
        `;

        gridContainer.appendChild(card);
    });
}

// Ensure smooth initialization
window.addEventListener('load', () => {
    // Slight delay to ensure CSS is fully parsed before firing DOM animations
    setTimeout(renderProjects, 100);
});
