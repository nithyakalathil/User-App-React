import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ViewAll from './components/ViewAll';

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/s' element={<SignUp/>}/>
  <Route path='/v' element={<ViewAll/>}/>
</Routes>
  </BrowserRouter>


  );
}

export default App;
