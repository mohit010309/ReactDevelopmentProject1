import atomPNG from './assets/react-core-concepts.png';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js'; 
const ContentList =['Fundamentals','core','crucial'];

function GetRandomIndex()
{
  return Math.floor(Math.random() * (ContentList.length));
}

function Header() {

  const paraHeading = ContentList[GetRandomIndex()];
  return (
    <header>
        <img src={atomPNG} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {paraHeading} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

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
      </main>
    </div>
  );
}

export default App;
