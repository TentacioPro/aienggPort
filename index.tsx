
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import favicons so Vite bundles them and we can set correct hashed paths at runtime
import faviconIco from './assets/Tesla.ico';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Apply theme initialization styles to root
rootElement.style.backgroundColor = 'var(--bg-color)';
rootElement.style.color = 'var(--text-color)';
rootElement.style.fontFamily = 'var(--primary-font)';
rootElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
rootElement.style.minHeight = '100vh';

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Update favicon links at runtime to point to bundled assets (ensures correct paths on GitHub Pages)
try {
  const icoLink = document.querySelector('link[rel~="icon"]') as HTMLLinkElement | null;
  if (icoLink) icoLink.href = faviconIco;

  const shortcut = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement | null;
  if (shortcut) shortcut.href = faviconIco;

  // If an apple-touch-icon exists, point it to the same ico (PNG not present)
  const apple = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement | null;
  if (apple) apple.href = faviconIco;
} catch (e) {
  // noop - if DOM not ready or import fails, browser will fallback to static links
}
