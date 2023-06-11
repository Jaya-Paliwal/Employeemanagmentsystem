import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ListofEmployee from './components/ListofEmployee';
import AddNewEmployee from './components/AddNewEmployee';
import EditEmployee from './components/EditEmployee';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
     
   <BrowserRouter>
   <nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid d-flex justify-content-start p-1">
    <div className="navbar-header">
      <button className="navbar-brand fw-bolder">TFV</button>
    </div>
    <ul className="nav navbar-nav">
      <li className="fw-bolder"><Link to="/">Home</Link></li>
      <li className="fw-bolder"><Link to="ListofEmployee">List</Link></li>
      <li className="fw-bolder"><Link to="AddEmployee">Add</Link></li>
    </ul>
  </div>
</nav>
   <Routes>
    <Route index ='/' element={<Home/>}/>
    <Route path='ListofEmployee' element={<ListofEmployee/>} />
    <Route path='AddEmployee' element={<AddNewEmployee/>} />
    <Route path='ListofEmployee/EditEmployee/:id' element={<EditEmployee/>} />
   </Routes>
   </BrowserRouter>
   
    </div>
  );
}

export default App;


