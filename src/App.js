import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { UnaccessibleForm } from './UnaccessibleForm';
import { AccessibleForm } from './AccessibleForm';

const App = () => {
  const [unaccessibleVisible, setUnaccessibileVisible] = useState(true);

  let content;

  if (unaccessibleVisible) {
    content = <UnaccessibleForm />;
  } else {
    content = <AccessibleForm />;
  }
  return (
    <main>
      <button onClick={() => setUnaccessibileVisible(!unaccessibleVisible)}>{`${unaccessibleVisible ? 'Switch to Accessible Version' : 'Switch to Unaccessible Version'}`}</button>
      {content}
    </main>
  );
}

export default App;
