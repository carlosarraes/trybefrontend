import React from 'react';
import Dados from './Dados';
import DadJoke from './DadJoke';

class App extends React.Component {
  render() {
    return (
      <>
        <Dados />
        <hr />
        <DadJoke />
      </>
    );
  }
}

export default App;