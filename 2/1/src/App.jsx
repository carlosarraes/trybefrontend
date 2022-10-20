import React from 'react';
import About from './About';
import Image from './Image';
import catPic from './images/cat-2083492_1280.jpg'

class App extends React.Component {
  render() {
    return (
      <>
        <About />
        <Image source={catPic} alternativeText='Cute cat staring' />
      </>
    );
  }
}

export default App;