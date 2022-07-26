import './App.css';
import { AppRouter } from './AppRouter';
import { NavBar, MarketingFooter } from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"} />
      <AppRouter/>
      <MarketingFooter width={"100vw"} />
    </div>
  );
}

export default App;
