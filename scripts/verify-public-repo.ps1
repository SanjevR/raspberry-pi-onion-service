$ErrorActionPreference = "Stop"

$Root = (Resolve-Path "$PSScriptRoot\..").Path

Write-Host "Scanning public repository:"
Write-Host $Root
Write-Host ""

$Files = Get-ChildItem -Path $Root -Recurse -File |
    Where-Object { $_.FullName -notmatch '[\\/]\.git[\\/]' }

$Checks = @(
    @{
        Name = "Private key material"
        Pattern = '-----BEGIN (OPENSSH|RSA|EC|DSA) PRIVATE KEY-----'
    },
    @{
        Name = "Tor v3 onion address"
        Pattern = '\b[a-z2-7]{56}\.onion\b'
    },
    @{
        Name = "AWS access key"
        Pattern = '\bAKIA[0-9A-Z]{16}\b'
    }
)

$FoundProblem = $false

foreach ($Check in $Checks) {
    $Matches = $Files | Select-String -Pattern $Check.Pattern -CaseSensitive:$false

    if ($Matches) {
        Write-Host "[WARNING] $($Check.Name) found:" -ForegroundColor Red
        $Matches | ForEach-Object {
            Write-Host "  $($_.Path):$($_.LineNumber)"
        }
        $FoundProblem = $true
    }
    else {
        Write-Host "[PASS] $($Check.Name)" -ForegroundColor Green
    }
}

Write-Host ""

if ($FoundProblem) {
    Write-Host "Repository verification FAILED. Review the warnings before publishing." -ForegroundColor Red
    exit 1
}

Write-Host "Repository verification PASSED." -ForegroundColor Green
Write-Host "No obvious private keys, live v3 onion addresses, or AWS access keys were detected."
exit 0
