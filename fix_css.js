const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

css = css.replace(
    /background: linear-gradient\(to right, rgba\(0,0,0,0\.6\) 0%, rgba\(0,0,0,0\.2\) 50%, transparent 100%\);/g,
    'background: linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.2) 100%);'
);

css = css.replace(
    /background: linear-gradient\(to top, rgba\(0,0,0,0\.8\) 0%, rgba\(0,0,0,0\.2\) 60%, transparent 100%\);/g,
    'background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%);'
);

fs.writeFileSync('css/style.css', css, 'utf8');
console.log('CSS overlays updated');
