import './App.css';
import Header from './components/Header';
import generalText from "./assets/images/Yes.svg";

const App = () => {
  return (
    <div className="App">
      <img src={generalText} />
      <Header/>
    </div>
  );
}

export default App;
