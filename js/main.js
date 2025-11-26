function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function scrollToNextSection(currentSection) {
    const nextSection = currentSection.nextElementSibling;
    if (nextSection && nextSection.classList.contains('page')) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav_button a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
            }
        });
    });

    const pageFooters = document.querySelectorAll('.page_footer');
    pageFooters.forEach((footer, index) => {
        footer.style.cursor = 'pointer';

        footer.addEventListener('click', function () {
            const currentSection = this.closest('.page');
            scrollToNextSection(currentSection);
        });

        if (index === pageFooters.length - 1) {
            footer.style.display = 'none';
        }
    });
});
