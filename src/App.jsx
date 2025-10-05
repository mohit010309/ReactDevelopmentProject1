import atomPNG from './assets/react-core-concepts.png';
import componentsPNG from './assets/components.png';
import jsxPNG from './assets/jsx-ui.png';
import propsPNG from './assets/config.png';
import statePNG from './assets/state-mgmt.png';
import CoreConcept from './components/CoreConcept.jsx'
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
            <CoreConcept
              title="Components"
              description="The core UI building block. compose the user interface by combining multiple components."
              image={componentsPNG}/>
            <CoreConcept 
            title = "JSX"
            description = "Return potentially dynamic HTML code to define the actual markup that will be rendered."
            image = {jsxPNG}/>
            <CoreConcept 
            title = "Props"
            description = "Make components configurable and therefore reusable by passing input data to them."
            image = {propsPNG}/>
            <CoreConcept 
            title = "State"
            description = "React-managed data which when changed causes the component to re-render & the UI to update"
            image = {statePNG}/>
          </ul>

        </section>
      </main>
    </div>
  );
}

export default App;
