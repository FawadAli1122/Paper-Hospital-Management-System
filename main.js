const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load index.html
  win.loadFile(path.join(__dirname, 'windows', 'registration.html'));
}

app.whenReady().then(createWindow);
