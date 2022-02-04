import React from 'react';
import './App.css';
import StyledForm from './components/StyledForm';

function App() {
  return (
    <div>
      <StyledForm>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Sign In</button>
        </form>
    </StyledForm>
    </div>
  );
}

export default App;
