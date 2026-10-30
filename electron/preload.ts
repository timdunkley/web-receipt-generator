import { contextBridge } from 'electron';

// Expose the safe API to render the process
contextBridge.exposeInMainWorld('electronAPI', {
  // You can add the IPC communication method you need here.
  // For example：
  // sendMessage: (message: string) => ipcRenderer.send('message', message),
  // onResponse: (callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => {
  //   ipcRenderer.on('response', callback);
  //   return () => ipcRenderer.removeListener('response', callback);
  // },
  
  // System information
  platform: process.platform,
});

// All Node.js APIs in the preloaded script can be used.
console.log('Electron preload script loaded');
