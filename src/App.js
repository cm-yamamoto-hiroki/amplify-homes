import './App.css';
import { HomeCardCollection, NavBar, MarketingFooter } from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeCardCollection />
      <MarketingFooter />
    </div>
  );
}

export default App;