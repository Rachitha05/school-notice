# Troubleshooting Guide

## Common Issues and Solutions

### 1. MongoDB Connection Error

**Error:** `MongoDB Connection Error`

**Solution:**
- Make sure MongoDB is installed and running
- Start MongoDB: `mongod` or use MongoDB Compass
- Or use MongoDB Atlas (cloud) and update the `MONGODB_URI` in `nodeapp/.env`

### 2. Port Already in Use

**Error:** `Port 8080 or 3000 already in use`

**Solution:**
- Kill the process using the port:
  ```bash
  # For port 8080
  netstat -ano | findstr :8080
  taskkill /PID <PID> /F
  
  # For port 3000
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```

### 3. CORS Error

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:**
- Make sure backend is running on port 8080
- Check that `cors` is installed in backend: `npm install cors`
- Verify `.env` file in reactapp has: `VITE_API_URL=http://localhost:8080/api`

### 4. Module Not Found

**Error:** `Cannot find module 'express'` or similar

**Solution:**
- Run `npm install` in both `nodeapp` and `reactapp` directories
- Or use the provided `setup.bat` script

### 5. React Router Not Working

**Error:** Blank page or routing issues

**Solution:**
- Clear browser cache
- Make sure `react-router-dom` v6 is installed
- Check browser console for errors

### 6. Data Not Showing

**Issue:** Notices not displaying

**Solution:**
- Check if backend is running: `http://localhost:8080/api/notices`
- Open browser DevTools Network tab to see API calls
- Verify MongoDB has data or add a notice first

## Quick Commands

### Install Dependencies
```bash
cd nodeapp && npm install
cd ../reactapp && npm install
```

### Start Backend
```bash
cd nodeapp
npm start
```

### Start Frontend
```bash
cd reactapp
npm start
```

### Check if MongoDB is Running
```bash
mongod --version
```

## Need Help?

Check the console logs in both terminal windows for detailed error messages.
