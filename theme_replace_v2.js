const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\madhu\\Desktop\\outpass\\frontend\\src';

const replacements = [
    { old: /#1a237e/gi, new: '#064e3b' },
    { old: /#1565c0/gi, new: '#064e3b' },
    { old: /#1976d2/gi, new: '#065f46' },
    { old: /#2196f3/gi, new: '#10b981' },
    { old: /#1e88e5/gi, new: '#10b981' },
    { old: /#42a5f5/gi, new: '#10b981' },
    { old: /#6366f1/gi, new: '#059669' },
    { old: /#8b5cf6/gi, new: '#0d9488' },
    { old: /#64b5f6/gi, new: '#34d399' },
    { old: /#bbdefb/gi, new: '#a7f3d0' },
    { old: /#e3f2fd/gi, new: '#ecfdf5' },
    { old: /#f8fafc/gi, new: '#f1f5f9' },
    { old: /#4f46e5/gi, new: '#047857' },
    { old: /#a855f7/gi, new: '#0f766e' },
    { old: /#f3e5f5/gi, new: '#f0fdf4' }
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
console.log('Global replacement complete.');
