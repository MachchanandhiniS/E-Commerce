import './App.css';
import AddProduct from './Components/AddProduct';
import Homepage from './Components/Homepage';
import ViewProductDetaiils from './Components/ViewProductDetails';
import {Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomepageUser from './Components/User/HomepageUser';
import { Trends } from './Components/User/Trends';

function App() {
  
  return (
    
    <Routes>
      
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='trends' element={<Trends></Trends>}></Route>
      <Route path='user' element={<HomepageUser></HomepageUser>}></Route>
      <Route path='AddProducts' element={<AddProduct></AddProduct>}></Route>
      <Route path='ViewProductDetails' element={<ViewProductDetaiils></ViewProductDetaiils>}></Route>
    </Routes>
  );
}

export default App;
