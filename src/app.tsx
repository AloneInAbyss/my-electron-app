import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);
root.render(React.createElement(App));

function App() {
  const [name, setName] = useState('Loading...');

  useEffect(() => {
    // Call the bridge we created in preload.js
    window.electronAPI.getUser().then((userName) => {
      setName(userName);
    });
  }, []);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This name came directly from your Operating System.</p>
    </div>
  );
}
