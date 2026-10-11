param()

# Start the dev server in a new, minimized process from the project scripts folder
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $projectRoot

Write-Host "Starting dev server in: $projectRoot"

Start-Process -FilePath "npm" -ArgumentList "run","dev" -WorkingDirectory $projectRoot -WindowStyle Minimized

Write-Host "Dev server process started. Close this window if you like; the server runs separately."
