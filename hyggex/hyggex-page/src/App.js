
import './App.css';
import Navbar from './components/Navbar'
import Address from "./components/Address";
import Card from './components/Card';
// import Options from "./components/Options";
import FAQ from './components/FAQ';
function App() {
  return (
    <>
      <Navbar />
      <div className="container md:mx-auto">
        <Address />
        <Card />
        {/* <Options /> */}
        <FAQ/>
      </div>
    </>
  );
}

export default App;
