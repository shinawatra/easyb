import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <>
      <Header setDisplay={setDisplay} />
      <Content display={display} />
      <Footer />
    </>
  );
}

export default App;
