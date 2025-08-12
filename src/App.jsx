import coreConceptsPng from './assets/react-core-concepts.png';
import coreConceptImage from './assets/components.png';
const ContentList =['Fundamentals','core','crucial'];

function GetRandomIndex()
{
  return Math.floor(Math.random() * (ContentList.length));
}

function Header() {

  const paraHeading = ContentList[GetRandomIndex()];
  return (
    <header>
        <img src={coreConceptsPng} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {paraHeading} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcepts(props)
{
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
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
            <CoreConcepts
              title="Components"
              description="The core UI building block."
              image={coreConceptImage}/>
            <CoreConcepts />
            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
