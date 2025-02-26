{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', function() \{\
    const postLinkButton = document.getElementById('postLink');\
    const descriptionInput = document.getElementById('description');\
    const linkUrlInput = document.getElementById('linkUrl');\
    const chronoTab = document.getElementById('chronoTab');\
    const mostClickedTab = document.getElementById('mostClickedTab');\
    const chronoLinksDiv = document.getElementById('chronoLinks');\
    const mostClickedLinksDiv = document.getElementById('mostClickedLinks');\
\
    // Example data for demonstration\
    let links = [];\
    let clicks = \{\};\
\
    // Function to post a link\
    postLinkButton.addEventListener('click', function() \{\
        const description = descriptionInput.value.trim();\
        const url = linkUrlInput.value.trim();\
\
        if (description && url) \{\
            const newLink = \{\
                description,\
                url,\
                clicks: 0\
            \};\
\
            links.push(newLink);\
            clicks[url] = 0;\
\
            displayLinks();\
            descriptionInput.value = '';\
            linkUrlInput.value = '';\
        \}\
    \});\
\
    // Function to display links\
    function displayLinks() \{\
        chronoLinksDiv.innerHTML = '';\
        mostClickedLinksDiv.innerHTML = '';\
\
        links.forEach((link) => \{\
            const linkElement = document.createElement('div');\
            linkElement.classList.add('link');\
            linkElement.innerHTML = `\
                <p>$\{link.description\}</p>\
                <p><a href="$\{link.url\}" target="_blank">$\{link.url\}</a></p>\
            `;\
\
            // Increment clicks on link click\
            linkElement.querySelector('a').addEventListener('click', function() \{\
                clicks[link.url]++;\
            \});\
\
            chronoLinksDiv.appendChild(linkElement);\
        \});\
\
        // Sort links by clicks and display most clicked\
        const sortedLinks = Object.keys(clicks).sort((a, b) => clicks[b] - clicks[a]).map(url => \{\
            return links.find(link => link.url === url);\
        \});\
\
        sortedLinks.forEach((link) => \{\
            const linkElement = document.createElement('div');\
            linkElement.classList.add('link');\
            linkElement.innerHTML = `\
                <p>$\{link.description\}</p>\
                <p><a href="$\{link.url\}" target="_blank">$\{link.url\}</a></p>\
            `;\
\
            mostClickedLinksDiv.appendChild(linkElement);\
        \});\
    \}\
\
    // Tab functionality\
    chronoTab.addEventListener('click', function() \{\
        chronoLinksDiv.style.display = 'block';\
        mostClickedLinksDiv.style.display = 'none';\
    \});\
\
    mostClickedTab.addEventListener('click', function() \{\
        chronoLinksDiv.style.display = 'none';\
        mostClickedLinksDiv.style.display = 'block';\
    \});\
\});\
}