import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './GlobalStyles';
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Navbar/>
      <Products />
      <Footer />
    </Router>
  );
}

export default App;

