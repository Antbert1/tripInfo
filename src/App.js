import './App.css';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';
import Root from './components/Root';

function App() {
  return (
    <StoreProvider store={store}>
      <Root />
    </StoreProvider>
  );
}

export default App;
