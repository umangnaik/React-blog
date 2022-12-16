import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import { Main } from './main/main';
import { Login } from './pages/Login';
import { Navbar } from './components/navbar';
import { CreatePost } from "./pages/create-post/CreatePost"
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path = "/" element={<Main/>}>
          </Route>
          <Route path = "/login" element={<Login/>}>
          </Route>
          <Route path = "/createpost" element={<CreatePost/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
