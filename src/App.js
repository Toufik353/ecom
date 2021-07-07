import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar/TopBar';
import MainPage from './Components/MainPage/MainPage';
import {BrowserRouter, Route,Switch} from "react-router-dom"
import CartPage from "./Components/CartPage/CartPage"
import ConfirmOrderPage from './Components/ConfirmOrderPage/ConfirmOrderPage';

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <switch>

     <TopBar/>
     <Route exact path="/">
     <MainPage/>
       </Route>
     <Route exact path="/cartPage/"><CartPage/></Route>

     <Route exact path="/orderConfirmPage/"><ConfirmOrderPage/></Route>
      </switch>
    </div>
</BrowserRouter>
  );
}

export default App;
