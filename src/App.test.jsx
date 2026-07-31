import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { it } from 'vitest';
import App from './App';

const history = createMemoryHistory();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(
    <Router history={history}>
      <App />
    </Router>
  );
  root.unmount();
});
