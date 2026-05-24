const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Update Logo
    content = content.replace(
        /<div class="logo-icon">S<\/div>\s*<span class="logo-text">SOFE SECURITY<\/span>\s*<span class="logo-badge">Enterprise<\/span>/g,
        '<span class="logo-text" style="font-weight: 700; letter-spacing: 1px;">SOFE GROUP</span>'
    );

    // Add Categories link
    if (!content.includes('href="categories.html"')) {
        content = content.replace(
            /<li><a href="catalog\.html"/g,
            '<li><a href="categories.html" class="nav-link">Categorías</a></li>\n        <li><a href="catalog.html"'
        );
    }

    // Update Footer link
    content = content.replace(
        /\.\.\/\.\.\/\.\.\/00-Holding Sofe Group\/website\/index\.html/g,
        'https://sofe.group'
    );

    // Update footer Logo
    content = content.replace(
        /<div class="logo-icon">S<\/div>\n\s*<span class="logo-text">SOFE SECURITY<\/span>/g,
        '<span class="logo-text" style="font-weight: 700; letter-spacing: 1px;">SOFE GROUP</span>'
    );

    fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Done!');
