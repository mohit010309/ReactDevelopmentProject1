import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js'; 
import { EXAMPLES } from './data.js';
import {useState} from 'react';

function App() {
  const [selectedTopic,setSelectedTopic] = useState();

  var tabContent = 'Please select a topic!';
  if(selectedTopic)
  {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>CoreConcepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key = {concept.title} id={concept.title} {...concept}/>
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <li><button className={selectedTopic=="components" ? 'active':undefined} onClick={()=>(setSelectedTopic('components'))}>Components</button></li>
            <li><button className={selectedTopic=="jsx" ? 'active':undefined} onClick={()=>(setSelectedTopic('jsx'))}>JSX</button></li>
            <li><button className={selectedTopic=="props" ? 'active':undefined} onClick={()=>(setSelectedTopic('props'))}>Props</button></li>
            <li><button className={selectedTopic=="state" ? 'active':undefined} onClick={()=>(setSelectedTopic('state'))}>State</button></li>
          </menu>

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
