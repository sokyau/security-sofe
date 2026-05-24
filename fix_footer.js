const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix the footer brand (the previous regex had a newline matching issue)
    content = content.replace(
        /<div class="logo-icon">S<\/div>\s*<span class="logo-text">SOFE SECURITY<\/span>/g,
        '<span class="logo-text" style="font-weight: 700; letter-spacing: 1px;">SOFE GROUP</span>'
    );

    fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Footers fixed!');
