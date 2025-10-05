import atomPNG from '../assets/react-core-concepts.png';
const ContentList =['Fundamentals','core','crucial'];

function GetRandomIndex()
{
  return Math.floor(Math.random() * (ContentList.length));
}

export default function Header() {

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