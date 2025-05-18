document.addEventListener('DOMContentLoaded', () => {
    // Prepare data for success rate chart
    const successRateData = jailbreakData
        .filter(tech => tech.success_rate !== null && tech.success_rate !== undefined)
        .sort((a, b) => b.success_rate - a.success_rate);

    const successRateLabels = successRateData.map(tech => tech.name);
    const successRateValues = successRateData.map(tech => tech.success_rate);
    
    // Success Rate Bar Chart
    const successRateCtx = document.getElementById('successRateChart').getContext('2d');
    new Chart(successRateCtx, {
        type: 'bar',
        data: {
            labels: successRateLabels,
            datasets: [{
                label: 'Attack Success Rate (%)',
                data: successRateValues,
                backgroundColor: 'rgba(37, 99, 235, 0.8)',
                borderColor: 'rgba(37, 99, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Success Rate (%)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Prepare data for category distribution chart
    const categoryCounts = jailbreakData.reduce((acc, tech) => {
        acc[tech.category] = (acc[tech.category] || 0) + 1;
        return acc;
    }, {});

    const categoryLabels = Object.keys(categoryCounts);
    const categoryValues = Object.values(categoryCounts);

    // Category Doughnut Chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: categoryLabels,
            datasets: [{
                label: 'Techniques by Category',
                data: categoryValues,
                backgroundColor: [
                    'rgba(239, 68, 68, 0.8)',  // Red
                    'rgba(245, 158, 11, 0.8)', // Amber
                    'rgba(16, 185, 129, 0.8)',// Emerald
                    'rgba(59, 130, 246, 0.8)',// Blue
                    'rgba(139, 92, 246, 0.8)' // Violet
                ],
                borderColor: [
                    'rgba(239, 68, 68, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(139, 92, 246, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
});