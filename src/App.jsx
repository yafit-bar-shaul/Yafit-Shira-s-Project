
import './App.css';
import { CreateStore } from './components/context/store';
import { BrowserRouter } from 'react-router-dom';
import  { MyProvider } from './components/context/context';
import MyApp from './components/MyApp';

function App() {

  const store = CreateStore();

  return (

    < MyProvider value={store}>
      <BrowserRouter>

        <MyApp />
      </BrowserRouter>
    </MyProvider>

  );
}

export default App;
