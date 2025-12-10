// frontend/src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Importa el componente que acabamos de crear

const container = document.getElementById('root');

if (container) {
  // Aseguramos que el div#root exista antes de montar
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Si el index.html no tiene el div#root, esto saldrá a la consola.
  console.error("El elemento con id='root' no fue encontrado en index.html.");
}
