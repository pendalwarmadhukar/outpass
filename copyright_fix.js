const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\madhu\\Desktop\\outpass\\frontend\\src';
const newCopyright = "© {new Date().getFullYear()} • {process.env.REACT_APP_PRODUCT_NAME || 'Digital Pass'} • Official Portal";

function processDir(directory) {
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            
            // Look for the dashboard-footer type pattern
            const regex = /© 2024 - \{process\.env\.REACT_APP_PRODUCT_NAME \|\| 'PassPortal'\}\. All rights reserved\./g;
            if (regex.test(content)) {
                content = content.replace(regex, newCopyright);
                changed = true;
            }

            // Also generic 2024
            const regex2 = /© 2024/g;
            if (regex2.test(content)) {
                content = content.replace(regex2, `© {new Date().getFullYear()}`);
                changed = true;
            }

            if (changed) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated: ${fullPath}`);
            }
        }
    });
}

processDir(srcDir);
console.log('Copyright fix complete.');
