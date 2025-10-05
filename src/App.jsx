import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js'; 
import { EXAMPLES } from './data.js';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>CoreConcepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept id={concept.title} {...concept}/>
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <li><button>Components</button></li>
            <li><button>JSX</button></li>
            <li><button>Props</button></li>
            <li><button>State</button></li>
          </menu>

          <div id='tab-content'>
            <h3>{EXAMPLES.components.title}</h3>
            <p>{EXAMPLES.components.description}</p>
            <pre>
              <code>{EXAMPLES.components.code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
