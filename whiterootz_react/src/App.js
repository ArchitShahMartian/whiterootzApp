import logo from './logo.svg';
import './App.css';
import { Page } from './components/Page.tsx';
import '@blueprintjs/core/lib/css/blueprint.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      <header className="Dark-background">
        <Page/>
      </header>
    </div>
  );
}

export default App;
