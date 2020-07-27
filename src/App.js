import React, { useState } from 'react';
import './App.css';
import { InaccessibleForm } from './InaccessibleForm';
import { AccessibleForm } from './AccessibleForm';

const App = () => {
  const [inaccessibleVisible, setInaccessibleVisible] = useState(true);
  const [blurredView, setBlurredView] = useState(false);

  let content;

  if (inaccessibleVisible) {
    content = <InaccessibleForm />;
  } else {
    content = <AccessibleForm />;
  }

  const styles = blurredView ? {
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      zIndex: '100',
      filter: 'blur(3.5px)'
  } : null;

  return (
    <main>
      <button onClick={() => setInaccessibleVisible(!inaccessibleVisible)}>{`${inaccessibleVisible ? 'Switch to Accessible Version' : 'Switch to Inaccessible Version'}`}</button>
      <button onClick={() => setBlurredView(!blurredView)}>{`${blurredView ? 'Switch to normal view' : 'Simulate blurred view'}`}</button>
      <div style={styles}>
        {content}
      </div>
    </main>
  );
}

export default App;
