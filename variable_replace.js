const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\madhu\\Desktop\\outpass\\frontend\\src';

const replacements = [
    { old: /var\(--primary-violet\)/gi, new: 'var(--primary-emerald)' },
    { old: /var\(--primary-indigo\)/gi, new: 'var(--primary-emerald)' },
    { old: /var\(--primary-blue\)/gi, new: 'var(--primary-emerald)' },
    { old: /var\(--bg-blue\)/gi, new: 'var(--bg-emerald)' },
    { old: /#6366f1/gi, new: '#10b981' }, // Safety check for any missed ones
    { old: /#8b5cf6/gi, new: '#10b981' }
];

function processDir(directory) {
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.css') || file.endsWith('.jsx') || file.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            replacements.forEach(r => {
                if (r.old.test(content)) {
                    content = content.replace(r.old, r.new);
                    changed = true;
                }
            });
            if (changed) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated: ${fullPath}`);
            }
        }
    });
}

processDir(srcDir);
console.log('Variable replacement complete.');
