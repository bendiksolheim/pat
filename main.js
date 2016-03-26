const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

require('electron-reload')(__dirname);

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        'title-bar-style': 'hidden-inset'
    });
    mainWindow.loadURL(`file://${__dirname}/static/index.html`);
    mainWindow.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
});