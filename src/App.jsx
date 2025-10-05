import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import { createElement,Fragment } from 'react';

function App() {

  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>

  //   return (
  //   createElement(Fragment,null,
  //     createElement(Header),
  //     createElement('main',null,createElement(CoreConcepts),createElement(Examples))
  //   )
  // );
  );
}

export default App;
