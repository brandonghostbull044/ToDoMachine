import React from 'react';
import { RenderUI } from './RenderUI';
import { TodoProvider } from '../TodoContext';

function App() {
  return (
    <TodoProvider>
      <RenderUI />
    </TodoProvider>
  );
  
}

export default App;