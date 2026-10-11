@echo off
REM Batch shim to run the PowerShell starter with execution policy bypass
SET SCRIPT_DIR=%~dp0
powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_DIR%start-dev.ps1"
