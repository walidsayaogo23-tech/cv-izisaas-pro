param()

# Registers a Windows Scheduled Task that runs the project's start-dev.bat at user logon.
# Run this script as the user who should receive the task (no elevated privileges required for /RL LIMITED).

$taskName = "cv-izisaas-pro dev server"
$scriptPath = Join-Path $PSScriptRoot 'start-dev.bat'

Write-Host "Registering scheduled task '$taskName' to run: $scriptPath"

# Use schtasks to create the task at logon. If the task exists, force replace with /F.
$escapedPath = '"' + $scriptPath + '"'

$cmd = "schtasks /Create /SC ONLOGON /RL LIMITED /TN `"$taskName`" /TR $escapedPath /F"

Write-Host "Running: $cmd"
Invoke-Expression $cmd

Write-Host "Scheduled task registered. To remove it, run:`n schtasks /Delete /TN `"$taskName`" /F"
