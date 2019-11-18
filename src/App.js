import React, { useState } from 'react';
import './App.css';
import { InaccessibleForm } from './InaccessibleForm';
import { AccessibleForm } from './AccessibleForm';

const App = () => {
  const [inaccessibleVisible, setInaccessibleVisible] = useState(false);

  let content;

  if (inaccessibleVisible) {
    content = <InaccessibleForm />;
  } else {
    content = <AccessibleForm />;
  }
  return (
    <main>
      <button onClick={() => setInaccessibleVisible(!inaccessibleVisible)}>{`${inaccessibleVisible ? 'Switch to Accessible Version' : 'Switch to Inaccessible Version'}`}</button>
      {content}
    </main>
  );
}

export default App;
