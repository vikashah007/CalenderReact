
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
import Plan from './components/Plan';
import Products from './components/Products';
import SetDate from './components/SetDate';
import Header from './components/Header';
function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/Plan' element={<Plan/>}/>
   <Route path='/Products' element={<Products/>}/>
   <Route path='/SetDate' element={<SetDate/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
