$filePath = "c:\Users\lucas\Documents\Projetos\OFERTA ODAT 1.0\index.html"
$content = Get-Content $filePath -Raw -Encoding UTF8

$ansi = [System.Text.Encoding]::GetEncoding(1252)
$utf8 = [System.Text.Encoding]::UTF8

$charsToFix = @(
    "ç", "ã", "á", "é", "í", "ó", "ú", "â", "ê", "ô", "õ", 
    "Ç", "Ã", "É", "Ó", "Õ", "Â", "Ê", "Ú", "À", "º", "ª", "—", "“", "”", "’", "á", "é", "í", "ó", "ú"
)

foreach ($c in $charsToFix) {
    # What the character originally looked like in bytes
    $originalBytes = $utf8.GetBytes($c)
    # What it got mangled into when read as ANSI
    $mangledString = $ansi.GetString($originalBytes)
    
    # Replace the mangled string with the correct character
    $content = $content.Replace($mangledString, $c)
}

# Special case for 'Ã ' (A tilde followed by non-breaking space or similar)
# Let's also do a pass for the generic case: any character in the file that was mangled.
# Actually, the specific replacements above cover 99% of Portuguese text.

# Save without BOM
$outBytes = $utf8.GetBytes($content)
[System.IO.File]::WriteAllBytes($filePath, $outBytes)
Write-Host "Encoding fixed!"
