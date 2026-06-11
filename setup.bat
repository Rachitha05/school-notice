@echo off
echo Installing dependencies for School Notice Board Application...
echo.

echo [1/2] Installing Backend Dependencies...
cd nodeapp
call npm install
cd ..

echo.
echo [2/2] Installing Frontend Dependencies...
cd reactapp
call npm install
cd ..

echo.
echo ✅ Setup Complete!
echo.
echo To start the application, run: start.bat
echo Or manually:
echo   1. cd nodeapp && npm start
echo   2. cd reactapp && npm start
echo.
pause
