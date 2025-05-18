document.addEventListener('DOMContentLoaded', () => {
    const techniquesContainer = document.getElementById('techniques-container');
    const categoryFilter = document.getElementById('category-filter');
    const sortByFilter = document.getElementById('sort-by');
    const searchInput = document.getElementById('search');

    let currentTechniques = [...jailbreakData];

    function renderTechniques(techniquesToRender) {
        techniquesContainer.innerHTML = '';
        techniquesToRender.forEach(tech => {
            const card = `
                <div class="technique-card" data-id="${tech.id}">
                    <div class="technique-header">
                        <h3 class="technique-title">${tech.name}</h3>
                        <div class="technique-meta">
                            <span><i class="fas fa-calendar-alt"></i> ${tech.date}</span>
                            <span class="technique-category">${tech.category}</span>
                        </div>
                    </div>
                    <div class="technique-body">
                        <p class="technique-description">${tech.description}</p>
                        <div class="technique-section">
                            <h4>Mechanism:</h4>
                            <p>${tech.mechanism}</p>
                        </div>
                        <div class="technique-section">
                            <h4>Effectiveness:</h4>
                            <p>${tech.effectiveness}</p>
                        </div>
                         <div class="technique-section">
                            <h4>Source:</h4>
                            <p>${tech.source}</p>
                        </div>
                    </div>
                    <div class="technique-footer">
                        <div class="technique-links">
                            ${tech.implementation !== 'Not publicly available' ? `<a href="${tech.implementation}" target="_blank"><i class="fab fa-github"></i> Implementation</a>` : '<span>No Public Implementation</span>'}
                            <a href="${tech.reference}" target="_blank"><i class="fas fa-file-alt"></i> Reference Paper</a>
                        </div>
                    </div>
                </div>
            `;
            techniquesContainer.innerHTML += card;
        });
    }

    function filterAndSortTechniques() {
        let filteredTechniques = [...jailbreakData];

        // Category filter
        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== 'all') {
            filteredTechniques = filteredTechniques.filter(tech => tech.category === selectedCategory);
        }

        // Search filter
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredTechniques = filteredTechniques.filter(tech => 
                tech.name.toLowerCase().includes(searchTerm) ||
                tech.description.toLowerCase().includes(searchTerm) ||
                tech.mechanism.toLowerCase().includes(searchTerm) ||
                tech.category.toLowerCase().includes(searchTerm)
            );
        }

        // Sort
        const sortBy = sortByFilter.value;
        switch (sortBy) {
            case 'date-desc':
                filteredTechniques.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'date-asc':
                filteredTechniques.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'effectiveness-desc':
                 filteredTechniques.sort((a, b) => (b.success_rate || 0) - (a.success_rate || 0));
                break;
            case 'name-asc':
                filteredTechniques.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
        
        currentTechniques = filteredTechniques;
        renderTechniques(currentTechniques);
    }
    
    categoryFilter.addEventListener('change', filterAndSortTechniques);
    sortByFilter.addEventListener('change', filterAndSortTechniques);
    searchInput.addEventListener('input', filterAndSortTechniques);

    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Update active class
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initial render
    filterAndSortTechniques();
});