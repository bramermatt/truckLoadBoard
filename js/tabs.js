document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    const checkboxes = document.querySelectorAll('.tab-options input[type="checkbox"]');

    // Tab switching logic
    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Add active class to clicked tab and corresponding content
            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
            this.classList.add("active");
        });
    });

    // Toggle the tab options dropdown
    const toggleBtn = document.querySelector('.toggle-btn');
    const tabToggler = document.querySelector('.tab-toggler');

    toggleBtn.addEventListener('click', function() {
        tabToggler.classList.toggle('active');
    });

    // Handle the visibility of tabs based on checkboxes
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const tabSelector = `.tab-button[data-tab="${this.id}"]`;
            const tab = document.querySelector(tabSelector);

            if (this.checked) {
                tab.style.display = 'inline-block';
            } else {
                tab.style.display = 'none';

                // If the tab is unchecked, deactivate its content
                const contentId = this.id; // Assuming the content ID matches the checkbox ID
                const content = document.getElementById(contentId);
                if (content) {
                    content.classList.remove("active");
                }
            }
        });
    });

    // Reset button functionality
    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', function() {
        // Check all checkboxes and display all tabs
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
            const tabSelector = `.tab-button[data-tab="${checkbox.id}"]`;
            const tab = document.querySelector(tabSelector);
            tab.style.display = 'inline-block';

            // Show corresponding content
            const content = document.getElementById(checkbox.id);
            if (content) {
                content.classList.add("active");
            }
        });
    });

    // Uncheck all but active button functionality
    const uncheckAllButActiveBtn = document.querySelector('.uncheck-btn');
    uncheckAllButActiveBtn.addEventListener('click', function() {
        const activeTab = document.querySelector('.tab-button.active');
        const activeTabId = activeTab.getAttribute('data-tab');

        checkboxes.forEach(function(checkbox) {
            const tabSelector = `.tab-button[data-tab="${checkbox.id}"]`;
            const tab = document.querySelector(tabSelector);

            if (checkbox.id === activeTabId) {
                checkbox.checked = true;
                tab.style.display = 'inline-block';
                const content = document.getElementById(activeTabId);
                if (content) {
                    content.classList.add("active");
                }
            } else {
                checkbox.checked = false;
                tab.style.display = 'none';
                const content = document.getElementById(checkbox.id);
                if (content) {
                    content.classList.remove("active");
                }
            }
        });
    });
});
