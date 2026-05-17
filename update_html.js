const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove projects links
html = html.replace(/<a href="#"><i class='bx bx-link-external'><\/i><\/a>/g, '');

// 2. Remove Github Calendar section
// Match from <!-- GitHub Activity Section --> to exactly before <!-- Contact Section -->
html = html.replace(/<!-- GitHub Activity Section -->[\s\S]*?(?=<!-- Contact Section -->)/i, '');

// 3. Update Certifications
html = html.replace(/Salesforce Agentforce Specialist, Cisco Networks & Python, Coursera UX Design & Communication\./g, 'AWS Cloud Practitioner, Salesforce Agentforce Specialist, Cisco Networks & Python, Coursera UX Design & Communication.');

fs.writeFileSync('index.html', html);
