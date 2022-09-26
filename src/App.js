import './App.css';
import './App.dark.css';
import Header from './components/Header';
import Main from './components/Main';
import { AppProvider } from './contexts/AppState';

function App() {

  return (
    <AppProvider>
      <Header />
      <Main />
    </AppProvider>
  );
}

export default App;
