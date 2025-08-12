import coreConceptsPng from './assets/react-core-concepts.png';
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

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
