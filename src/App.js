import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './GlobalStyles';
import Products from "./components/Products/Products";


function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Navbar/>
      <Products />
    </Router>
  );
}

export default App;

