$files = Get-ChildItem -Filter *.html

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    # Update Logo
    $content = $content -replace '<div class="logo-icon">S</div>\s*<span class="logo-text">SOFE SECURITY</span>\s*<span class="logo-badge">Enterprise</span>', '<span class="logo-text" style="font-weight: 700; letter-spacing: 1px;">SOFE GROUP</span>'
    
    # Add Categories link before Catalog if not exists
    if ($content -notmatch 'href="categories.html"') {
        $content = $content -replace '<li><a href="catalog.html"', '<li><a href="categories.html" class="nav-link">Categorías</a></li>`n        <li><a href="catalog.html"'
    }

    # Update Footer Link
    $content = $content -replace '\.\.\/\.\.\/\.\.\/00-Holding Sofe Group\/website\/index\.html', 'https://sofe.group'

    Set-Content $file.FullName -Value $content -Encoding UTF8
}
