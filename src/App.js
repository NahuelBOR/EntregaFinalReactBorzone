import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import { LoginProvider } from './components/LoginContext/LoginContext';
import AppRouter from './router/AppRouter';



const App = () => {

  return (
    <LoginProvider>
      

      <CartProvider>
        <AppRouter />
      </CartProvider>

    </LoginProvider>

  );
}

export default App;

