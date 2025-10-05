import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
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
            <TabButton isSelected = {selectedTopic === 'components'} onSelect={()=>(setSelectedTopic('components'))}>Components</TabButton>
            <TabButton isSelected = {selectedTopic === 'jsx'} onSelect={()=>(setSelectedTopic('jsx'))}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === 'props'} onSelect={()=>(setSelectedTopic('props'))}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === 'state'} onSelect={()=>(setSelectedTopic('state'))}>State</TabButton>
          </menu>

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
