function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (sectionId === "home") {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    else if (section) {
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
    const titleLink = document.querySelector('.title_link')
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
                hamburger.classList.toggle('is-active');
                navmenu.classList.toggle('is-open');
            }
        });
    });

    titleLink.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const sectionId = href.substring(1);
            scrollToSection(sectionId);
        }
    });

    const pageFooters = document.querySelectorAll('.page_footer');
    pageFooters.forEach((footer, index) => {
        footer.style.cursor = 'pointer';

        footer.addEventListener('click', function () {
            const currentSection = this.closest('.page');
            scrollToNextSection(currentSection);
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navmenu = document.querySelector('.nav_list')
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
        navmenu.classList.toggle('is-open');
    });
});

/* disgusting hack idfk how to fix */
setTimeout(() => {
    window.scrollTo(0, 0);
}, 3);