import Header from './components/Header'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const oytieLogo=new URL("./images/Oytie.png",import.meta.url);

function App() {
  return (
    <>
      <Header home="Home" navLink1="LMS Portal" navLink2="Job Portal" contactUs="Contact Us" logo={oytieLogo}/>
      </>  
    );
}

export default App;
