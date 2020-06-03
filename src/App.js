import React from 'react';

import Header from './components/Header';
import Title from './components/Title';

function App() {
  return (
    <>
      <Header />
      <Title title="título via props" />
      <Title title="outro título via props">
        <p>children</p>
      </Title>
    </>
  );
}

export default App;
