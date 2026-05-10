$filePath = "c:\Users\lucas\Documents\Projetos\OFERTA ODAT 1.0\index.html"
$content = Get-Content $filePath -Raw -Encoding UTF8

$ansi = [System.Text.Encoding]::GetEncoding(1252)
$utf8 = [System.Text.Encoding]::UTF8

$charsToFix = @(
    [char]0xE7, [char]0xE3, [char]0xE1, [char]0xE9, [char]0xED, [char]0xF3, [char]0xFA, 
    [char]0xE2, [char]0xEA, [char]0xF4, [char]0xF5, [char]0xC7, [char]0xC3, [char]0xC9, 
    [char]0xD3, [char]0xD5, [char]0xC2, [char]0xCA, [char]0xDA, [char]0xC0, [char]0xBA, 
    [char]0xAA, [char]0x2014, [char]0x201C, [char]0x201D, [char]0x2019
)

foreach ($c in $charsToFix) {
    $cStr = [string]$c
    $originalBytes = $utf8.GetBytes($cStr)
    $mangledString = $ansi.GetString($originalBytes)
    $content = $content.Replace($mangledString, $cStr)
}

$outBytes = $utf8.GetBytes($content)
[System.IO.File]::WriteAllBytes($filePath, $outBytes)
Write-Host "Encoding fixed!"
