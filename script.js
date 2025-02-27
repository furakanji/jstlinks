document.addEventListener('DOMContentLoaded', function() {
    const postLinkButton = document.getElementById('postLink');
    const descriptionInput = document.getElementById('description');
    const linkUrlInput = document.getElementById('linkUrl');
    const chronoTab = document.getElementById('chronoTab');
    const mostClickedTab = document.getElementById('mostClickedTab');
    const chronoLinksDiv = document.getElementById('chronoLinks');
    const mostClickedLinksDiv = document.getElementById('mostClickedLinks');

    // Example data for demonstration
    let links = [];
    let clicks = {};

    // Function to post a link
    postLinkButton.addEventListener('click', function() {
        const description = descriptionInput.value.trim();
        const url = linkUrlInput.value.trim();

        if (description && url) {
            const newLink = {
                description,
                url,
                clicks: 0
            };

            links.push(newLink);
            clicks[url] = 0;

            displayLinks();
            descriptionInput.value = '';
            linkUrlInput.value = '';
        }
    });

    // Function to display links
    function displayLinks() {
        chronoLinksDiv.innerHTML = '';
        mostClickedLinksDiv.innerHTML = '';

        links.forEach((link) => {
            const linkElement = document.createElement('div');
            linkElement.classList.add('link');
            linkElement.innerHTML = `
                <p>${link.description}</p>
                <p><a href="${link.url}" target="_blank">${link.url}</a></p>
            `;

            // Increment clicks on link click
            linkElement.querySelector('a').addEventListener('click', function() {
                clicks[link.url]++;
            });

            chronoLinksDiv.appendChild(linkElement);
        });

        // Sort links by clicks and display most clicked
        const sortedLinks = Object.keys(clicks).sort((a, b) => clicks[b] - clicks[a]).map(url => {
            return links.find(link => link.url === url);
        });

        sortedLinks.forEach((link) => {
            const linkElement = document.createElement('div');
            linkElement.classList.add('link');
            linkElement.innerHTML = `
                <p>${link.description}</p>
                <p><a href="${link.url}" target="_blank">${link.url}</a></p>
            `;

            mostClickedLinksDiv.appendChild(linkElement);
        });
    }

    // Tab functionality
    chronoTab.addEventListener('click', function() {
        chronoLinksDiv.style.display = 'block';
        mostClickedLinksDiv.style.display = 'none';
    });

    mostClickedTab.addEventListener('click', function() {
        chronoLinksDiv.style.display = 'none';
        mostClickedLinksDiv.style.display = 'block';
    });
});
