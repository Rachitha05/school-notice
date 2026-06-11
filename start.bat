@echo off
echo Starting School Notice Board Application...
echo.

echo [1/2] Starting Backend Server...
start cmd /k "cd nodeapp && npm start"

timeout /t 3 /nobreak > nul

echo [2/2] Starting Frontend React App...
start cmd /k "cd reactapp && npm start"

echo.
echo Both servers are starting!
echo Backend: http://localhost:8080
echo Frontend: http://localhost:3000
echo.
pause
