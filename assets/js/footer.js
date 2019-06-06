const footerLists = document.querySelectorAll('.footer-list');

function footerListOpen() {
    footerLists.forEach(footerList => {
        footerList.addEventListener('click', (e) => {
            if (e.target.id === 'contact-us') {
                const contactUsList = document.querySelector('#contact-us+.footer-list-options');
                contactUsList.classList.toggle('footer-list-display');
            } else if (e.target.id === 'about') {
                const aboutList = document.querySelector('#about+.footer-list-options');
                aboutList.classList.toggle('footer-list-display');
            } else if (e.target.id === 'social') {
                const socialList = document.querySelector('#social+.footer-list-options');
                socialList.classList.toggle('footer-list-display');
            }
        });
    });
}

function main() {
    footerListOpen();
}

window.onload = main();